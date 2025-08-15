'use client'
import React from 'react';
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

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* ======== Footer Main Content Grid ======== */}
        <div className={styles.footerGrid}>
          
          {/* --- Brand & Socials --- */}
          <div className={styles.brandSection}>
            <h3>Carlglain 🔥</h3>
            <p>{t('description')}</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {React.cloneElement(link.icon, { size: 24 })}
                </a>
              ))}
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div className={styles.linkSection}>
            <h4>{t('quick_links')}</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* --- Services --- */}
          <div className={styles.linkSection}>
            <h4>{t('services')}</h4>
            <ul className={styles.linkList}>
              {servicesLinks.map((service) => (
                <li key={service.label}><span>{service.label}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* ======== Footer Bottom Bar ======== */}
        <div className={styles.footerBottom}>
          <p>© {currentYear} {t('copyright')}</p>
          <div className={styles.legalLinks}>
            <a href="#privacy">{t('privacy_policy')}</a>
            <a href="#terms">{t('terms_of_service')}</a>
          </div>
        </div>

      </div>
      
      {/* ======== Back to Top Button ======== */}
      <button onClick={scrollToTop} className={styles.backToTopButton} aria-label="Back to top">
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;