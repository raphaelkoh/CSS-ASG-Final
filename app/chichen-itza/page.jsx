"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';
import Footer from '../footer/footer.jsx'

export default function ChichenItza() {
  const [birthDate, setBirthDate] = useState('');
  const [mayanDate, setMayanDate] = useState(null);

  // Mayan Calendar Constants
  const tzolkinNames = [
    "Imix", "Ik", "Akbal", "Kan", "Chicchan", "Cimi", "Manik",
    "Lamat", "Muluc", "Oc", "Chuen", "Eb", "Ben", "Ix",
    "Men", "Cib", "Caban", "Etznab", "Cauac", "Ahau"
  ];

  const haabMonths = [
    "Pop", "Wo", "Zip", "Zotz", "Tzec", "Xul", "Yaxkin",
    "Mol", "Chen", "Yax", "Zac", "Ceh", "Mac", "Kankin",
    "Muan", "Pax", "Kayab", "Cumku", "Wayeb"
  ];

  const tzolkinMeanings = {
    "Imix": "Crocodile - Birth, nourishment, primal energy",
    "Ik": "Wind - Spirit, breath, communication",
    "Akbal": "Night - Mystery, dreams, inner temple",
    "Kan": "Seed - Growth, potential, ripening",
    "Chicchan": "Serpent - Life force, passion, kundalini",
    "Cimi": "Death - Transformation, release, surrender",
    "Manik": "Deer - Pillar, support, healing hands",
    "Lamat": "Rabbit - Venus, harmony, playfulness",
    "Muluc": "Water - Purification, flow, emotions",
    "Oc": "Dog - Loyalty, guidance, heart",
    "Chuen": "Monkey - Artistry, weaving, playfulness",
    "Eb": "Human - Free will, abundance, wisdom",
    "Ben": "Reed - Navigation, channel, angelic messenger",
    "Ix": "Jaguar - Feminine power, magic, earth wisdom",
    "Men": "Eagle - Vision, mind, perspective",
    "Cib": "Wisdom - Ancient knowing, forgiveness",
    "Caban": "Earth - Synchronicity, evolution, navigation",
    "Etznab": "Mirror - Reflection, order, infinity",
    "Cauac": "Storm - Transformation, catalyst, light body",
    "Ahau": "Sun - Enlightenment, universal fire, ascension"
  };

  // Calculate Mayan Calendar Date
  const calculateMayanDate = (dateString) => {
    if (!dateString) return;

    const date = new Date(dateString);
    const baseDate = new Date('1970-01-01'); // Modern correlation constant base
    const daysDiff = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));

    // Tzolk'in calculation (260-day cycle)
    const tzolkinDay = ((daysDiff + 4) % 13) + 1; // Number 1-13
    const tzolkinNameIndex = (daysDiff + 4) % 20; // Name index 0-19
    const tzolkinName = tzolkinNames[tzolkinNameIndex];

    // Haab calculation (365-day cycle)
    const haabPosition = (daysDiff + 65) % 365;
    const haabMonth = Math.floor(haabPosition / 20);
    const haabDay = haabPosition % 20;

    setMayanDate({
      tzolkinDay,
      tzolkinName,
      haabDay,
      haabMonth: haabMonths[haabMonth],
      meaning: tzolkinMeanings[tzolkinName],
      gregorianDate: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setBirthDate(selectedDate);
    // Auto-calculate when date is selected
    if (selectedDate) {
      calculateMayanDate(selectedDate);
    }
  };

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
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mayan Calendar Decoder Section */}
      <section className={styles.calendarSection}>
        <div className={styles.calendarContainer}>
          <h2 className={styles.sectionTitle}>Mayan Calendar Decoder</h2>
          <p className={styles.sectionSubtitle}>
            Discover your Mayan birth date and learn the ancient wisdom of your day sign
          </p>

          <div className={styles.calendarWrapper}>
            {/* Input Section */}
            <div className={styles.inputSection}>
              <label htmlFor="birthdate-input" className={styles.inputLabel}>
                Enter Your Birth Date
              </label>
              <input
                id="birthdate-input"
                type="date"
                value={birthDate}
                onChange={handleDateChange}
                className={styles.dateInput}
                max={new Date().toISOString().split('T')[0]}
              />
              <button 
                onClick={() => calculateMayanDate(birthDate)}
                className={styles.calculateButton}
                disabled={!birthDate}
              >
                {birthDate ? 'Decode My Mayan Date' : 'Select a Date First'}
              </button>
            </div>

            {/* Results Display */}
            {mayanDate && (
              <div className={styles.resultsContainer}>
                <div className={styles.resultsHeader}>
                  <h3>Your Mayan Birth Date</h3>
                  <p className={styles.gregorianDate}>{mayanDate.gregorianDate}</p>
                </div>

                <div className={styles.calendarsGrid}>
                  {/* Tzolk'in Calendar */}
                  <div className={styles.calendarCard}>
                    <div className={styles.calendarBadge}>Tzolk'in</div>
                    <div className={styles.calendarName}>Sacred Calendar</div>
                    <div className={styles.mayanGlyph}>
                      <div className={styles.glyphCircle}>
                        <span className={styles.glyphNumber}>{mayanDate.tzolkinDay}</span>
                        <span className={styles.glyphName}>{mayanDate.tzolkinName}</span>
                      </div>
                    </div>
                    <p className={styles.calendarDescription}>
                      260-day ritual calendar used for ceremonies and divination
                    </p>
                  </div>

                  {/* Haab Calendar */}
                  <div className={styles.calendarCard}>
                    <div className={styles.calendarBadge}>Haab</div>
                    <div className={styles.calendarName}>Solar Calendar</div>
                    <div className={styles.mayanGlyph}>
                      <div className={styles.glyphCircle}>
                        <span className={styles.glyphNumber}>{mayanDate.haabDay}</span>
                        <span className={styles.glyphName}>{mayanDate.haabMonth}</span>
                      </div>
                    </div>
                    <p className={styles.calendarDescription}>
                      365-day civil calendar based on the solar year
                    </p>
                  </div>
                </div>

                {/* Day Sign Meaning */}
                <div className={styles.meaningCard}>
                  <h4>Your Day Sign: {mayanDate.tzolkinName}</h4>
                  <p className={styles.meaningText}>{mayanDate.meaning}</p>
                  <div className={styles.meaningNote}>
                    ✨ In Mayan tradition, your day sign influences your personality, 
                    destiny, and spiritual path throughout life.
                  </div>
                </div>

                {/* Fun Facts */}
                <div className={styles.funFacts}>
                  <h4>Did You Know?</h4>
                  <ul>
                    <li>The Tzolk'in and Haab calendars sync every 52 years in the "Calendar Round"</li>
                    <li>Mayans also used the Long Count calendar to track dates over millennia</li>
                    <li>The famous "2012 prophecy" was based on the Long Count reaching 13.0.0.0.0</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Initial State Message */}
            {!mayanDate && (
              <div className={styles.placeholderMessage}>
                <div className={styles.placeholderIcon}>📅</div>
                <h3>Enter your birth date to begin</h3>
                <p>
                  The Maya were master astronomers and mathematicians. 
                  Their calendar system was more accurate than the Julian calendar used in Europe at the time.
                </p>
              </div>
            )}
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
      question: "What happens during the spring equinox at Chichen Itza?", 
      answer: "During the spring and fall equinoxes, the sun creates a shadow pattern on El Castillo that resembles a serpent descending the pyramid. This phenomenon attracts thousands of visitors and demonstrates the Mayans' astronomical precision." 
    },
    { 
      question: "Why does the pyramid echo sound like a bird?", 
      answer: "When you clap at the base of El Castillo, the echo bounces off the pyramid's steps creating a chirping sound similar to the Quetzal bird. Researchers discovered this in 1998 and debate whether it was intentionally designed." 
    },
    { 
      question: "How many pyramids are inside El Castillo?", 
      answer: "El Castillo contains three pyramids built on top of each other. The Maya built new structures over existing ones, with the innermost pyramid dating to around 800-900 AD." 
    },
    { 
      question: "What is the significance of the 365 steps?", 
      answer: "El Castillo has 91 steps on each of its four sides, totaling 364 steps. Adding the top platform makes 365 - matching the days in the solar year and demonstrating Mayan astronomical knowledge." 
    },
    { 
      question: "Was Chichen Itza built by the Maya?", 
      answer: "Yes, Chichen Itza was built by the Maya civilization and flourished between 600-1200 AD. It shows influence from both the Maya and the Toltec cultures, creating a unique architectural blend." 
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
