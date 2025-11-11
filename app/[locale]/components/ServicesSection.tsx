"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code, 
  Database, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import styles from './ServicesSection.module.css'; // Make sure this path is correct

const ServicesSection = () => {
  const t = useTranslations('services');

  const services = [
    {
      icon: <Globe />,
      title: t('web_development.title'),
      description: t('web_development.description'),
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'SEO Friendly']
    },
    {
      icon: <Smartphone />,
      title: t('mobile_development.title'),
      description: t('mobile_development.description'),
      features: ['Cross-platform', 'Native Performance', 'App Store Deployment', 'Push Notifications']
    },
    {
      icon: <Palette />,
      title: t('ui_ux_design.title'),
      description: t('ui_ux_design.description'),
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Code />,
      title: t('api_development.title'),
      description: t('api_development.description'),
      features: ['RESTful APIs', 'Authentication', 'Documentation']
    },
    {
      icon: <Database />,
      title: t('database_design.title'),
      description: t('database_design.description'),
      features: ['Schema Design',  'Backup Strategies']
    },
    {
      icon: <Lightbulb />,
      title: t('consulting.title'),
      description: t('consulting.description'),
      features: ['Architecture Review', 'Technology Selection', 'Best Practices', 'Code Reviews']
    }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'Understanding your requirements and project goals' },
    { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and architecture' },
    { step: '03', title: 'Development', description: 'Building your solution with best practices' },
    { step: '04', title: 'Deployment', description: 'Launching and maintaining your application' }
  ];

  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className={styles.servicesSection}>
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

        {/* ======== Services Grid ======== */}
        <motion.div 
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={styles.serviceCard}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <motion.div className={styles.iconWrapper} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                {React.cloneElement(service.icon, { size: 36, className: styles.icon })}
              </motion.div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((feature, i) => (
                  <motion.li key={i} className={styles.featureItem} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
                    <div className={styles.featureBullet}></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.a href="#contact" className={styles.learnMoreLink} whileHover={{ x: 4 }} transition={{ duration: 0.15 }}>
                <span>Learn More</span>
                <ArrowRight size={20} className={styles.arrowIcon} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* ======== Process Section ======== */}
        <motion.div className={styles.subSection} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className={styles.sectionHeader}>
            <h3>My Development Process</h3>
            <p>I follow a systematic approach to deliver high-quality solutions that meet your needs.</p>
          </div>
          <motion.div className={styles.processGrid} variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {processSteps.map((process, index) => (
              <motion.div key={index} className={styles.processStep} variants={cardVariants}>
                <div className={styles.stepNumber}>{process.step}</div>
                <h4>{process.title}</h4>
                <p>{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ======== CTA Section ======== */}
        <motion.div className={styles.subSection} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <motion.div className={styles.ctaCard} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <h3>Ready to Start Your Project?</h3>
            <p>Let&apos;s discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.</p>
            <div className={styles.ctaButtons}>
              <motion.a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                Get Started
              </motion.a>
              <motion.a href="#projects" className={`${styles.btn} ${styles.btnSecondary}`} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ServicesSection;