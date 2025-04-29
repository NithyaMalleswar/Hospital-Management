import React from "react";
import "./Products.css";

const products = [
  {
    icon: "🩺",
    title: "Stethoscope",
    description: "High-quality stethoscopes for accurate auscultation in clinical diagnosis.",
  },
  {
    icon: "💉",
    title: "Syringes",
    description: "Sterile and disposable syringes available in various sizes.",
  },
  {
    icon: "🛏️",
    title: "Hospital Beds",
    description: "Adjustable hospital beds with ergonomic features for patient comfort.",
  },
  {
    icon: "🩹",
    title: "First Aid Kits",
    description: "Comprehensive kits for emergency response and wound care.",
  },
  {
    icon: "🧪",
    title: "Test Tubes",
    description: "Durable glass and plastic test tubes for laboratory use.",
  },
  {
    icon: "🧬",
    title: "Diagnostic Kits",
    description: "Advanced kits for quick and precise medical diagnostics.",
  },
  {
    icon: "🧯",
    title: "Medical Oxygen",
    description: "Portable and central oxygen systems with safety valves.",
  },
  {
    icon: "🩸",
    title: "Blood Bags",
    description: "Reliable and leak-proof blood bags for safe transfusions.",
  },
  {
    icon: "🔋",
    title: "ECG Machine",
    description: "Portable ECG machines with real-time monitoring and analysis.",
  },
  {
    icon: "🌡️",
    title: "Thermometers",
    description: "Digital and contactless thermometers for precise readings.",
  },
  {
    icon: "🦽",
    title: "Wheelchairs",
    description: "Comfortable and foldable wheelchairs with ergonomic design.",
  },
  {
    icon: "🧻",
    title: "Sanitary Supplies",
    description: "Essential hygiene products including tissues and gloves.",
  },
];

const Products = () => {
  return (
    <section className="products-section" id ="products">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-icon">{product.icon}</div>
            <h3 className="product-name">{product.title}</h3>
            <p className="product-desc">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
