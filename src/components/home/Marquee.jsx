import React from 'react';

const marqueeItems = [
  'GMP Certified',
  '100% Organic',
  'Vegan & Cruelty Free',
  'No Added Sugar',
  'Lab Tested',
  'Eco-Friendly Packaging',
  'Authentic Ayurveda',
  'Gluten Free'
];

const Marquee = () => {
  // Duplicate items twice to ensure infinite seamless scrolling
  const doubleItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="brand-marquee-wrapper">
      <div className="brand-marquee-content">
        {doubleItems.map((item, idx) => (
          <div key={idx} className="brand-marquee-item">
            <span className="brand-marquee-text">{item}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-marquee-icon" style={{ fill: 'var(--bloom-pale)', opacity: 0.85 }}>
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
