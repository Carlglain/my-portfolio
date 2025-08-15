import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Me0 from '@/assets/me0.jpg';
import ResumeDownload from './ResumeDownload';
import { useTranslations } from 'next-intl';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';
import styles from './HeroSection.module.css'; // Import the CSS module

const HeroSection = () => {
  const t = useTranslations('hero');

  const socialLinks = [
    { icon: Mail, href: 'mailto:carlglain@example.com' },
    { icon: Github, href: 'https://github.com/carlglain' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nyuysemo-calglain-ab2a60221' },
  ];

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* ======== Left Content ======== */}
          <div className={styles.textContent}>
            <div className={styles.headings}>
              <h1>{t('title')}</h1>
              <h2>{t('subtitle')}</h2>
              <p>{t('description')}</p>
            </div>

            <div className={styles.actionButtons}>
              <Link href="#skills" className={`${styles.btn} ${styles.btnPrimary}`}>
                {t('button1')}
              </Link>
              <Link href="#projects" className={`${styles.btn} ${styles.btnSecondary}`}>
                {t('button2')}
              </Link>
              <Link href="#contact" className={`${styles.btn} ${styles.btnTertiary}`}>
                {t('button3')}
              </Link>
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* ======== Right Content - Profile Image ======== */}
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <div className={styles.backgroundShape1}></div>
              <div className={styles.backgroundShape2}></div>
              <Image
                src={Me0}
                alt="Carlglain Nyuykividzem"
                className={styles.profileImage}
                fill
                priority
              />
              <div className={`${styles.resumeDownload} `}>
                <ResumeDownload />
              </div>
            </div>
          </div>
        </div>

        {/* ======== Scroll Down Indicator ======== */}
        <div className={styles.scrollIndicator}>
          <Link href="#about">
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;