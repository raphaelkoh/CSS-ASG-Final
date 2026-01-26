
// page.jsx
"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';

export default function TheColosseum() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e) => {
    if (!isDragging) return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    if (percentage >= 0 && percentage <= 100) {
      setSliderPosition(percentage);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    
    <div className={styles.container}>
        <Navbar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Colosseum</h1>
          <p className={styles.heroSubtitle}>History embedded in Chaos and Concrete</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '>6', label: 'Acres shaped in an eclipse' },
            { number: '75000+', label: 'People During Maximum Capacity' },
            { number: '1980', label: 'Official UNESCO Heritage Site' }
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

      {/* Before/After Slider Section */}
      <section className={styles.sliderSection}>
        <div className={styles.sliderContainer}>
          <h2 className={styles.sliderTitle}>Then vs Now</h2>
          <p className={styles.sliderSubtitle}>Drag the slider to compare ancient and modern views</p>

          <div 
            className={styles.comparison}
            onMouseMove={handleMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <span className={styles.sliderLabelLeft}>Slide left for Ancient</span>
            <span className={styles.sliderLabelRight}>Slide right for Modern</span>
            {/* After Image (Modern) */}
                <div className={styles.afterImage}>
                    <img src="/colosseumAfter.jpg" alt="Modern Colosseum" />
                </div>

            {/* Before Image (Ancient) */}
                <div 
                className={styles.beforeImage}
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                >
                    <img src="/colosseumBefore.jpg" alt="Ancient Colosseum" />
                </div>

            {/* Slider Handle */}
            <div 
              className={styles.sliderHandle}
              style={{ left: `${sliderPosition}%` }}
            >
              <div className={styles.sliderLine}></div>
              <div className={styles.sliderButton}>
                <span>⟨</span>
                <span>⟩</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}