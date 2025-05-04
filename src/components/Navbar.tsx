import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">AFTL Shipping</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#fleet">Fleet</a></li>
        <li><a href="#compliance">Compliance</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
