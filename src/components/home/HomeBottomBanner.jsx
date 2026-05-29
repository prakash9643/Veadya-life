import React from 'react';

const HomeBottomBanner = () => {
  return (
    <section className="home-bottom-banner-section py-8 md:py-12">
      <div className="section-container">
        <div className="w-full rounded-[16px] overflow-hidden shadow-xs">
          <img 
            src="/homebottombanner.png" 
            alt="Veadya Promotional Banner" 
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBottomBanner;
