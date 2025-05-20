import React from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className="home" id="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MediCare Hospital-management</h1>
          <p className="hero-description">
            At MediCare Hospital, we are committed to providing comprehensive and compassionate healthcare services. 
            With expert doctors, cutting-edge technology, and patient-centered care, your health is in safe hands.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
