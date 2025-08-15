'use client';
import Link from 'next/link';
import React from 'react';
import { Download, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import styles from './ResumeDownload.module.css'; // Import the CSS module

function ResumeDownload() {
  const t = useTranslations('hero');
  
  return (
    // The main container that handles the layout (column on mobile, row on desktop)
    <div className={styles.container}>

      {/* Contact button */}
      <Link 
        href="#contact"
        className={`${styles.btn} ${styles.contactBtn}`}
      >
        <Mail size={20} />
        <span>{t('button3')}</span>
      </Link>

      {/* Resume download button */}
      <a
        href="/Resume.pdf" 
        download
        className={`${styles.btn} ${styles.resumeBtn}`}
      >
        <Download size={20} className={styles.downloadIcon} />
        <span>{t('button4')}</span>
      </a>
    </div>
  );
}

export default ResumeDownload;