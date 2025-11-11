"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Cloud, 
  GitBranch,
  Zap,
  Shield
} from 'lucide-react';
import styles from './SkillsSection.module.css'; // Make sure this path is correct

const SkillsSection = () => {
  const t = useTranslations('skills');

  // --- Data for the component ---

  const skillCategories = [
    {
      title: t('languages'),
      icon: <Code />, // Icon component, will be styled via CSS
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C++', level: 70 },
      ]
    },
    {
      title: t('frameworks'),
      icon: <Globe />,
      skills: [
        { name: 'React', level: 75 },
        { name: 'Next.js', level: 70 },
        { name: 'Node.js', level: 50 },
        { name: 'Express.js', level: 60 },
        
      ]
    },
    {
      title: t('databases'),
      icon: <Database />,
      skills: [
        { name: 'MongoDB', level: 60 },
        { name: 'PostgreSQL', level: 50 },
        { name: 'MySQL', level: 75 },
        { name: 'Firebase', level: 80 },
      ]
    },
    {
      title: t('mobile'),
      icon: <Smartphone />,
      skills: [
        { name: 'React Native', level: 50 },
        {name:'Expo', level:50}
      ]
    },
    {
      title: t('cloud'),
      icon: <Cloud />,
      skills: [
        { name: 'Cloudinary', level: 60 },
        { name: 'Vercel', level: 85 },
      ]
    },
    {
      title: t('tools'),
      icon: <GitBranch />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Jira', level: 75 },
        {name:'ClickUp',level:80}
      ]
    }
  ];

  const additionalSkills = [
    'HTML5', 'CSS3','Tailwind CSS', 'Bootstrap', 'Material-UI',
    'Zustand', 'Context API',  'REST APIs', 'Testing Library', 'Vite',
    'Linux', 'MongoDB Atlas','Postman','Expo Go'
  ];

  const softSkills = [
    { skill: 'Problem Solving', icon: <Zap /> },
    { skill: 'Team Collaboration', icon: <GitBranch /> },
    { skill: 'Communication', icon: <Globe /> },
    { skill: 'Security Awareness', icon: <Shield /> }
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className={styles.skillsSection}>
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

        {/* ======== Main Skills Grid ======== */}
        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className={styles.skillCard}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.cardHeader}>
                {React.cloneElement(category.icon, { size: 32, className: styles.cardIcon })}
                <h3>{category.title}</h3>
              </div>
              <motion.div className={styles.skillsList} variants={containerVariants}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} className={styles.skillItem} variants={itemVariants}>
                    <div className={styles.skillInfo}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressBarFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ======== Additional Skills ======== */}
        <motion.div 
          className={styles.subSection}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.subHeader}>
            <h3>Additional Skills & Technologies</h3>
          </div>
          <motion.div className={styles.tagsContainer} variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {additionalSkills.map((skill, index) => (
              <motion.span 
                key={index} 
                className={styles.skillTag}
                variants={itemVariants}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ duration: 0.15 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* ======== Soft Skills ======== */}
        <motion.div 
          className={styles.subSection}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.subHeader}>
            <h3>Soft Skills</h3>
          </div>
          <motion.div className={styles.softSkillsGrid} variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {softSkills.map((item, index) => (
              <motion.div 
                key={index} 
                className={styles.softSkillCard}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                {React.cloneElement(item.icon, { size: 28, className: styles.cardIcon })}
                <span>{item.skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default SkillsSection;