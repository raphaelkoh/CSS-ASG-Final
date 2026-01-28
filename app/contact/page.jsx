/**
 * Contact Page
 * Contact form and information
 */

'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../nav/Navbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    interests: [],
    message: '',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target;
      if (name === 'newsletter') {
        setFormData(prev => ({ ...prev, newsletter: checkbox.checked }));
      } else if (name === 'interests') {
        setFormData(prev => ({
          ...prev,
          interests: checkbox.checked
            ? [...prev.interests, value]
            : prev.interests.filter(i => i !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          interests: [],
          message: '',
          newsletter: false
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const wonders = [
    'Great Wall of China',
    'Petra',
    'Christ the Redeemer',
    'Machu Picchu',
    'Chichen Itza',
    'Colosseum',
    'Taj Mahal'
  ];

  return (
    <div className={styles.contactPage}>
      <Navbar></Navbar>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1>Contact Us</h1>
          <div className={styles.headerLine}></div>
          <p>
            Have questions about our tours? Want to plan a custom itinerary?
            We're here to help make your dream journey a reality.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <div className="decorative-line" style={{ margin: '1rem 0' }}></div>
              
              <div className={styles.infoSection}>
                <h3>📍 Address</h3>
                <p>
                  123 Wonder Street<br />
                  Heritage District<br />
                  Singapore 123456
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>📞 Phone</h3>
                <p>
                  +65 1234 5678<br />
                  <span className={styles.subtext}>(Mon-Fri: 9AM-6PM SGT)</span>
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>✉️ Email</h3>
                <p>
                  info@wondersoftheworld.com<br />
                  <span className={styles.subtext}>We respond within 24 hours</span>
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3>🌐 Social Media</h3>
                <div className={styles.socialLinks}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
              </div>

              <div className={styles.hoursBox}>
                <h3>Business Hours</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Monday - Friday</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>10:00 AM - 4:00 PM</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>Send Us a Message</h2>
              <div className="decorative-line" style={{ margin: '1rem 0' }}></div>

              {formStatus === 'success' && (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✓</span>
                  <p>Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+65 1234 5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="tour-inquiry">Tour Inquiry</option>
                    <option value="booking">Booking Assistance</option>
                    <option value="custom-tour">Custom Tour Request</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Interested Destinations</label>
                  <div className={styles.checkboxGrid}>
                    {wonders.map((wonder) => (
                      <label key={wonder} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="interests"
                          value={wonder}
                          checked={formData.interests.includes(wonder)}
                          onChange={handleChange}
                        />
                        <span>{wonder}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your travel plans, questions, or special requests..."
                    rows={6}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                    />
                    <span>Subscribe to our newsletter for travel tips and special offers</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className={`btn ${styles.submitButton}`}
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Decorative) */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className="text-center">Visit Our Office</h2>
          <div className="decorative-line"></div>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapContent}>
              <span className={styles.mapIcon}>🗺️</span>
              <h3>Our Location</h3>
              <p>123 Wonder Street, Heritage District<br />Singapore 123456</p>
              <p className={styles.mapNote}>
                <em>Map integration available in production version</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
