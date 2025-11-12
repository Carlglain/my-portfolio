'use server'

export async function sendSupportEmailForm(
  prevState: { message: string },
  formData: FormData,
): Promise<{ message: string }> {
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  // Validate required fields
  if (!name || !email || !message) {
    return { message: 'Please fill in all required fields.' };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { message: 'Please enter a valid email address.' };
  }

  // Check for access key
  if (!process.env.WEB3FORMS_ACCESS_KEY) {
    console.error('WEB3FORMS_ACCESS_KEY is not set');
    return { message: 'Email service configuration error.' };
  }

  try {
    console.log('Sending to Web3Forms...');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name: name,
        email: email,
        message: message,
        subject: `New Contact Form Submission from ${name}`,
        from_name: 'Portfolio Contact Form',
        replyto: email,
      }),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers.get('content-type'));

    // Check if response is OK
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Web3Forms error response:', errorText);
      return { message: 'Failed to send message. Please try again.' };
    }

    // Check content type before parsing
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Non-JSON response:', text.substring(0, 200));
      return { message: 'Email service error. Please try again.' };
    }

    const result = await response.json();
    
    console.log('Web3Forms response:', result);

    if (result.success) {
      return { message: 'Message sent successfully! I\'ll get back to you soon.' };
    } else {
      console.error('Web3Forms error:', result.message);
      return { message: 'Failed to send message. Please try again.' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: 'Failed to send message. Please try again or email me directly.' };
  }
}