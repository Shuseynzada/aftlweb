import styles from './Careers.module.css';

export default function Careers() {
  return (
    <section className={styles.careersSection}>
      <div className={styles.hero}>
        <h2>Join Our Team</h2>
        <p>Be part of something extraordinary</p>
      </div>

      <div className={styles.openPositions}>
        <h3>Open Positions</h3>
        <div className={styles.positionsGrid}>
          <div className={styles.positionCard}>
            <h4>Software Engineer</h4>
            <p>Full-time • Remote</p>
            <p>Join our engineering team to build innovative solutions that make a difference.</p>
            <button className={styles.applyButton}>Apply Now</button>
          </div>
          
          <div className={styles.positionCard}>
            <h4>Product Designer</h4>
            <p>Full-time • Remote</p>
            <p>Help shape the future of our products with your creative vision and expertise.</p>
            <button className={styles.applyButton}>Apply Now</button>
          </div>
          
          <div className={styles.positionCard}>
            <h4>Marketing Specialist</h4>
            <p>Full-time • Remote</p>
            <p>Drive our growth through strategic marketing initiatives and creative campaigns.</p>
            <button className={styles.applyButton}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className={styles.benefits}>
        <h3>Why Join Us?</h3>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h4>Remote First</h4>
            <p>Work from anywhere in the world with our distributed team.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <h4>Growth Opportunities</h4>
            <p>Continuous learning and career development support.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <h4>Competitive Benefits</h4>
            <p>Health insurance, flexible PTO, and more.</p>
          </div>
          
          <div className={styles.benefitCard}>
            <h4>Inclusive Culture</h4>
            <p>Join a diverse team that values different perspectives.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 