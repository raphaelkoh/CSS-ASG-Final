/**
 * Homepage - Main landing page for Seven Wonders website
 * Shows hero section with video, intro text, and cards for all 7 wonders
 */

"use client";

import Navbar from './nav/Navbar';
import styles from './page.module.css';
import Footer from './footer/footer.jsx';

export default function Home() {
  // Data for all seven wonders - used to generate the cards below
  const wonders = [
    {
      name: 'Great Wall of China',
      location: 'China',
      year: '7th Century BC',
      description: 'An ancient series of fortifications spanning thousands of miles across northern China.',
      link: '/great-wall',
      image: '/greatwall1.jpg',
    },
    {
      name: 'Petra',
      location: 'Jordan',
      year: '312 BC',
      description: 'An archaeological city famous for its rock-cut architecture and water conduit system.',
      link: '/petra',
      image: '/petra.jpg',
    },
    {
      name: 'Christ the Redeemer',
      location: 'Brazil',
      year: '1931 AD',
      description: 'An iconic statue of Jesus Christ overlooking Rio de Janeiro from Corcovado mountain.',
      link: '/christ-the-redeemer',
      image: '/christ-redeemer.jpg',
    },
    {
      name: 'Machu Picchu',
      location: 'Peru',
      year: '1450 AD',
      description: 'An ancient Incan citadel set high in the Andes Mountains above the Urubamba River valley.',
      link: '/machu-picchu',
      image: '/machupicchu1.jpg',
    },
    {
      name: 'Chichen Itza',
      location: 'Mexico',
      year: '600 AD',
      description: 'A complex of Mayan ruins featuring the iconic El Castillo pyramid temple.',
      link: '/chichen-itza',
      image: '/chichenitza1.jpg',
    },
    {
      name: 'Colosseum',
      location: 'Italy',
      year: '80 AD',
      description: 'An ancient Roman amphitheater known for gladiatorial contests and public spectacles.',
      link: '/colosseum',
      image: '/colosseum1.jpg',
    },
    {
      name: 'Taj Mahal',
      location: 'India',
      year: '1653 AD',
      description: 'An ivory-white marble mausolem, a monument to eternal love and architectural perfection.',
      link: '/taj-mahal',
      image: '/tajmahal1.jpg',
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - full screen with video background */}
      <section className={styles.hero}>
        {/* Background video for visual impact */}
        <video
          className={styles.heroVideo}
          src="/earth.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Dark overlay to make text readable */}
        <div className={styles.heroOverlay} />

        {/* Main hero content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>Come discover the</span>
            <span className={styles.titleLine2}>Wonders of the World</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Journey through time to explore humanity's greatest architectural
            achievements. From ancient civilizations to modern marvels, witness
            the monuments that shaped our world.
          </p>
          
          {/* CTA buttons */}
          <div className={styles.heroButtons}>
            <a href="#wonders" className={`btn ${styles.btnPrimary}`}>Explore Wonders</a>
            <a href="/tours" className={`btn ${styles.btnSecondary}`}>Book a Tour</a>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Introduction Section - context about the wonders */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <h2>A Legacy of Human Achievement</h2>
            <div className="decorative-line"></div>
            <p>
              The Seven Wonders of the World represent the pinnacle of human creativity,
              engineering, and cultural significance. Each wonder tells a unique story of
              the civilization that created it, standing as a testament to human ingenuity
              and the desire to create something magnificent that transcends time.
            </p>
            <p>
              These architectural masterpieces span different eras, continents, and
              cultures, yet they share a common thread: they inspire awe and wonder in
              all who behold them. From the ancient fortifications of China to the
              spiritual monuments of India, each site offers a window into the past and
              a glimpse of human potential.
            </p>
          </div>
        </div>
      </section>

      {/* Main wonders showcase section */}
      <section id="wonders" className={styles.wondersSection}>
        <div className="container">
          <h2 className="text-center">The Seven Wonders</h2>
          <div className="decorative-line"></div>
          <p className={`${styles.sectionSubtitle} text-center`}>
            Click on each wonder to explore its history, architecture, and cultural significance
          </p>

          {/* Grid of wonder cards */}
          <div className={styles.wondersGrid}>
            {/* Map through wonders array to create a card for each one */}
            {wonders.map((wonder, index) => (
              <article key={index} className={styles.wonderCard}>
                <a href={wonder.link} className={styles.cardLink}>
                  <div className={styles.cardImage}>
                    <img src={wonder.image} alt={wonder.name} className={styles.cardImage} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{wonder.name}</h3>
                    <div className={styles.cardMeta}>
                      <span className={styles.location}>📍 {wonder.location}</span>
                      <span className={styles.year}>📅 {wonder.year}</span>
                    </div>
                    <p className={styles.cardDescription}>{wonder.description}</p>
                    <span className={styles.cardButton}>
                      Explore <span className={styles.arrow}>→</span>
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Explore?</h2>
            <div className="decorative-line"></div>
            <p>
              Plan your journey to visit these incredible monuments. Our curated tours
              offer expert guides, comfortable accommodations, and unforgettable experiences.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/tours" className={`btn ${styles.btnPrimary}`}>View Tours</a>
              <a href="/contact" className={`btn ${styles.btnSecondary}`}>Contact Us</a>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
