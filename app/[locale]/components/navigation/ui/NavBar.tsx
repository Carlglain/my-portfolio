'use client';
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import DarkButton from "./DarkButton";
import MenuSmall from "./MenuSmall";
import styles from './NavBar.module.css'; // Import the CSS module

function NavBar() {
  const t = useTranslations("nav");

  const navLinks = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#services", label: t("services") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    // The main nav element is sticky with a backdrop blur effect.
    <motion.header 
      className={styles.navBar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className={styles.navContainer}>
        
        {/* ======== 1. Logo (Left Side) ======== */}
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#home">
            Carlglain 🔥
          </Link>
        </motion.div>

        {/* ======== 2. Desktop Navigation (Center) ======== */}
        {/* This menu is hidden on mobile and appears in the center on large screens. */}
        <nav className={styles.desktopMenu}>
          <motion.ul
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.href}
                variants={{
                  initial: { opacity: 0, y: -20 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* ======== 3. Action Items (Right Side) ======== */}
        <motion.div 
          className={styles.navActions}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Dark mode toggle and Contact button are hidden on mobile */}
          <div className={styles.desktopActions}>
            <DarkButton />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#contact" className={styles.contactButton}>
                {t("contact")} ↗
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Trigger (e.g., Hamburger Icon) */}
          {/* This is only visible on mobile screens */}
          <div className={styles.mobileMenuTrigger}>
            <MenuSmall />
          </div>
        </motion.div>
        
      </div>
    </motion.header>
  );
}

export default NavBar;