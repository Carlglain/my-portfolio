import React from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import styles from './ProjectsSection.module.css'; // Make sure this path is correct

const ProjectsSection = () => {
  const t = useTranslations('projects');

  const projects = [
    {
      title: "Expenditure tracking Platform (Expendee)",
      description: "A full-stack AI powered platform built with React.js, featuring user authentication. it permits users to track their expenses.",
      image: "/work-1.png",
      technologies: ["React.js", "MongoDB", "CSS", "express.js"],
      liveUrl: "https://expendee.vercel.app/",
      githubUrl: "https://github.com/Carlglain/Expendee",
      featured: true
    },
    {
      title: "Car Fault Diagnostic System (MottoFix)",
      description: "A mobile application that diagnoses vehicle faults from images and audio recordings using AI-powered analysis. Features Firebase authentication, real-time diagnostic results, and a clean React Native (Expo) interface.",
      image: "/work-car-diagnostic.png",
      technologies: ["React Native", "Expo", "Firebase", "Node.js", "Gemini API","Youtube API"],
      liveUrl: "",
      githubUrl: "https://github.com/Carlglain/MottoFix",
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
      liveUrl: "https://carlstorm-portfolio.vercel.app/en",
      githubUrl: "https://github.com/carlglain/my-portfolio",
      featured: true
    },
    {
      title: "Passenger Positioning System",
      description: "The purpose of this project is to provide a description of a passenger positioning system that will help Passengers firstly to get a taxi quickly and drivers to be able to locate passengers and hence minimize fuel.",
      image: "/work-1.png",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      liveUrl: "",
      githubUrl: "https://github.com/Carlglain/Passenger-Positioning-system",
      featured: false
    },
    {
      title: "Medi-Finder",
      description: "A site that permits users to search for medical facilities and hospitals in their area.",
      image: "/work-2.png",
      technologies: ["React.js", "MongoDB", "Markdown", "Vercel"],
      liveUrl: "https://medi-finder-orcin.vercel.app/",
      githubUrl: "https://github.com/Carlglain/Medi-Finder",
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