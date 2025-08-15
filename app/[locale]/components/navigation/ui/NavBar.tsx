import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
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
    <header className={styles.navBar}>
      <div className={styles.navContainer}>
        
        {/* ======== 1. Logo (Left Side) ======== */}
        <div className={styles.logo}>
          <Link href="#home">
            Carlglain 🔥
          </Link>
        </div>

        {/* ======== 2. Desktop Navigation (Center) ======== */}
        {/* This menu is hidden on mobile and appears in the center on large screens. */}
        <nav className={styles.desktopMenu}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ======== 3. Action Items (Right Side) ======== */}
        <div className={styles.navActions}>
          {/* Dark mode toggle and Contact button are hidden on mobile */}
          <div className={styles.desktopActions}>
            <DarkButton />
            <Link href="#contact" className={styles.contactButton}>
              {t("contact")} ↗
            </Link>
          </div>

          {/* Mobile Menu Trigger (e.g., Hamburger Icon) */}
          {/* This is only visible on mobile screens */}
          <div className={styles.mobileMenuTrigger}>
            <MenuSmall />
          </div>
        </div>
        
      </div>
    </header>
  );
}

export default NavBar;