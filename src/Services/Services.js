import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="features-section" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">🏥</div>
          <h3 className="feature-title">Expert Doctors</h3>
          <p className="feature-description">
            Our team consists of highly qualified medical professionals with years of experience.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⏱️</div>
          <h3 className="feature-title">24/7 Service</h3>
          <p className="feature-description">
            Round-the-clock care to ensure you receive help whenever you need it.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔬</div>
          <h3 className="feature-title">Modern Equipment</h3>
          <p className="feature-description">
            Equipped with the latest medical technology for accurate diagnosis.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💊</div>
          <h3 className="feature-title">Pharmacy Support</h3>
          <p className="feature-description">
            In-house pharmacy ensures fast access to prescribed medications.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🧑‍⚕️</div>
          <h3 className="feature-title">Personalized Care</h3>
          <p className="feature-description">
            Each patient receives care tailored to their specific condition.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚑</div>
          <h3 className="feature-title">Ambulance Service</h3>
          <p className="feature-description">
            Emergency ambulance support with trained staff and GPS tracking.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🩺</div>
          <h3 className="feature-title">Health Checkups</h3>
          <p className="feature-description">
            Regular health screenings and preventive care programs.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏨</div>
          <h3 className="feature-title">Clean Facilities</h3>
          <p className="feature-description">
            Our premises are sanitized and well-maintained for your safety.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📞</div>
          <h3 className="feature-title">Telemedicine</h3>
          <p className="feature-description">
            Get consultations from our doctors via phone or video calls.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🧠</div>
          <h3 className="feature-title">Mental Health Support</h3>
          <p className="feature-description">
            Professional counseling and therapy sessions available on request.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🧪</div>
          <h3 className="feature-title">Advanced Lab</h3>
          <p className="feature-description">
            Fast and reliable lab results with advanced testing equipment.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h3 className="feature-title">Insurance Assistance</h3>
          <p className="feature-description">
            We help you navigate insurance paperwork and coverage with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
