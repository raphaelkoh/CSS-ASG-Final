// page.jsx - SIMPLIFIED
'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Navbar from '../nav/Navbar';
import Footer from '../footer/footer.jsx'

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      id: 'asia-explorer',
      title: 'Asian Wonders Explorer',
      duration: '14 Days',
      price: 3499,
      destinations: ['Great Wall of China', 'Taj Mahal'],
      highlights: [
        'Visit the iconic Great Wall sections',
        'Explore the magnificent Taj Mahal at sunrise',
        'Experience traditional Chinese and Indian cuisine',
        'Expert local guides included'
      ],
      difficulty: 'Moderate'
    },
    {
      id: 'mediterranean-heritage',
      title: 'Mediterranean Heritage',
      duration: '10 Days',
      price: 2499,
      destinations: ['Colosseum', 'Petra'],
      highlights: [
        'Explore ancient Roman architecture',
        'Discover the Rose City of Petra',
        'Authentic Italian and Middle Eastern cuisine',
        'Archaeological expert guides'
      ],
      difficulty: 'Easy'
    },
    {
      id: 'grand-world-tour',
      title: 'Grand World Tour',
      duration: '28 Days',
      price: 8999,
      destinations: [
        'Great Wall of China',
        'Petra',
        'Christ the Redeemer',
        'Machu Picchu',
        'Chichen Itza',
        'Colosseum',
        'Taj Mahal'
      ],
      highlights: [
        'Visit all Seven Wonders of the World',
        'First-class accommodations',
        'Expert guides at each location',
        'All meals and transportation included',
        'Small group experience (max 12 people)'
      ],
      difficulty: 'Challenging'
    }
  ];

  const features = [
    { icon: '👨‍🏫', title: 'Expert Guides', text: 'Knowledgeable local guides with deep understanding of history and culture.' },
    { icon: '🏨', title: 'Quality Accommodations', text: 'Carefully selected hotels offering comfort and authentic local character.' },
    { icon: '🍽️', title: 'Authentic Cuisine', text: 'Experience local flavors with included meals at traditional restaurants.' },
    { icon: '👥', title: 'Small Groups', text: 'Intimate group sizes (8-12 people) ensure personalized attention.' },
    { icon: '🚐', title: 'All Transportation', text: 'Comfortable transportation between destinations included.' },
    { icon: '🎫', title: 'Skip the Lines', text: 'Priority access to attractions means more time exploring.' }
  ];

  const faqs = [
    { q: "What's included in the tour price?", a: 'Tour prices include accommodations, most meals, transportation, entrance fees, expert guides, and airport transfers.' },
    { q: 'Are flights included?', a: 'International flights to the first destination are not included, but all inter-destination flights during the tour are covered.' },
    { q: 'What is the cancellation policy?', a: 'Full refund for cancellations 60+ days before departure. 50% refund for 30-59 days. No refund within 30 days.' }
  ];

  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      {/* Header */}
      <section className={styles.header}>
        <h1>Tour Packages</h1>
        <p>Embark on the journey of a lifetime with our carefully curated tour packages. Pick the one that catches your eye and we'll make it an unforgettable experience.</p>
      </section>

      {/* Tours Section */}
      <section className={styles.toursSection}>
        <h2>Available Tours</h2>
        <div className={styles.toursGrid}>
          {tours.map((tour) => (
            <div key={tour.id} className={`${styles.tourCard} ${selectedTour === tour.id ? styles.selected : ''}`}>
              
              <div className={styles.tourHeader}>
                <h3>{tour.title}</h3>
                <span className={styles.badge}>{tour.difficulty}</span>
              </div>

              <div className={styles.meta}>
                <span>⏱️ {tour.duration}</span>
                <span>📍 {tour.destinations.length} Wonder{tour.destinations.length > 1 ? 's' : ''}</span>
              </div>

              <div className={styles.price}>
                <span className={styles.priceLabel}>From</span>
                <span className={styles.priceAmount}>${tour.price.toLocaleString()}</span>
                <span className={styles.priceNote}>per person</span>
              </div>

              <div className={styles.destinations}>
                <h4>Destinations:</h4>
                <ul>
                  {tour.destinations.map((dest, idx) => <li key={idx}>{dest}</li>)}
                </ul>
              </div>

              <button 
                className={styles.toggleBtn}
                onClick={() => setSelectedTour(tour.id === selectedTour ? null : tour.id)}
              >
                {selectedTour === tour.id ? 'Hide Details ▲' : 'View Details ▼'}
              </button>

              {selectedTour === tour.id && (
                <div className={styles.details}>
                  <h4>Highlights:</h4>
                  <ul>
                    {tour.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                  </ul>
                  <Link href="/contact" className={styles.bookBtn}>
                  <button className={styles.bookBtn}>Book This Tour</button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <h2>Why Choose Our Tours?</h2>
        <div className={styles.featuresGrid}>
          {features.map((f, idx) => (
            <div key={idx} className={styles.featureCard}>
              <span className={styles.icon}>{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}