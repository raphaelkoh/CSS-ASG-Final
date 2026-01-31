"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';
import Footer from '../footer/footer.jsx'

export default function Petra() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Hotspot data for different architectural features
  const hotspots = [
    {
      id: 1,
      name: "The Urn",
      position: { top: '15%', left: '48%' },
      description: "The massive urn sits atop the Treasury, carved from solid rock. Local legends claimed it held hidden treasure.",
      facts: ["Height: 3.5 meters", "Riddled with bullet holes from Bedouin attempts to break it open"]
    },
    {
      id: 2,
      name: "Corinthian Columns",
      position: { top: '45%', left: '35%' },
      description: "Six magnificent columns showcase Hellenistic architectural influence, each intricately carved from the rose-red sandstone.",
      facts: ["Greek-influenced design", "Carved circa 1st century AD"]
    },
    {
      id: 3,
      name: "The Facade",
      position: { top: '50%', left: '60%' },
      description: "Standing 40 meters tall, the Treasury's facade is the most elaborate in all of Petra, combining Nabataean and classical styles.",
      facts: ["Width: 25 meters", "Carved top-down from cliff face"]
    },
    {
      id: 4,
      name: "Central Doorway",
      position: { top: '65%', left: '48%' },
      description: "The entrance leads to a surprisingly simple interior - three chambers with no decoration, suggesting it may have been a royal tomb.",
      facts: ["Interior is undecorated", "Purpose still debated by archaeologists"]
    },
    {
      id: 5,
      name: "The Siq Path",
      position: { top: '85%', left: '20%' },
      description: "The narrow gorge stretches 1.2km, carved by water over millennia. Ancient Nabataeans engineered water channels along its walls.",
      facts: ["Length: 1.2 kilometers", "Width: As narrow as 3 meters in places"]
    }
  ];

  const toggleHotspot = (id) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Petra</h1>
          <p className={styles.heroSubtitle}>The Rose-Red City Half as Old as Time</p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {[
            { number: '312 BC', label: 'Founded by Nabataeans' },
            { number: '800+', label: 'Structures Carved from Rock' },
            { number: '1985', label: 'UNESCO World Heritage Site' }
          ].map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Panorama Section */}
      <section className={styles.panoramaSection}>
        <div className={styles.panoramaContainer}>
          <h2 className={styles.panoramaTitle}>Explore the Treasury</h2>
          <p className={styles.panoramaSubtitle}>Click the hotspots to discover architectural features</p>

          {/* Panorama Image Container */}
          <div className={styles.panoramaWrapper}>
            <div className={styles.panoramaImage}>
              {/* Using petra.jpg for the interactive viewer */}
              <img 
                src="/petra.jpg" 
                alt="Petra Treasury" 
              />
              
              {/* Hotspots */}
              {hotspots.map((hotspot) => (
                <div key={hotspot.id}>
                  <div
                    className={`${styles.hotspot} ${activeHotspot === hotspot.id ? styles.hotspotActive : ''}`}
                    style={{ top: hotspot.position.top, left: hotspot.position.left }}
                    onClick={() => toggleHotspot(hotspot.id)}
                  >
                    <div className={styles.hotspotPulse}></div>
                    <div className={styles.hotspotDot}>+</div>
                  </div>

                  {/* Info Panel */}
                  {activeHotspot === hotspot.id && (
                    <div
                      className={styles.infoPanel}
                      style={{ 
                        top: parseInt(hotspot.position.top) > 60 
                          ? `calc(${hotspot.position.top} - 180px)` 
                          : `calc(${hotspot.position.top} + 40px)`, 
                        left: hotspot.position.left 
                      }}
                    >
                      <button 
                        className={styles.closeButton}
                        onClick={() => setActiveHotspot(null)}
                      >
                        ✕
                      </button>
                      <h3 className={styles.infoPanelTitle}>{hotspot.name}</h3>
                      <p className={styles.infoPanelDescription}>{hotspot.description}</p>
                      <ul className={styles.infoPanelFacts}>
                        {hotspot.facts.map((fact, index) => (
                          <li key={index}>{fact}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Through the Siq Section */}
      <section className={styles.siqSection}>
        <div className={styles.siqContainer}>
          <h2 className={styles.siqTitle}>Journey Through the Siq</h2>
          <p className={styles.siqSubtitle}>The dramatic 1.2km gorge leading to the Treasury</p>
          
          <div className={styles.siqGallery}>
            {[
              { title: "Entrance", desc: "The journey begins at the canyon entrance" },
              { title: "Narrow Passage", desc: "Walls tower 80 meters high" },
              { title: "Water Channels", desc: "Ancient Nabataean engineering" },
              { title: "First Glimpse", desc: "The Treasury reveals itself" }
            ].map((stage, i) => (
              <div key={i} className={styles.siqCard}>
                <div className={styles.siqCardNumber}>{i + 1}</div>
                <h4 className={styles.siqCardTitle}>{stage.title}</h4>
                <p className={styles.siqCardDesc}>{stage.desc}</p>
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
    { question: "When was Petra built?", answer: "Petra was established around 312 BC by the Nabataeans and flourished as their capital city." },
    { question: "Why is Petra called the 'Rose-Red City'?", answer: "The name comes from the distinctive rose-red color of the sandstone from which the structures are carved." },
    { question: "How was Petra rediscovered?", answer: "Swiss explorer Johann Ludwig Burckhardt rediscovered Petra in 1812 after it was lost to the Western world for centuries." },
    { question: "What was the Treasury actually used for?", answer: "Despite its name, Al-Khazneh was likely a royal tomb, not a treasury." },
    { question: "How many structures are in Petra?", answer: "Petra contains over 800 carved monuments including tombs, temples, and facades." },
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
