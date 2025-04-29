import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h1>About MediCare Hospital</h1>
        <p>Empowering Health, Transforming Lives</p>
      </div>

      <div className="about-content">
        <p>
          <strong>HealthFirst Hospital</strong> has been a beacon of quality healthcare since its inception in 1995.
          We are a multi-specialty institution dedicated to offering world-class medical services with compassion and precision.
        </p>

        <p>
          Our state-of-the-art infrastructure includes modern operation theatres, fully equipped ICUs, diagnostic laboratories, and advanced imaging systems.
          With a team of over 500 skilled healthcare professionals, we ensure personalized care for every patient.
        </p>

        <p>
          We specialize in areas such as <strong>cardiology, orthopedics, neurology, nephrology, oncology</strong>, and <strong>maternity care</strong>.
          We also offer wellness programs, rehabilitation services, and 24/7 emergency and trauma care.
        </p>

        <p>
          Our commitment extends beyond treatment — we believe in preventive care, patient education, and continuous support for long-term wellness.
          Through community outreach and awareness drives, we bring healthcare closer to every home.
        </p>

        <p>
          At HealthFirst Hospital, our mission is simple — <strong>to treat every patient with dignity, empathy, and excellence.</strong>
        </p>
      </div>
    </section>
  );
};

export default About;
