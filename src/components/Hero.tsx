"use client"
import { useEffect, useState, useRef } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  imgSrc: string;
}

const Hero = ({ title, subtitle, imgSrc }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Show button only when hero is in view
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowButton(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className={styles.hero} style={{ backgroundImage: `url(${imgSrc})` }} ref={heroRef}>
      <div className={styles.overlay}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.separator}></div>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
      <button
        onClick={scrollToContact}
        className={`${styles.cta} hover-lift ${showButton ? styles.ctaVisible : styles.ctaHidden}`}
        aria-label="Get Started"
        tabIndex={showButton ? 0 : -1}
        style={{ pointerEvents: showButton ? 'auto' : 'none' }}
      >
        <span className={styles.ctaText}>Get Started</span>
        <span className={styles.ctaArrowWrapper}>
          <svg
            className={styles.arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={styles.scrollIndicator}>
        <div className={styles.arrows}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;