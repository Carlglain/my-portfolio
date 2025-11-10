'use client';
import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, Download } from 'lucide-react';
import Link from 'next/link';
import styles from './AboutSection.module.css'; // Import the CSS module

const AboutSection = () => {
  const t = useTranslations('about');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { number: '2+', label: t('years_experience') },
    { number: '3+', label: t('projects_completed') },
    { number: '1+', label: t('happy_clients') },
  ];

  const coreSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'Firebase', 'Git', 'Expo', 'React Native','Next.js'];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* ======== Section Header ======== */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </motion.div>

        {/* ======== Main Content Grid ======== */}
        <motion.div 
          className={styles.gridContainer}
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          
          {/* ======== Left Column ======== */}
          <motion.div 
            className={styles.leftColumn}
            variants={itemVariants}
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('description')}
            </motion.h3>

            {/* --- Experience Card --- */}
            <motion.div 
              className={styles.infoBlock}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>

            {/* --- Download CV Button --- */}
            <motion.div 
              className={styles.buttonContainer}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/Resume.pdf" download className={styles.downloadButton}>
                  <Download size={20} />
                  {t('download_cv')}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ======== Right Column ======== */}
          <motion.div 
            className={styles.rightColumn}
            variants={itemVariants}
          >
            
            {/* --- Stats Grid --- */}
            <motion.div 
              className={styles.statsGrid}
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className={styles.statCard}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={styles.statNumber}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* --- Skills Block --- */}
            <motion.div 
              className={styles.infoBlock}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className={styles.blockTitle}>Core Competencies</h4>
              <motion.div 
                className={styles.skillsContainer}
                variants={containerVariants}
              >
                {coreSkills.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    className={styles.skillTag}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* --- Education Card --- */}
            <motion.div 
              className={styles.infoBlock}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className={styles.blockTitle}>
                <GraduationCap size={22} className={styles.titleIcon} />
                {t('education')}
              </h4>
              <div className={styles.card}>
                <h5>Bachelor&apos;s in Computer Engineering</h5>
                <p className={styles.companyName}>University of Buea</p>
                <p className={styles.educationDate}>2022 - 2026</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
