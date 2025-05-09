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
  const contactRef = useRef<HTMLDivElement>(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [fleetVisible, setFleetVisible] = useState(false);
  const [complianceVisible, setComplianceVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const makeObserver = (ref: React.RefObject<HTMLDivElement | null>, setVisible: (v: boolean) => void) => {
      return new window.IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.2 }
      );
    };
    const aboutObs = makeObserver(aboutRef, setAboutVisible);
    const fleetObs = makeObserver(fleetRef, setFleetVisible);
    const complianceObs = makeObserver(complianceRef, setComplianceVisible);
    const contactObs = makeObserver(contactRef, setContactVisible);
    if (aboutRef.current) aboutObs.observe(aboutRef.current);
    if (fleetRef.current) fleetObs.observe(fleetRef.current);
    if (complianceRef.current) complianceObs.observe(complianceRef.current);
    if (contactRef.current) contactObs.observe(contactRef.current);
    return () => {
      aboutObs.disconnect();
      fleetObs.disconnect();
      complianceObs.disconnect();
      contactObs.disconnect();
    };
  }, []);

  const patternPositions = [
    { top: 10, left: 20, delay: 1 },
    { top: 30, left: 40, delay: 2 },
    { top: 50, left: 60, delay: 3 },
    { top: 70, left: 80, delay: 4 },
    { top: 20, left: 70, delay: 5 },
    { top: 60, left: 30, delay: 6 },
    { top: 80, left: 10, delay: 7 },
    { top: 40, left: 50, delay: 8 },
  ];

  const renderPattern = () => (
    <div className={styles.sectionPattern}>
      {patternPositions.map((pos, i) => (
        <span
          key={i}
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            animationDelay: `${pos.delay}s`,
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
      <section
        id="contact"
        ref={contactRef}
        className={`${styles.section} ${styles['section-animated']} ${contactVisible ? styles['section-visible'] : ''} ${styles.glass}`}
      >
        {renderPattern()}
        <h2>Contact Us</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          maxWidth: 500,
          margin: '2rem auto 0',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            flex: '1 1 320px',
            minWidth: 260,
            background: 'rgba(255,255,255,0.95)',
            borderRadius: 20,
            boxShadow: '0 8px 32px 0 rgba(26,54,93,0.10)',
            padding: '2.5rem 2rem',
            color: '#1a365d',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            justifyItems: 'center',
            width: '100%',
            maxWidth: 500,
          }}>
            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#e6ecf5' }}>
                <svg width="22" height="22" fill="none" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 2 }}>Phone</div>
                <a href="tel:+1234567890" style={{ color: '#2b4f81', fontWeight: 500, textDecoration: 'none', fontSize: '1.05rem' }}>+1 234 567 890</a>
              </div>
            </div>
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#e6ecf5' }}>
                <svg width="22" height="22" fill="none" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6 12 13 2 6"/></svg>
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 2 }}>Email</div>
                <a href="mailto:info@aftlshipping.com" style={{ color: '#2b4f81', fontWeight: 500, textDecoration: 'none', fontSize: '1.05rem' }}>info@aftlshipping.com</a>
              </div>
            </div>
            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', background: '#e6ecf5' }}>
                <svg width="22" height="22" fill="none" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 2 }}>Locations</div>
                <div style={{ color: '#2b4f81', fontWeight: 500, fontSize: '1.05rem' }}>Geneva, Switzerland<br />Istanbul, Turkey</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2023 AFTL Shipping. All rights reserved.</p>
      </footer>
    </div>
  );
}