
// page.jsx
"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';

export default function ChrisTheRedeemer() {
  return (
    
    <div className={styles.container}>
        <Navbar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Christ The Redeemer</h1>
          <p className={styles.heroSubtitle}>Rio’s 1145-ton open invitation to the world</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '38', label: 'Metres tall Standing above the skies' },
            { number: '6000000+', label: 'Soapstone Tiles covering the statue' },
            { number: '2012', label: 'Official UNESCO Heritage Site' }
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
