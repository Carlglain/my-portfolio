import React from 'react';
import { useTranslations } from 'next-intl';
import { Briefcase, GraduationCap, MapPin, Calendar, Download } from 'lucide-react';
import Link from 'next/link';
import styles from './AboutSection.module.css'; // Import the CSS module

const AboutSection = () => {
  const t = useTranslations('about');

  const stats = [
    { number: '2+', label: t('years_experience') },
    { number: '15+', label: t('projects_completed') },
    { number: '10+', label: t('happy_clients') },
  ];

  const coreSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Docker', 'Git'];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* ======== Section Header ======== */}
        <div className={styles.sectionHeader}>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        {/* ======== Main Content Grid ======== */}
        <div className={styles.gridContainer}>
          
          {/* ======== Left Column ======== */}
          <div className={styles.leftColumn}>
            <h3>{t('description')}</h3>

            {/* --- Experience Card --- */}
            <div className={styles.infoBlock}>
              <h4 className={styles.blockTitle}>
                <Briefcase size={22} className={styles.titleIcon} />
                {t('experience')}
              </h4>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h5>{t('internship_title')}</h5>
                    <p className={styles.companyName}>{t('internship_company')}</p>
                  </div>
                  <div className={styles.date}>
                    <Calendar size={16} />
                    <span>{t('internship_period')}</span>
                  </div>
                </div>
                <div className={styles.location}>
                  <MapPin size={16} />
                  <span>{t('internship_location')}</span>
                </div>
                <p className={styles.cardDescription}>
                  {t('internship_description')}
                </p>
              </div>
            </div>

            {/* --- Download CV Button --- */}
            <div className={styles.buttonContainer}>
              <Link href="/Resume.pdf" download className={styles.downloadButton}>
                <Download size={20} />
                {t('download_cv')}
              </Link>
            </div>
          </div>

          {/* ======== Right Column ======== */}
          <div className={styles.rightColumn}>
            
            {/* --- Stats Grid --- */}
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* --- Skills Block --- */}
            <div className={styles.infoBlock}>
              <h4 className={styles.blockTitle}>Core Competencies</h4>
              <div className={styles.skillsContainer}>
                {coreSkills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* --- Education Card --- */}
            <div className={styles.infoBlock}>
              <h4 className={styles.blockTitle}>
                <GraduationCap size={22} className={styles.titleIcon} />
                {t('education')}
              </h4>
              <div className={styles.card}>
                <h5>Bachelor&apos;s in Computer Engineering</h5>
                <p className={styles.companyName}>University of Buea</p>
                <p className={styles.educationDate}>2022 - 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;