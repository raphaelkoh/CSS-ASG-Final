// app/page.jsx
"use client";

import Navbar from './nav/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        {/* Video background */}
        <video
          className={styles.heroVideo}
          src="/earth.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay */}
        <div className={styles.heroOverlay} />

        {/* Content on top */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Wonders of the World</h1>
        </div>
      </section>
    </>
  );
}
