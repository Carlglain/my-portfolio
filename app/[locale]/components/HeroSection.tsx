'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Me0 from '@/assets/me0.jpg';
import ResumeDownload from './ResumeDownload';
import { useTranslations } from 'next-intl';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const t = useTranslations('hero');

  const socialLinks: { icon: React.ElementType; href: string }[] = [
    { icon: Mail, href: 'mailto:carlglain@example.com' },
    { icon: Github, href: 'https://github.com/carlglain' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nyuysemo-calglain-ab2a60221' },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* ======== Left Content ======== */}
          <motion.div 
            className={styles.textContent}
            variants={itemVariants}
          >
            <motion.div 
              className={styles.headings}
              variants={containerVariants}
            >
              <motion.h1 variants={itemVariants}>{t('title')}</motion.h1>
              <motion.h2 variants={itemVariants}>{t('subtitle')}</motion.h2>
              <motion.p variants={itemVariants}>{t('description')}</motion.p>
            </motion.div>

            <motion.div 
              className={styles.actionButtons}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link href="#skills" className={`${styles.btn} ${styles.btnPrimary}`}>
                  {t('button1')}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#projects" className={`${styles.btn} ${styles.btnSecondary}`}>
                  {t('button2')}
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="#contact" className={`${styles.btn} ${styles.btnTertiary}`}>
                  {t('button3')}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.socialLinks}
              variants={containerVariants}
            >
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <motion.a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ======== Right Content - Profile Image ======== */}
          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className={styles.imageColumn}>
              <motion.div 
                className={styles.imageWrapper}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={styles.backgroundShape1}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                ></motion.div>
                <motion.div 
                  className={styles.backgroundShape2}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className={styles.imageInner}
                >
                  <Image
                    src={Me0}
                    alt="Carlglain Nyuykividzem"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.profileImage}
                    fill
                    priority
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className={styles.resumeDownload}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <ResumeDownload />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* ======== Scroll Down Indicator ======== */}
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Link href="#about">
              <ChevronDown size={32} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;