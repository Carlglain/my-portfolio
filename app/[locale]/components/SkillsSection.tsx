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
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'Django', level: 75 },
      ]
    },
    {
      title: t('databases'),
      icon: <Database />,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 80 },
      ]
    },
    {
      title: t('mobile'),
      icon: <Smartphone />,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 75 },
        { name: 'Android (Kotlin)', level: 70 },
        { name: 'iOS (Swift)', level: 65 },
      ]
    },
    {
      title: t('cloud'),
      icon: <Cloud />,
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 65 },
        { name: 'CI/CD', level: 80 },
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
      ]
    }
  ];

  const additionalSkills = [
    'HTML5', 'CSS3', 'SASS', 'Tailwind CSS', 'Bootstrap', 'Material-UI',
    'Redux', 'Context API', 'GraphQL', 'REST APIs', 'JWT', 'OAuth',
    'Jest', 'Cypress', 'Testing Library', 'Storybook', 'Webpack', 'Vite',
    'Linux', 'Nginx', 'PM2', 'MongoDB Atlas', 'AWS S3', 'CloudFront'
  ];

  const softSkills = [
    { skill: 'Problem Solving', icon: <Zap /> },
    { skill: 'Team Collaboration', icon: <GitBranch /> },
    { skill: 'Communication', icon: <Globe /> },
    { skill: 'Security Awareness', icon: <Shield /> }
  ];

  // --- JSX Structure ---

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
                {/* Clone icon to apply styles */}
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