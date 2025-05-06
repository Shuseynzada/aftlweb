"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const sectionIds = ['about', 'services', 'fleet', 'compliance', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 40);

      // Active section highlight
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection('about');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Ensure .scrolled is only applied when not at the very top
  const navClass = `${styles.navbar} ${styles.glass} ${scrolled ? styles.scrolled : ''} ${isHidden ? styles.hidden : ''}`;

  return (
    <nav className={navClass}>
      <div className={styles.logo}>
        <Link href="/" onClick={() => scrollToSection('hero')}>
          <Image width={100} height={40} src="/images/logo.png" alt="AFTL Shipping" />
        </Link>
      </div>

      <button 
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? styles.activeLink : ''}>About</a>
        <a href="#services" onClick={() => scrollToSection('services')} className={activeSection === 'services' ? styles.activeLink : ''}>Services</a>
        <a href="#fleet" onClick={() => scrollToSection('fleet')} className={activeSection === 'fleet' ? styles.activeLink : ''}>Fleet</a>
        <a href="#compliance" onClick={() => scrollToSection('compliance')} className={activeSection === 'compliance' ? styles.activeLink : ''}>Compliance</a>
        <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? styles.activeLink : ''}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
