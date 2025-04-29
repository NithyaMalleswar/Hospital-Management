import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close menu after clicking link
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <h1 className="hospital-name">MediCare Hospital</h1>
        </div>

        {/* Toggle Button: shows ☰ or ✕ based on menu state */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</Link></li>
            <li><Link to="/services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</Link></li>
            <li><Link to="/products" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
