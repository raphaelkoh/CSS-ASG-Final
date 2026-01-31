"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';
import Footer from '../footer/footer.jsx'

const timeline = [
  { year: "7th Century BCE", event: "Rival feudal states build the first disconnected walls of rammed earth to defend against one another." },
  { year: "221 BCE", event: "Emperor Qin Shi Huang unifies China and connects these separate walls into a single northern defense against nomadic tribes." },
  { year: "206 BCE - 220 CE", event: "The Han Dynasty extends the wall westward into the Gobi Desert to protect the vital Silk Road trade routes." },
  { year: "1271 - 1368 CE", event: "The wall falls into neglect under the Mongol-led Yuan Dynasty, as the empire's territory extends far north of the wall." },
  { year: "1368 - 1644 CE", event: "The Ming Dynasty rebuilds the wall using the iconic stone, brick, and watchtowers we recognize today to keep out northern invaders." },
  { year: "1987 - 2026", event: "The wall is designated a UNESCO World Heritage site, transitioning from a military fortification to a global symbol of cultural preservation." }
];

export default function GreatWall() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Great Wall of China</h1>
          <p className={styles.heroSubtitle}>Withstanding the test of time</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '21,196', label: 'Kilometers Long' },
            { number: '2000+', label: 'Years Old' },
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

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          <h2 className={styles.timelineTitle}>The History Behind It All</h2>
          
          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLine} />
  
            {timeline.map((item, i) => (
              <div 
                key={i}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineEvent}>{item.event}</div>
                </div>
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
      question: "How long is the Great Wall of China?", 
      answer: "The wall stretches approximately 21,196 kilometers (13,171 miles) across northern China." 
    },
    { 
      question: "When was the Great Wall built?", 
      answer: "Construction began as early as the 7th century BCE, with major expansions during the Qin, Han, and Ming dynasties." 
    },
    { 
      question: "What materials were used to build the wall?", 
      answer: "Different sections used local materials such as tamped earth, wood, bricks, and stone depending on the region." 
    },
    { 
      question: "Was the Great Wall effective in defense?", 
      answer: "It slowed invasions and served as a psychological barrier, but it was not impenetrable. It also functioned as a trade and border control system." 
    },
    { 
      question: "Can the Great Wall be seen from space?", 
      answer: "Despite popular belief, it is not visible to the naked eye from space. Astronauts have confirmed this." 
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
