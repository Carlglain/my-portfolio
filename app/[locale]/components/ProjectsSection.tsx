"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import styles from './ProjectsSection.module.css'; // Make sure this path is correct
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const t = useTranslations('projects');

  const projects = [
   {
  title: "Nkwa Pay",
  description: "A robust mobile money payment infrastructure that simplifies integration with MTN and Orange mobile money services in Cameroon, enabling businesses to accept and manage payments via unified APIs.",
  image: "/nkwapay.png", // update with appropriate Nkwa Pay image
  technologies: ["React.js", "Next.js","Nest.js", "REST API", "Webhook Integration"],
  liveUrl: "https://pay.mynkwa.com/",
  githubUrl: "https://github.com/Carlglain/", // update if you have a related GitHub repo
  featured: true
},

    {
      title: "Car Fault Diagnostic System (MottoFix)",
      description: "A mobile application that diagnoses vehicle faults from images and audio recordings using AI-powered analysis. Features Firebase authentication, real-time diagnostic results, and a clean React Native (Expo) interface.",
      image: "/work-2.png",
      technologies: ["React Native", "Expo", "Firebase", "Node.js", "Gemini API","Youtube API"],
      liveUrl: "",
      githubUrl: "https://github.com/Carlglain/MottoFix",
      featured: true
    },
      {
      title: "Expenditure tracking Platform (Expendee)",
      description: "A full-stack AI powered platform built with React.js, featuring user authentication. it permits users to track their expenses.",
      image: "/work-1.png",
      technologies: ["React.js", "MongoDB", "CSS", "express.js"],
      liveUrl: "https://expendee.vercel.app/",
      githubUrl: "https://github.com/Carlglain/Expendee",
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
      featured: false
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
      image: "/work-3.png",
      technologies: ["React.js", "MongoDB", "Markdown", "Vercel"],
      liveUrl: "https://medi-finder-orcin.vercel.app/",
      githubUrl: "https://github.com/Carlglain/Medi-Finder",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const containerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
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

        {/* ======== Featured Projects ======== */}
        <motion.div className={styles.subSection} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className={styles.subHeader}>Featured Projects</h3>
          <motion.div 
            className={styles.featuredGrid}
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px' }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={index} className={`${styles.projectCard} ${styles.featuredCard}`} variants={cardVariants} whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                <div className={styles.cardImageWrapper}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className={styles.cardImage}
                  />
                  <motion.div className={styles.imageOverlay} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                    <div className={styles.overlayLinks}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={24} /></a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                    </div>
                  </motion.div>
                </div>
                <div className={styles.cardContent}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className={styles.tagsContainer}>
                    {project.technologies.map((tech) => (
                      <motion.span key={tech} className={styles.techTag} whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.15 }}>{tech}</motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ======== Other Projects ======== */}
        <motion.div className={styles.subSection} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className={styles.subHeader}>Other Projects</h3>
          <motion.div className={styles.otherGrid} variants={containerVariants} initial="initial" whileInView="animate" viewport={{ once: true, margin: '-60px' }}>
            {otherProjects.map((project, index) => (
              <motion.div key={index} className={styles.projectCard} variants={cardVariants} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <div className={styles.cardImageWrapper}>
                   <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className={styles.cardImage}
                  />
                  <motion.div className={styles.imageOverlay} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                    <div className={styles.overlayLinks}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={20} /></a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                    </div>
                  </motion.div>
                </div>
                <div className={styles.cardContent}>
                  <h4>{project.title}</h4>
                  <div className={styles.tagsContainer}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span key={tech} className={styles.techTag} whileHover={{ y: -3, scale: 1.05 }} transition={{ duration: 0.15 }}>{tech}</motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.techTagMore}>+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ======== CTA Section ======== */}
        <motion.div className={`${styles.subSection} ${styles.ctaSection}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <motion.div className={styles.ctaCard} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <h3>Have a Project in Mind?</h3>
            <p>I&apos;m always excited to work on new and challenging projects. Let&apos;s discuss how we can bring your ideas to life!</p>
            <motion.a href="#contact" className={styles.ctaButton} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Let&apos;s Talk <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;