"use client"
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageSquare, Loader2, CheckCircle, XCircle } from 'lucide-react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus({ type: null, message: '' });

  const formData = new FormData(e.currentTarget);
  
  // Validate access key exists
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error('Web3Forms access key is not configured');
    setSubmitStatus({ 
      type: 'error', 
      message: 'Form configuration error. Please contact the site administrator.' 
    });
    setIsSubmitting(false);
    return;
  }
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        subject: `New Contact Form Submission from ${formData.get('name')}`,
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      if (formRef.current) {
        formRef.current.reset();
      }
    } else {
      console.error('Web3Forms error:', result);
      setSubmitStatus({ 
        type: 'error', 
        message: result.message || 'Failed to send message. Please try again.' 
      });
    }
  } catch (error) {
    console.error('Error:', error);
    setSubmitStatus({ 
      type: 'error', 
      message: 'Failed to send message. Please try again or email me directly.' 
    });
  } finally {
    setIsSubmitting(false);
  }
};
  const contactInfo = [
    { icon: <Mail />, title: t('email_title'), value: 'carlglainnyuysemo@gmail.com' },
    { icon: <MapPin />, title: t('location_title'), value: 'Buea, Cameroon' },
    { icon: <Phone />, title: t('phone_title'), value: '+237 650 608 635' }
  ];

  const socialLinks = [
    { href: "https://github.com/carlglain", icon: <Github /> },
    { href: "https://linkedin.com/in/carlglain", icon: <Linkedin /> },
    { href: "https://twitter.com/carlglain", icon: <Twitter /> },
    { href: "mailto:carlglainnyuysemo@gmail.com", icon: <MessageSquare /> }
  ];

  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* ======== Section Header ======== */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </motion.div>

        {/* ======== Main Content Grid ======== */}
        <motion.div className={styles.gridContainer} variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-60px' }}>
          
          {/* ======== Left Column: Contact Form ======== */}
          <motion.div className={styles.formCard} variants={itemVariants}>
            <h3>{t('form_title')}</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
                <label htmlFor="name">{t('name')}</label>
                <input
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  disabled={isSubmitting}
                  className={styles.formInput}
                  placeholder={t('name_placeholder')}
                />
              </motion.div>
              
              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 }}>
                <label htmlFor="email">{t('email')}</label>
                <input
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  disabled={isSubmitting}
                  className={styles.formInput}
                  placeholder={t('email_placeholder')}
                />
              </motion.div>
              
              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.1 }}>
                <label htmlFor="message">{t('message')}</label>
                <textarea
                  id="message" 
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className={styles.formTextarea}
                  placeholder={t('message_placeholder')}
                />
              </motion.div>

              {/* Display feedback message */}
              {submitStatus.type && (
                <motion.div 
                  className={`${styles.formMessage} ${submitStatus.type === 'success' ? styles.success : styles.error}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle size={18} style={{ marginRight: '8px' }} />
                  ) : (
                    <XCircle size={18} style={{ marginRight: '8px' }} />
                  )}
                  {submitStatus.message}
                </motion.div>
              )}
              
              <motion.button 
                type="submit" 
                className={styles.submitButton} 
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.03 } : {}} 
                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className={styles.spinner} />
                    {t('sending') || 'Sending...'}
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t('send_message')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ======== Right Column: Contact Info ======== */}
          <motion.div className={styles.infoColumn} variants={itemVariants}>
            
            {/* --- Contact Details --- */}
            <motion.div className={styles.infoBlock} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <h3>{t('contact_info')}</h3>
              <div className={styles.detailsList}>
                {contactInfo.map((item, index) => (
                  <motion.div key={index} className={styles.detailItem} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05 }}>
                    <div className={styles.iconWrapper}>
                      {React.cloneElement(item.icon, { size: 24, className: styles.icon })}
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* --- Social Links --- */}
            <motion.div className={styles.infoBlock} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <h3>{t('follow_me')}</h3>
              <motion.div className={styles.socialLinks} variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
                {socialLinks.map((link, index) => (
                  <motion.a key={index} href={link.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.25 }}>
                    {React.cloneElement(link.icon, { size: 24 })}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* --- Availability --- */}
            <motion.div className={styles.availabilityCard} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
              <h4>{t('availability_title')}</h4>
              <p>{t('availability_text')}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;