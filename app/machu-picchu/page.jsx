// page.jsx
"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const landmarks = [
  {
    name: "Intihuatana Stone",
    image: "/card1.jpg",
    description: "Known as the 'Hitching Post of the Sun', this carved ritual stone was used as an astronomical clock. The Incas believed it held the sun in place during winter solstice."
  },
  {
    name: "Temple of the Sun",
    image: "/card2.jpg",
    description: "A curved, semi-circular temple built with precision stonework. This sacred site was used for astronomical observations and religious ceremonies, perfectly aligned with the winter solstice."
  },
  
  {
    name: "Room of the Three Windows",
    image: "/card3.jpg",
    description: "A sacred temple featuring three trapezoidal windows that frame breathtaking views of the surrounding mountains. The precise stonework showcases incredible Incan engineering."
  },
  {
    name: "Scared Plaza",
    image: "/card4.jpg",
    description: "The central gathering space that separates the agricultural and urban zones. This vast open area was likely used for ceremonies, gatherings, and daily community life."
  },
  {
    name: "Inca Terraces",
    image: "/card5.jpg",
    description: "The iconic stepped farming platforms that cascade down the mountainside. These terraces prevented erosion, maximized arable land, and created microclimates for different crops."
  },
  {
    name: "Temple of the Condor",
    image: "/card6.jpg",
    description: "An underground chamber carved beneath the Temple of the Sun. This mysterious cave features precisely cut stone niches and was likely used for mummification rituals."
  }
];

export default function MachuPicchu() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const nextCard = () => {
    setShowDescription(false);
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % landmarks.length);
    }, 300);
  };

  const prevCard = () => {
    setShowDescription(false);
    setTimeout(() => {
      setCurrentCard((prev) => (prev - 1 + landmarks.length) % landmarks.length);
    }, 300);
  };

  const toggleView = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Machu Picchu</h1>
          <p className={styles.heroSubtitle}>An unsolved mystery of the Lost City of the Incas</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '2430', label: 'Metres Over Sea Level' },
            { number: '1450', label: 'Year Built' },
            { number: '1987', label: 'Official UNESCO Heritage Site' }
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

      {/* Flashcard Section */}
      <section className={styles.flashcardSection}>
        <div className={styles.flashcardContainer}>
          <h2 className={styles.flashcardTitle}>Key Landmarks of Machu Picchu</h2>
          
          <div className={styles.cardWrapper}>
            <div className={styles.card} onClick={toggleView}>
              {/* Image View */}
              <div 
                className={styles.cardFace}
                style={{
                  opacity: showDescription ? 0 : 1,
                  pointerEvents: showDescription ? 'none' : 'auto'
                }}
              >
                <img 
                  src={landmarks[currentCard].image} 
                  alt={landmarks[currentCard].name}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <h3 className={styles.landmarkName}>{landmarks[currentCard].name}</h3>
                  <p className={styles.clickHint}>Click to learn more</p>
                </div>
              </div>

              {/* Description View */}
              <div 
                className={styles.cardFace}
                style={{
                  opacity: showDescription ? 1 : 0,
                  pointerEvents: showDescription ? 'auto' : 'none'
                }}
              >
                <div className={styles.cardDescription}>
                  <h3 className={styles.descriptionTitle}>{landmarks[currentCard].name}</h3>
                  <p className={styles.descriptionText}>{landmarks[currentCard].description}</p>
                  <p className={styles.clickHint}>Click to see image</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className={styles.navigation}>
              <button onClick={prevCard} className={styles.navButton}>
                ← Previous
              </button>
              <div className={styles.counter}>
                {currentCard + 1} / {landmarks.length}
              </div>
              <button onClick={nextCard} className={styles.navButton}>
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}