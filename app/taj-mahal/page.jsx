// page.jsx
"use client";

import React, { useState } from 'react';
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
          <p className={styles.heroSubtitle}>A rose-red city craved into the heart of the mountain</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '73', label: 'Metres at the top of central dome' },
            { number: '20000', label: 'artisans and workers to build' },
            { number: '1983', label: 'Official UNESCO Heritage Site' }
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
