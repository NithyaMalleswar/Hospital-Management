import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // hide success message after 3 seconds
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>📍 Our Hospital Address</h3>
          <p>123 Medical Drive Health City, HC 12345</p>
          <h3>📞 Phone</h3>
          <p>(123) 456-7890</p>
          <h3>📧 Email</h3>
          <p>info@medicarehospital.com</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Describe your symptoms or reason for visit"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit Appointment</button>
          {submitted && (
            <p className="success-message">✅ Successfully booked your appointment!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
