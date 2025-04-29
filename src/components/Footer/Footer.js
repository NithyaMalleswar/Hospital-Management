import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/services" className="nav-link">Services</Link></li>
            <li><Link to="/products" className="nav-link">Products</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <p>123 Medical Drive</p>
          <p>Health City, HC 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@medicarehospital.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} MediCare Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;