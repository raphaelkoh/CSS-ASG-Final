
// page.jsx
"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';

export default function TheColosseum() {
  return (
    
    <div className={styles.container}>
        <Navbar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Chichen Itza</h1>
          <p className={styles.heroSubtitle}>The Precious Stone Monument of the Mayan Metropolis</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '365', label: 'Steps Spread Across its 4 sides' },
            { number: '3', label: 'Distinct, Nested Pyramids Atop One Another' },
            { number: '1988', label: 'Official UNESCO Heritage Site' }
          ].map((stat, i) => (
            <div 
              key={i} 
              className={styles.statCard}
            >
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
