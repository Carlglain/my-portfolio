import React from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import styles from './ProjectsSection.module.css'; // Make sure this path is correct

const ProjectsSection = () => {
  const t = useTranslations('projects');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/work-1.png",
      technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/carlglain/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/work-2.png",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/carlglain/task-app",
      featured: true
    },
    // Add the third featured project back if you have it
    // {
    //   title: "Mobile Banking App",
    //   description: "A fintech mobile application for banking services, featuring secure authentication, transaction history, and money transfers.",
    //   image: "/work-3.png",
    //   technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    //   liveUrl: "https://banking-app-demo.com",
    //   githubUrl: "https://github.com/carlglain/banking-app",
    //   featured: true
    // },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and internationalization support.",
      image: "/work-4.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
      liveUrl: "https://carlglain-portfolio.com",
      githubUrl: "https://github.com/carlglain/portfolio",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "A weather application with real-time data, location-based forecasts, and interactive weather maps.",
      image: "/work-1.png",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/carlglain/weather-app",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, SEO optimization, and analytics dashboard.",
      image: "/work-2.png",
      technologies: ["Next.js", "MongoDB", "Markdown", "Vercel"],
      liveUrl: "https://blog-platform-demo.com",
      githubUrl: "https://github.com/carlglain/blog-platform",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        
        {/* ======== Section Header ======== */}
        <div className={styles.sectionHeader}>
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        {/* ======== Featured Projects ======== */}
        <div className={styles.subSection}>
          <h3 className={styles.subHeader}>Featured Projects</h3>
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project, index) => (
              <div key={index} className={`${styles.projectCard} ${styles.featuredCard}`}>
                <div className={styles.cardImageWrapper}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayLinks}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={24} /></a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                    </div>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className={styles.tagsContainer}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======== Other Projects ======== */}
        <div className={styles.subSection}>
          <h3 className={styles.subHeader}>Other Projects</h3>
          <div className={styles.otherGrid}>
            {otherProjects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.cardImageWrapper}>
                   <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayLinks}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    </div>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h4>{project.title}</h4>
                  <div className={styles.tagsContainer}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.techTagMore}>+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======== CTA Section ======== */}
        <div className={`${styles.subSection} ${styles.ctaSection}`}>
          <div className={styles.ctaCard}>
            <h3>Have a Project in Mind?</h3>
            <p>I&apos;m always excited to work on new and challenging projects. Let&apos;s discuss how we can bring your ideas to life!</p>
            <a href="#contact" className={styles.ctaButton}>
              Let&apos;s Talk <ArrowRight size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;