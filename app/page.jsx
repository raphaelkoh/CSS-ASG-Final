// app/page.jsx
"use client";

import Navbar from './nav/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
        <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Wonders of the World</h1>
        </div>
      </section>
    </>
  );
}