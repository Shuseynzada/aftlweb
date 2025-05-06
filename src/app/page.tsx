"use client"
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import styles from './Homepage.module.css';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  // Animation state for sections
  const aboutRef = useRef<HTMLDivElement>(null);
  const fleetRef = useRef<HTMLDivElement>(null);
  const complianceRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [fleetVisible, setFleetVisible] = useState(false);
  const [complianceVisible, setComplianceVisible] = useState(false);

  useEffect(() => {
    const makeObserver = (ref: React.RefObject<HTMLDivElement>, setVisible: (v: boolean) => void) => {
      return new window.IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.18 }
      );
    };
    const aboutObs = makeObserver(aboutRef, setAboutVisible);
    const fleetObs = makeObserver(fleetRef, setFleetVisible);
    const complianceObs = makeObserver(complianceRef, setComplianceVisible);
    if (aboutRef.current) aboutObs.observe(aboutRef.current);
    if (fleetRef.current) fleetObs.observe(fleetRef.current);
    if (complianceRef.current) complianceObs.observe(complianceRef.current);
    return () => {
      aboutObs.disconnect();
      fleetObs.disconnect();
      complianceObs.disconnect();
    };
  }, []);

  const renderPattern = () => (
    <div className={styles.sectionPattern}>
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <Navbar />
      <Hero
        title="AFTL Shipping"
        subtitle="Your trusted tanker charterer across the Mediterranean and beyond"
        imgSrc="/images/hero-tanker.png"
      />
      <section
        id="about"
        ref={aboutRef}
        className={`${styles.section} ${styles['section-animated']} ${aboutVisible ? styles['section-visible'] : ''} ${styles.glass}`}
      >
        {renderPattern()}
        <h2>About AFTL Shipping</h2>
        <p>
          AFTL Shipping, a subsidiary of Alkagesta LTD, stands as one of the leading charterers
          of tanker vessels in the Mediterranean and maintains a strong presence across various global regions.
          The company has established a robust infrastructure for chartering and freight trading, with operational hubs
          in Geneva and Istanbul. This ensures that AFTL Shipping is well-positioned to meet both internal group requirements
          and market demand at any given time.
        </p>
      </section>
      <Services />
      <section
        id="fleet"
        ref={fleetRef}
        className={`${styles.section} ${styles['section-animated']} ${fleetVisible ? styles['section-visible'] : ''} ${styles.glass}`}
      >
        {renderPattern()}
        <h2>Fleet & Operations</h2>
        <p>
          AFTL Shipping operates a high-quality fleet of tankers and carriers, which are available for both spot and
          time-charter agreements. This allows for maximum flexibility in servicing the dynamic needs of our clients.
        </p>
      </section>
      <section
        id="compliance"
        ref={complianceRef}
        className={`${styles.section} ${styles['section-animated']} ${complianceVisible ? styles['section-visible'] : ''} ${styles.glass} ${styles.compliance}`}
      >
        {renderPattern()}
        <h2>Legal & Compliance Vetting</h2>
        <p>
          AFTL Shipping has a thorough and multi-layered approach to compliance and vessel vetting to ensure its operations
          are in line with international regulations and quality standards. This kind of process helps minimize risks and
          ensures that the company&apos;s vessels are compliant with legal and operational requirements.
        </p>
        <ul>
          <li>First-Class Vetting Platforms</li>
          <li>Geneva-Based Banks</li>
          <li>Vessel History and CAP Rating</li>
          <li>Customer Technical and Vetting Requirements</li>
          <li>Oil Major Screenings</li>
          <li>Vessel Certificates and Performance</li>
          <li>Vessel Technical Manager</li>
          <li>Sanctions Screening</li>
        </ul>
        <p>
          The vetting process helps reduce potential legal, financial, and reputational risks by ensuring compliance with
          international laws, such as sanctions and trade regulations. By ensuring that only vessels that meet high standards
          are selected, AFTL Shipping is able to maintain the efficiency, safety, and reliability of its operations.
        </p>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2023 AFTL Shipping. All rights reserved.</p>
      </footer>
    </div>
  );
}