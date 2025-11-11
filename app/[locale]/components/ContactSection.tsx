"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder={t('name_placeholder')}
                />
              </motion.div>
              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 }}>
                <label htmlFor="email">{t('email')}</label>
                <input
                  type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder={t('email_placeholder')}
                />
              </motion.div>
              <motion.div className={styles.formGroup} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.1 }}>
                <label htmlFor="message">{t('message')}</label>
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange}
                  required
                  rows={5}
                  className={styles.formTextarea}
                  placeholder={t('message_placeholder')}
                />
              </motion.div>
              <motion.button type="submit" className={styles.submitButton} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Send size={20} />
                {t('send_message')}
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