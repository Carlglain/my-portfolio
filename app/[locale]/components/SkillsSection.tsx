import React from 'react';
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

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        
        {/* ======== Section Header ======== */}
        <div className={styles.sectionHeader}>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        {/* ======== Main Skills Grid ======== */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                {React.cloneElement(category.icon, { size: 32, className: styles.cardIcon })}
                <h3>{category.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressBarFill}
                        // Set CSS variable for the animation
                        style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties} 
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ======== Additional Skills ======== */}
        <div className={styles.subSection}>
          <div className={styles.subHeader}>
            <h3>Additional Skills & Technologies</h3>
          </div>
          <div className={styles.tagsContainer}>
            {additionalSkills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ======== Soft Skills ======== */}
        <div className={styles.subSection}>
          <div className={styles.subHeader}>
            <h3>Soft Skills</h3>
          </div>
          <div className={styles.softSkillsGrid}>
            {softSkills.map((item, index) => (
              <div key={index} className={styles.softSkillCard}>
                {React.cloneElement(item.icon, { size: 28, className: styles.cardIcon })}
                <span>{item.skill}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SkillsSection;