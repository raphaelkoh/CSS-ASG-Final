"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';
import Footer from '../footer/footer.jsx'

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
            <div key={i} className={styles.statCard}>
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

      {/* FAQ Section */}
      <FAQAccordion />
      <Footer />
    </div>
  );
}

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: "When was the Colosseum built?", 
      answer: "Construction began under Emperor Vespasian in AD 72 and was completed in AD 80 under his successor Titus." 
    },
    { 
      question: "What was the Colosseum used for?", 
      answer: "It hosted gladiatorial contests, animal hunts, public spectacles, and even mock naval battles in its early years." 
    },
    { 
      question: "How many people could the Colosseum hold?", 
      answer: "It could accommodate between 50,000 and 75,000 spectators at maximum capacity." 
    },
    { 
      question: "Why is part of the Colosseum missing today?", 
      answer: "Earthquakes, stone robbing for other buildings, and centuries of neglect caused large sections to collapse." 
    },
    { 
      question: "Is the Colosseum still used today?", 
      answer: "It is no longer used for combat, but it serves as a major tourist attraction and a symbol against capital punishment." 
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.accordionSection}>
      <h2 className={styles.accordionTitle}>Frequently Asked Questions</h2>
      <div className={styles.accordionContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.accordionItem}>
            <div 
              className={styles.accordionHeader} 
              onClick={() => toggleAccordion(index)}
            >
              <h3>{faq.question}</h3>
              <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className={styles.accordionBody}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
