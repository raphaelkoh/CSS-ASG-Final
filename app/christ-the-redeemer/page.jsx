"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';
import Footer from '../footer/footer.jsx'

export default function ChristTheRedeemer() {
  const [activeComparison, setActiveComparison] = useState(null);
  const [timelineYear, setTimelineYear] = useState(1931); // Start at completion

  // Timeline data
  const timelineEvents = [
    { year: 1922, title: "Foundation Laid", description: "Construction begins on Corcovado Mountain", progress: 0 },
    { year: 1926, title: "Base Construction", description: "The pedestal and chapel foundation completed", progress: 25 },
    { year: 1929, title: "Body Erected", description: "Reinforced concrete structure assembled", progress: 60 },
    { year: 1931, title: "Completion", description: "Soapstone tiles applied, statue inaugurated", progress: 100 }
  ];

  // Find current timeline event
  const getCurrentEvent = () => {
    for (let i = timelineEvents.length - 1; i >= 0; i--) {
      if (timelineYear >= timelineEvents[i].year) {
        return timelineEvents[i];
      }
    }
    return timelineEvents[0];
  };

  const currentEvent = getCurrentEvent();

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Christ the Redeemer</h1>
          <p className={styles.heroSubtitle}>Icon of Rio, Guardian of Brazil</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '38m', label: 'Total Height Including Pedestal' },
            { number: '635', label: 'Tons Total Weight' },
            { number: '2007', label: 'Named New Wonder of the World' }
          ].map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Scale Comparison Section */}
      <section className={styles.scaleSection}>
        <div className={styles.scaleContainer}>
          <h2 className={styles.scaleTitle}>How Big Is It?</h2>
          <p className={styles.scaleSubtitle}>Click different objects to compare the statue's size</p>

          {/* Comparison Options */}
          <div className={styles.comparisonOptions}>
            {[
              { id: 'person', name: '👤 Person', height: 1.7, unit: 'meters', equivalent: '22.4x taller' },
              { id: 'bus', name: '🚌 Bus', height: 4, unit: 'meters', equivalent: '9.5x taller' },
              { id: 'giraffe', name: '🦒 Giraffe', height: 5.5, unit: 'meters', equivalent: '6.9x taller' },
              { id: 'liberty', name: '🗽 Statue of Liberty', height: 46, unit: 'meters', equivalent: '0.83x shorter' },
              { id: 'bigben', name: '🏰 Big Ben', height: 96, unit: 'meters', equivalent: '0.4x shorter' }
            ].map((option) => (
              <button
                key={option.id}
                className={`${styles.comparisonButton} ${activeComparison === option.id ? styles.comparisonActive : ''}`}
                onClick={() => setActiveComparison(option.id)}
              >
                <span className={styles.comparisonEmoji}>{option.name.split(' ')[0]}</span>
                <span className={styles.comparisonName}>{option.name.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </div>

          {/* Visual Comparison Display */}
          <div className={styles.comparisonDisplay}>
            <div className={styles.comparisonCanvas}>
              {/* Christ the Redeemer - Always shown */}
              <div className={styles.christStatue}>
                <div className={styles.statueVisual}>
                  <img src="/comparisons/christ-silhouette.png" alt="Christ the Redeemer" className={styles.comparisonImage} />
                  <div className={styles.heightLabel}>
                    <span className={styles.heightNumber}>38m</span>
                    <span className={styles.heightText}>Christ the Redeemer</span>
                  </div>
                </div>
              </div>

              {/* Comparison Object - Changes based on selection */}
              {activeComparison && (
                <div className={`${styles.comparisonObject} ${styles[`comparison-${activeComparison}`]}`}>
                  <div className={styles.objectVisual}>
                    {activeComparison === 'person' && (
                      <img src="/comparisons/person-silhouette.png" alt="Person" className={styles.comparisonImage} />
                    )}
                    {activeComparison === 'bus' && (
                      <img src="/comparisons/bus-silhouette.png" alt="Bus" className={styles.comparisonImage} />
                    )}
                    {activeComparison === 'giraffe' && (
                      <img src="/comparisons/giraffe-silhouette.png" alt="Giraffe" className={styles.comparisonImage} />
                    )}
                    {activeComparison === 'liberty' && (
                      <img src="/comparisons/liberty-silhouette.png" alt="Statue of Liberty" className={styles.comparisonImage} />
                    )}
                    {activeComparison === 'bigben' && (
                      <img src="/comparisons/bigben-silhouette.png" alt="Big Ben" className={styles.comparisonImage} />
                    )}
                    <div className={styles.heightLabel}>
                      <span className={styles.heightNumber}>
                        {[
                          { id: 'person', height: 1.7 },
                          { id: 'bus', height: 4 },
                          { id: 'giraffe', height: 5.5 },
                          { id: 'liberty', height: 46 },
                          { id: 'bigben', height: 96 }
                        ].find(o => o.id === activeComparison)?.height}m
                      </span>
                      <span className={styles.heightText}>
                        {[
                          { id: 'person', name: 'Average Person' },
                          { id: 'bus', name: 'Double-Decker Bus' },
                          { id: 'giraffe', name: 'Giraffe' },
                          { id: 'liberty', name: 'Statue of Liberty' },
                          { id: 'bigben', name: 'Big Ben' }
                        ].find(o => o.id === activeComparison)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Comparison Facts */}
            {activeComparison && (
              <div className={styles.comparisonFacts}>
                <h3>Did You Know?</h3>
                <p>
                  {activeComparison === 'person' && 'Christ the Redeemer is about 22 times taller than an average person! You could stack 22 people head-to-toe to reach the top.'}
                  {activeComparison === 'bus' && 'The statue is nearly 10 double-decker buses tall! Imagine stacking buses to the sky.'}
                  {activeComparison === 'giraffe' && 'Even the tallest giraffe would need to stand on another giraffe 3 times over to match the height!'}
                  {activeComparison === 'liberty' && 'Christ the Redeemer is slightly shorter than the Statue of Liberty (including her pedestal at 93m), but their actual statue heights are similar!'}
                  {activeComparison === 'bigben' && 'Big Ben\'s clock tower is more than twice as tall as Christ the Redeemer, standing at an impressive 96 meters!'}
                </p>
                <div className={styles.equivalentBadge}>
                  {[
                    { id: 'person', equivalent: 'Christ is 22.4x taller' },
                    { id: 'bus', equivalent: 'Christ is 9.5x taller' },
                    { id: 'giraffe', equivalent: 'Christ is 6.9x taller' },
                    { id: 'liberty', equivalent: 'Liberty is 1.2x taller' },
                    { id: 'bigben', equivalent: 'Big Ben is 2.5x taller' }
                  ].find(o => o.id === activeComparison)?.equivalent}
                </div>
              </div>
            )}
          </div>

          {/* Scale Grid Reference */}
          <div className={styles.scaleGrid}>
            <div className={styles.gridTitle}>Height Reference</div>
            <div className={styles.gridItems}>
              <div className={styles.gridItem}>
                <span className={styles.gridIcon}>👤</span>
                <span className={styles.gridLabel}>Person: 1.7m</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.gridIcon}>🚌</span>
                <span className={styles.gridLabel}>Bus: 4m</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.gridIcon}>🦒</span>
                <span className={styles.gridLabel}>Giraffe: 5.5m</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.gridIcon}>⛪</span>
                <span className={styles.gridLabel}>Christ: 38m</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.gridIcon}>🗽</span>
                <span className={styles.gridLabel}>Liberty: 46m</span>
              </div>
              <div className={styles.gridItem}>
                <span className={styles.gridIcon}>🏰</span>
                <span className={styles.gridLabel}>Big Ben: 96m</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          <h2 className={styles.timelineTitle}>Construction Timeline</h2>
          <p className={styles.timelineSubtitle}>Drag the slider to see the building process (1922-1931)</p>

          {/* Timeline slider */}
          <div className={styles.timelineSliderWrapper}>
            <div className={styles.timelineYearLabels}>
              <span>1922</span>
              <span>1926</span>
              <span>1929</span>
              <span>1931</span>
            </div>
            
            <input
              type="range"
              min="1922"
              max="1931"
              value={timelineYear}
              onChange={(e) => setTimelineYear(parseInt(e.target.value))}
              className={styles.timelineSlider}
            />
            
            <div className={styles.timelineProgress} style={{ width: `${currentEvent.progress}%` }} />
          </div>

          {/* Current event display */}
          <div className={styles.currentEvent}>
            <div className={styles.eventYear}>{timelineYear}</div>
            <div className={styles.eventContent}>
              <h3 className={styles.eventTitle}>{currentEvent.title}</h3>
              <p className={styles.eventDescription}>{currentEvent.description}</p>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${currentEvent.progress}%` }}
                >
                  <span>{currentEvent.progress}% Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual construction stages */}
          <div className={styles.constructionStages}>
            {timelineEvents.map((event, i) => (
              <div 
                key={i} 
                className={`${styles.stageCard} ${timelineYear >= event.year ? styles.stageActive : ''}`}
              >
                <div className={styles.stageYear}>{event.year}</div>
                <div className={styles.stageTitle}>{event.title}</div>
              </div>
            ))}
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
      question: "How tall is Christ the Redeemer?", 
      answer: "The statue is 30 meters (98 feet) tall, with an additional 8-meter (26 feet) pedestal, making the total height 38 meters (124 feet)." 
    },
    { 
      question: "How long did it take to build?", 
      answer: "Construction took 9 years, from 1922 to 1931. It was officially inaugurated on October 12, 1931." 
    },
    { 
      question: "What is the statue made of?", 
      answer: "The structure is made of reinforced concrete, covered with approximately 6 million soapstone tiles." 
    },
    { 
      question: "Why was it built on Corcovado Mountain?", 
      answer: "The mountain was chosen for its height (710 meters) and visibility from almost anywhere in Rio de Janeiro, making it an ideal location for this iconic monument." 
    },
    { 
      question: "Has it ever been struck by lightning?", 
      answer: "Yes, the statue is struck by lightning several times a year. In 2014, lightning damaged the thumb and fingers, which were later restored." 
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
