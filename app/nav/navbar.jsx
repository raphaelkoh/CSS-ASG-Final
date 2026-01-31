/**
 * Navbar Component
 * Main navigation bar with dropdown menu for all wonders
 * Includes click-outside detection to close dropdown
 */

"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  // Track if dropdown is open or closed
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // List of all wonders for the dropdown menu
  const wonders = [
    { name: 'Great Wall of China', path: '/great-wall' },
    { name: 'Machu Picchu', path: '/machu-picchu' },
    { name: 'Taj Mahal', path: '/taj-mahal' },
    { name: 'Petra', path: '/petra' },
    { name: 'The Colosseum', path: '/the-colosseum' },
    { name: 'Chichen Itza', path: '/chichen-itza' },
    { name: 'Christ the Redeemer', path: '/christ-the-redeemer' }
  ];

  // Close dropdown when clicking outside - improves UX
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        SEVEN WONDERS
      </Link>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>Home</Link>

        {/* Dropdown menu for all seven wonders */}
        <div className={styles.dropdown} ref={dropdownRef}>
          <button 
            className={styles.dropdownButton} 
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Wonders {dropdownOpen ? "▴" : "▾"}
          </button>

          {/* Show dropdown items when open */}
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              {wonders.map((wonder) => (
                <Link 
                  key={wonder.path} 
                  href={wonder.path} 
                  className={styles.dropdownItem}
                  onClick={() => setDropdownOpen(false)} 
                >
                  {wonder.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/tours" className={styles.link}>Tours</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}
