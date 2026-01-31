"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';
import Footer from '../footer/footer.jsx'

export default function TajMahal() {
  const [symmetryPosition, setSymmetryPosition] = useState(50); // Percentage position of symmetry line
  const [isDragging, setIsDragging] = useState(false);
  const [activeSymmetryPair, setActiveSymmetryPair] = useState(null);

  // Handle symmetry line drag
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    if (percentage >= 0 && percentage <= 100) {
      setSymmetryPosition(percentage);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Symmetry pairs data - adjusted positions for the specific uploaded image
  const symmetryPairs = [
    {
      id: 'minarets',
      name: 'Four Minarets',
      description: 'Each minaret is 40m tall and tilts slightly outward to protect the tomb in case of earthquake.',
      position: { left: '20%', top: '45%' } // Left minaret position
    },
    {
      id: 'domes',
      name: 'Central & Side Domes',
      description: 'The main dome is 35m high, surrounded by 4 smaller domes called chattris.',
      position: { left: '50%', top: '25%' } // Main central dome
    },
    {
      id: 'gardens',
      name: 'Reflection Pool & Gardens',
      description: 'The iconic reflection pool creates a mirror image, with perfectly symmetrical gardens on both sides.',
      position: { left: '50%', top: '85%' } // Reflection pool in foreground
    },
    {
      id: 'archways',
      name: 'Arched Entrances',
      description: 'Identical archways on all four sides maintain perfect symmetry from every angle.',
      position: { left: '50%', top: '55%' } // Central archway
    }
  ];

  // Material hotspots data
  const materials = [
    {
      id: 'marble',
      name: 'White Marble',
      description: 'Sourced from Makrana, Rajasthan - the same marble used in ancient temples.',
      stones: ['Base material imported from 300km away', 'Changes color with light - pink at dawn, golden at sunset'],
      position: { left: '50%', top: '40%' }
    },
    {
      id: 'lapislazuli',
      name: 'Lapis Lazuli (Blue)',
      description: 'Semi-precious stone from Afghanistan, used for intricate blue inlay work.',
      stones: ['Imported from Afghanistan', 'Used in floral patterns', 'Most expensive stone used'],
      position: { left: '45%', top: '50%' }
    },
    {
      id: 'jade',
      name: 'Jade & Jasper (Green)',
      description: 'Green stones from China and Punjab, creating emerald floral designs.',
      stones: ['Jade from China', 'Green jasper from Punjab', 'Used for leaves and stems'],
      position: { left: '55%', top: '50%' }
    },
    {
      id: 'carnelian',
      name: 'Carnelian & Coral (Red)',
      description: 'Red and orange stones creating warm tones in the inlay work.',
      stones: ['Carnelian from Arabia', 'Red coral from the Indian Ocean', 'Used for flower petals'],
      position: { left: '50%', top: '60%' }
    },
    {
      id: 'onyx',
      name: 'Onyx & Agate (Black)',
      description: 'Black stones for contrast and calligraphy details.',
      stones: ['Black onyx for outlines', 'Agate for shadow effects', 'Used in Arabic inscriptions'],
      position: { left: '40%', top: '45%' }
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Taj Mahal</h1>
          <p className={styles.heroSubtitle}>An Eternal Testament to Love</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '1653', label: 'Year Completed' },
            { number: '28', label: 'Types of Precious Stones' },
            { number: '20,000+', label: 'Artisans Involved' }
          ].map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Symmetry Explorer Section */}
      <section className={styles.symmetrySection}>
        <div className={styles.symmetryContainer}>
          <h2 className={styles.symmetryTitle}>Perfect Symmetry</h2>
          <p className={styles.symmetrySubtitle}>Drag the line to explore the Taj Mahal's perfect bilateral symmetry</p>

          {/* Symmetry Viewer */}
          <div 
            className={styles.symmetryViewer}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Full image */}
            <div className={styles.symmetryImage}>
              <img src="/tajmahal-front.jpg" alt="Taj Mahal Front View" />
            </div>

            {/* Mirrored half (clipped) */}
            <div 
              className={styles.symmetryMirror}
              style={{ clipPath: `inset(0 ${100 - symmetryPosition}% 0 0)` }}
            >
              <img 
                src="/tajmahal-front.jpg" 
                alt="Taj Mahal Mirrored" 
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>

            {/* Symmetry Line */}
            <div 
              className={styles.symmetryLine}
              style={{ left: `${symmetryPosition}%` }}
            >
              <div className={styles.symmetryHandle}>
                <span>⟨</span>
                <span>⟩</span>
              </div>
            </div>

            {/* Symmetry hotspots - adjusted for this specific image */}
            {symmetryPairs.map((pair) => (
              <div
                key={pair.id}
                className={`${styles.symmetryHotspot} ${activeSymmetryPair === pair.id ? styles.hotspotActive : ''}`}
                style={{ left: pair.position.left, top: pair.position.top }}
                onClick={() => setActiveSymmetryPair(activeSymmetryPair === pair.id ? null : pair.id)}
              >
                <div className={styles.hotspotPulse}></div>
                <div className={styles.hotspotDot}>+</div>
              </div>
            ))}
          </div>

          {/* Symmetry Info Panel */}
          {activeSymmetryPair && (
            <div className={styles.symmetryInfo}>
              <button 
                className={styles.closeButton}
                onClick={() => setActiveSymmetryPair(null)}
              >
                ✕
              </button>
              <h3>{symmetryPairs.find(p => p.id === activeSymmetryPair)?.name}</h3>
              <p>{symmetryPairs.find(p => p.id === activeSymmetryPair)?.description}</p>
            </div>
          )}

          <p className={styles.symmetryHint}>
            💡 Tip: Drag to the center (50%) to see perfect alignment
          </p>
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
      question: "How long did it take to build?", 
      answer: "22 years (1631-1653). The main mausoleum took 12 years, with another 10 years for the surrounding buildings and gardens." 
    },
    { 
      question: "What material is it made of?", 
      answer: "White marble from Makrana, Rajasthan, inlaid with 28 types of precious and semi-precious stones from across Asia." 
    },
    { 
      question: "Who commissioned the Taj Mahal?", 
      answer: "Mughal Emperor Shah Jahan commissioned it as a tomb for his beloved wife, Mumtaz Mahal, who died during childbirth." 
    },
    { 
      question: "Why does the marble change color?", 
      answer: "The translucent white marble reflects different light throughout the day - pinkish in morning, white at noon, golden at sunset, and silvery at night." 
    },
    { 
      question: "Is the Taj Mahal perfectly symmetrical?", 
      answer: "Almost! The only asymmetrical element is Shah Jahan's tomb, added later beside Mumtaz Mahal's centered tomb, slightly disrupting the perfect balance." 
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
            {openIndex === index && <div className={styles.accordionBody}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};
