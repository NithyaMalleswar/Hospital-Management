import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-logo-section">
          <h3 className="footer-hospital-name">MediCare Hospital</h3>
          <p className="footer-slogan">Quality Care for Everyone</p>
          <p className="footer-description">
            We are committed to providing exceptional healthcare services with compassion and expertise.
            Our team of dedicated professionals strives to improve the health and wellbeing of the communities we serve.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-nav">
            <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
            <li><a href="#products" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <p>123 Medical Drive</p>
          <p>Health City, HC 12345</p>
          <p><a href="tel:8649754397" className="nav-link">Phone: 864-975-4397</a></p>
          <p><a href="mailto:info@medicarehospital.com" className="nav-link">Email: info@medicarehospital.com</a></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} MediCare Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;