/**
 * Footer Component
 * Site-wide footer with links, wonder navigation, and social media
 * Used on every page for consistent branding
 */

import styles from './footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Main footer content grid */}
        <div className={styles.footerGrid}>
          
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>About</h3>
            <p className={styles.footerText}>
              Explore the magnificent Seven Wonders of the World. Journey through
              history and discover the architectural marvels that define human
              achievement.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/tours">Tours</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#top">Back to Top</a></li>
            </ul>
          </div>

          {/* Wonders Section - links to all wonder pages */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>The Wonders</h3>
            <ul className={styles.footerLinks}>
              <li><a href="./great-wall">Great Wall</a></li>
              <li><a href="./petra">Petra</a></li>
              <li><a href="./christ-the-redeemer">Christ the Redeemer</a></li>
              <li><a href="./machu-picchu">Machu Picchu</a></li>
              <li><a href="./chichen-itza">Chichen Itza</a></li>
              <li><a href="./the-colosseum">Colosseum</a></li>
              <li><a href="./taj-mahal">Taj Mahal</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Connect</h3>
            <ul className={styles.socialLinks}>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className={styles.socialIcon}>f</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <span className={styles.socialIcon}>𝕏</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span className={styles.socialIcon}>📷</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <span className={styles.socialIcon}>▶</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative divider line */}
        <div className={styles.divider}></div>

        {/* Copyright and disclaimer */}
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Wonders of the World. Assignment for CSS Module.</p>
          <p className={styles.disclaimer}>
            All images and content used for educational purposes. Sources cited on respective pages.
          </p>
        </div>
      </div>

    </footer>
  );
}
