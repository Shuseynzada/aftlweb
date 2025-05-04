"use client"
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import styles from './Homepage.module.css';

export default function HomePage() {

  return (
    <div className={styles.container}>
      <Navbar />
      <Hero
        title="AFTL Shipping"
        subtitle="Your trusted tanker charterer across the Mediterranean and beyond"
        imgSrc="/images/hero-tanker.png"
      />
      <section id="about" className={styles.section}>
        <h2>About AFTL Shipping</h2>
        <p>
          AFTL Shipping, a subsidiary of Alkagesta LTD, stands as one of the leading charterers
          of tanker vessels in the Mediterranean and maintains a strong presence across various global regions.
          The company has established a robust infrastructure for chartering and freight trading, with operational hubs
          in Geneva and Istanbul. This ensures that AFTL Shipping is well-positioned to meet both internal group requirements
          and market demand at any given time.
        </p>
      </section>
      <section id="services" className={`${styles.section} ${styles.services}`}>
        <h2>Core Services</h2>
        <ul>
          <li>Chartering (Spot & Time Charter)</li>
          <li>Freight Forward Agreements (FFA)</li>
          <li>Operations Management</li>
          <li>Claims Handling</li>
        </ul>
      </section>
      <section id="fleet" className={styles.section}>
        <h2>Fleet & Operations</h2>
        <p>
          AFTL Shipping operates a high-quality fleet of tankers and carriers, which are available for both spot and
          time-charter agreements. This allows for maximum flexibility in servicing the dynamic needs of our clients.
        </p>
      </section>
      <section id="compliance" className={`${styles.section} ${styles.compliance}`}>
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