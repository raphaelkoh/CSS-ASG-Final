import React, { useState } from 'react';
import styles from './FAQAccordion.module.css';

const faqs = [
  { question: "How long did it take to build?", answer: "22 years (1632-1654)" },
  { question: "What material is it made of?", answer: "White marble from Rajasthan." },
  { question: "Who commissioned the Taj Mahal?", answer: "It was commissioned by Mughal Emperor Shah Jahan." },
  { question: "What is the significance of the Taj Mahal?", answer: "It is a symbol of love and a UNESCO World Heritage Site." },
  { question: "How many visitors does it attract annually?", answer: "It attracts about 7-8 million visitors every year." },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

export default FAQAccordion;