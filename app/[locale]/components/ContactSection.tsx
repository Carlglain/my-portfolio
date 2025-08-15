'use client'
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import styles from './ContactSection.module.css'; // Make sure this path is correct

const ContactSection = () => {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API endpoint)
    console.log('Form submitted:', formData);
    // Optionally, reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    { href: "mailto:carlglain@example.com", icon: <MessageSquare /> }
  ];

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* ======== Section Header ======== */}
        <div className={styles.sectionHeader}>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        {/* ======== Main Content Grid ======== */}
        <div className={styles.gridContainer}>
          
          {/* ======== Left Column: Contact Form ======== */}
          <div className={styles.formCard}>
            <h3>{t('form_title')}</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{t('name')}</label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder={t('name_placeholder')}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{t('email')}</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder={t('email_placeholder')}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">{t('message')}</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required
                  rows={5}
                  className={styles.formTextarea}
                  placeholder={t('message_placeholder')}
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                <Send size={20} />
                {t('send_message')}
              </button>
            </form>
          </div>

          {/* ======== Right Column: Contact Info ======== */}
          <div className={styles.infoColumn}>
            
            {/* --- Contact Details --- */}
            <div className={styles.infoBlock}>
              <h3>{t('contact_info')}</h3>
              <div className={styles.detailsList}>
                {contactInfo.map((item, index) => (
                  <div key={index} className={styles.detailItem}>
                    <div className={styles.iconWrapper}>
                      {React.cloneElement(item.icon, { size: 24, className: styles.icon })}
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Social Links --- */}
            <div className={styles.infoBlock}>
              <h3>{t('follow_me')}</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {React.cloneElement(link.icon, { size: 24 })}
                  </a>
                ))}
              </div>
            </div>

            {/* --- Availability --- */}
            <div className={styles.availabilityCard}>
              <h4>{t('availability_title')}</h4>
              <p>{t('availability_text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;