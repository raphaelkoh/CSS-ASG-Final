"use client";

import React from 'react';
import FAQAccordion from './FAQAccordion'; // Ensure this path is correct
import styles from './page.module.css';
import Navbar from '../nav/Navbar';

export default function TajMahal() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Taj Mahal</h1>
          <p className={styles.heroSubtitle}>A rose-red city carved into the heart of the mountain</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '73', label: 'Metres at the top of the central dome' },
            { number: '20,000', label: 'Artisans and workers to build' },
            { number: '1983', label: 'Official UNESCO Heritage Site' }
          ].map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />
    </div>
  );
}