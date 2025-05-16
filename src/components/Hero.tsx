"use client"
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  imgSrc: string;
}

const Hero = ({ title, subtitle, imgSrc }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Show button only when hero is in view
    const observer = new window.IntersectionObserver(
      ([]) => {}, // No-op
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="hero" className={styles.hero} style={{ backgroundImage: `url(${imgSrc})` }} ref={heroRef}>
      <div className={styles.overlay}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>{title}</h1>
            <Image 
              src="/images/logo.png"
              alt="AFTL Shipping Logo"
              width={200}
              height={80}
              priority
              className={styles.heroLogo}
            />
          </div>
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