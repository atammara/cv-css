"use client";

import { useState } from 'react';
import Link from 'next/link';
import '../style/header.css';

const Navbar: React.FC = () => {
  // State to control the visibility of the navigation links
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">Ammara Rajput</div>
      
      {/* Hamburger Icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <nav className={`navLinks ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/about" onClick={closeMenu}>About Me</Link>
        <Link href="/portfolio" onClick={closeMenu}>Portfolio</Link>
      </nav>
     
      <Link href="/contact">
        <button className="ContactMe" onClick={closeMenu}>Contact Me</button>
      </Link>
    </header>
  );
};

export default Navbar;
