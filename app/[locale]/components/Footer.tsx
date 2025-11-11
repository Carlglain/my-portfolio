"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css'; // Make sure this path is correct

const Footer = () => {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/carlglain", label: "GitHub", icon: <Github /> },
    { href: "https://linkedin.com/in/carlglain", label: "LinkedIn", icon: <Linkedin /> },
    { href: "https://twitter.com/carlglain", label: "Twitter", icon: <Twitter /> },
    { href: "mailto:carlglain@example.com", label: "Email", icon: <Mail /> }
  ];

  const quickLinks = [
    { href: "#home", label: t('home') },
    { href: "#about", label: t('about') },
    { href: "#skills", label: t('skills') },
    { href: "#projects", label: t('projects') },
    { href: "#contact", label: t('contact') }
  ];
  
  const servicesLinks = [
    { label: t('web_development') },
    { label: t('mobile_development') },
    { label: t('ui_ux_design') },
    { label: t('consulting') }
  ];

  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* ======== Footer Main Content Grid ======== */}
        <motion.div className={styles.footerGrid} variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-80px' }}>
          
          {/* --- Brand & Socials --- */}
          <motion.div className={styles.brandSection} variants={itemVariants}>
            <h3>Carlglain 🔥</h3>
            <p>{t('description')}</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <motion.a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {React.cloneElement(link.icon, { size: 24 })}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* --- Quick Links --- */}
          <motion.div className={styles.linkSection} variants={itemVariants}>
            <h4>{t('quick_links')}</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </motion.div>

          {/* --- Services --- */}
          <motion.div className={styles.linkSection} variants={itemVariants}>
            <h4>{t('services')}</h4>
            <ul className={styles.linkList}>
              {servicesLinks.map((service) => (
                <li key={service.label}><span>{service.label}</span></li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ======== Footer Bottom Bar ======== */}
        <motion.div className={styles.footerBottom} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <p>© {currentYear} {t('copyright')}</p>
          <div className={styles.legalLinks}>
            <a href="#privacy">{t('privacy_policy')}</a>
            <a href="#terms">{t('terms_of_service')}</a>
          </div>
        </motion.div>

      </div>
      
      {/* ======== Back to Top Button ======== */}
      <motion.button 
        onClick={scrollToTop} 
        className={styles.backToTopButton} 
        aria-label="Back to top"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;