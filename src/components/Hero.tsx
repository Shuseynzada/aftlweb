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