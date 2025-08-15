import React from 'react';
import { useTranslations } from 'next-intl';
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
      features: ['RESTful APIs', 'GraphQL', 'Authentication', 'Documentation']
    },
    {
      icon: <Database />,
      title: t('database_design.title'),
      description: t('database_design.description'),
      features: ['Schema Design', 'Performance Tuning', 'Data Migration', 'Backup Strategies']
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

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        
        {/* ======== Section Header ======== */}
        <div className={styles.sectionHeader}>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        {/* ======== Services Grid ======== */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                {React.cloneElement(service.icon, { size: 36, className: styles.icon })}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.featuresList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <div className={styles.featureBullet}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={styles.learnMoreLink}>
                <span>Learn More</span>
                <ArrowRight size={20} className={styles.arrowIcon} />
              </a>
            </div>
          ))}
        </div>

        {/* ======== Process Section ======== */}
        <div className={styles.subSection}>
          <div className={styles.sectionHeader}>
            <h3>My Development Process</h3>
            <p>I follow a systematic approach to deliver high-quality solutions that meet your needs.</p>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((process, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{process.step}</div>
                <h4>{process.title}</h4>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ======== CTA Section ======== */}
        <div className={styles.subSection}>
          <div className={styles.ctaCard}>
            <h3>Ready to Start Your Project?</h3>
            <p>Let&apos;s discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.</p>
            <div className={styles.ctaButtons}>
              <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                Get Started
              </a>
              <a href="#projects" className={`${styles.btn} ${styles.btnSecondary}`}>
                View My Work
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;