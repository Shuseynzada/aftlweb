import React, { useRef, useEffect, useState } from 'react';
import styles from './Services.module.css';

interface Service {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Chartering (Spot & Time Charter)',
    description: 'Flexible chartering solutions for spot and time-charter agreements, tailored to your needs.',
    details: [
      'Spot & time-charter contracts',
      'Global reach',
      'Competitive rates',
      'Personalized service',
    ],
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none"><rect x="6" y="18" width="36" height="12" rx="6" stroke="currentColor" strokeWidth="3"/><path d="M12 30v6a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6v-6" stroke="currentColor" strokeWidth="3"/></svg>
    ),
  },
  {
    title: 'Freight Forward Agreements (FFA)',
    description: 'Manage freight risk and secure future rates with our FFA expertise and market insight.',
    details: [
      'Risk management',
      'Market analysis',
      'Custom FFA solutions',
      'Transparent reporting',
    ],
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3"/><path d="M24 12v12l8 8" stroke="currentColor" strokeWidth="3"/></svg>
    ),
  },
  {
    title: 'Operations Management',
    description: 'Comprehensive operations management for efficient, safe, and compliant voyages.',
    details: [
      '24/7 support',
      'Voyage optimization',
      'Regulatory compliance',
      'Real-time tracking',
    ],
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none"><rect x="10" y="10" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="3"/><path d="M24 18v8h8" stroke="currentColor" strokeWidth="3"/></svg>
    ),
  },
  {
    title: 'Claims Handling',
    description: 'Expert claims handling to protect your interests and resolve disputes efficiently.',
    details: [
      'Claims assessment',
      'Negotiation & settlement',
      'Documentation support',
      'Legal expertise',
    ],
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none"><path d="M12 12h24v24H12z" stroke="currentColor" strokeWidth="3"/><path d="M18 24h12" stroke="currentColor" strokeWidth="3"/><path d="M24 18v12" stroke="currentColor" strokeWidth="3"/></svg>
    ),
  },
];

const NUM_PATTERNS = 12;

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const patternPositions = [
    { top: 10, left: 20, delay: 1 },
    { top: 30, left: 40, delay: 2 },
    { top: 50, left: 60, delay: 3 },
    { top: 70, left: 80, delay: 4 },
    { top: 20, left: 70, delay: 5 },
    { top: 60, left: 30, delay: 6 },
    { top: 80, left: 10, delay: 7 },
    { top: 40, left: 50, delay: 8 },
    { top: 15, left: 85, delay: 2.5 },
    { top: 85, left: 15, delay: 4.5 },
    { top: 55, left: 75, delay: 6.5 },
    { top: 75, left: 55, delay: 8.5 },
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className={`${styles.services} ${visible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.backgroundPattern}>
        {patternPositions.map((pos, i) => (
          <span
            key={i}
            className={styles.pattern}
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              animationDelay: `${pos.delay}s`,
            }}
          />
        ))}
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Core Services</h2>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          Discover our range of maritime solutions, designed to deliver reliability, flexibility, and value across the shipping industry.
        </p>
        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`${styles.card} ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              tabIndex={0}
              role="button"
              aria-expanded={activeIndex === idx}
              aria-controls={`service-details-${idx}`}
            >
              <div className={styles.cardBackground} />
              <div className={styles.cardContent}>
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div
                  id={`service-details-${idx}`}
                  className={`${styles.details} ${activeIndex === idx ? 'visible' : ''}`}
                >
                  <ul>
                    {service.details.map((detail, i) => (
                      <li key={i} style={{ animationDelay: `${0.1 * i}s` }}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 