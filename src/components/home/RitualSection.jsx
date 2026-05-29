import React, { useEffect, useRef } from 'react';

const RitualSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current.querySelectorAll(".ritual-step, .ritual-cta");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ritual-section" ref={sectionRef}>
      <div className="ritual-grain"></div>

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01726E" />
            <stop offset="100%" stopColor="#338E8B" />
          </linearGradient>
        </defs>
      </svg>

      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">
            <i className="fa-solid fa-spa section-eyebrow-icon"></i>
            How It Works
            <span className="eyebrow-dot">&#9679;</span>
            The Ritual Path
          </p>
          <h2 className="section-title">
            Simple Rituals, <em>Profound Change</em>
          </h2>
          <p className="section-desc">
            Three effortless steps to align your body with ancient botanical
            wisdom and unlock lasting vitality.
          </p>
        </div>

        <div className="ritual-steps" id="ritualSteps">
          <div className="ritual-step">
            <div className="ritual-step-ring">
              <svg viewBox="0 0 100 100">
                <circle className="ritual-step-ring-track" cx="50" cy="50" r="40" />
                <circle className="ritual-step-ring-fill" cx="50" cy="50" r="40" />
              </svg>
              <div className="ritual-step-ring-inner">
                <i className="fa-solid fa-compass"></i>
              </div>
              <span className="ritual-step-num">01</span>
            </div>
            <span className="ritual-step-label">Discover</span>
            <h3 className="ritual-step-title">Choose Your Path</h3>
            <p className="ritual-step-desc">
              Take our Dosha Quiz to find the perfect botanical blend crafted
              precisely for your unique constitution and lifestyle.
            </p>
            <span className="ritual-step-tag">
              <i className="fa-solid fa-circle-check" style={{ fontSize: '8px' }}></i>
              Personalised for You
            </span>
          </div>

          <div className="ritual-connector">
            <div className="ritual-connector-line"></div>
            <i className="fa-solid fa-chevron-right ritual-connector-icon"></i>
            <div className="ritual-connector-line"></div>
          </div>

          <div className="ritual-step">
            <div className="ritual-step-ring">
              <svg viewBox="0 0 100 100">
                <circle className="ritual-step-ring-track" cx="50" cy="50" r="40" />
                <circle className="ritual-step-ring-fill" cx="50" cy="50" r="40" />
              </svg>
              <div className="ritual-step-ring-inner">
                <i className="fa-solid fa-sun"></i>
              </div>
              <span className="ritual-step-num">02</span>
            </div>
            <span className="ritual-step-label">Integrate</span>
            <h3 className="ritual-step-title">Daily Routine</h3>
            <p className="ritual-step-desc">
              Weave your ritual into your morning or evening flow. Consistent,
              intentional use unlocks cumulative, compounding benefits.
            </p>
            <span className="ritual-step-tag">
              <i className="fa-solid fa-circle-check" style={{ fontSize: '8px' }}></i>
              Morning or Evening
            </span>
          </div>

          <div className="ritual-connector">
            <div className="ritual-connector-line"></div>
            <i className="fa-solid fa-chevron-right ritual-connector-icon"></i>
            <div className="ritual-connector-line"></div>
          </div>

          <div className="ritual-step">
            <div className="ritual-step-ring">
              <svg viewBox="0 0 100 100">
                <circle className="ritual-step-ring-track" cx="50" cy="50" r="40" />
                <circle className="ritual-step-ring-fill" cx="50" cy="50" r="40" />
              </svg>
              <div className="ritual-step-ring-inner">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <span className="ritual-step-num">03</span>
            </div>
            <span className="ritual-step-label">Transform</span>
            <h3 className="ritual-step-title">Experience Results</h3>
            <p className="ritual-step-desc">
              Notice the subtle shift in energy, sleep, and mental clarity. Most
              feel the difference within 14 days of regular practice.
            </p>
            <span className="ritual-step-tag">
              <i className="fa-solid fa-circle-check" style={{ fontSize: '8px' }}></i>
              Results in 14 Days
            </span>
          </div>
        </div>

        <div className="ritual-cta" id="ritualCta">
          <div className="ritual-cta-blob1"></div>
          <div className="ritual-cta-blob2"></div>
          <span className="ritual-cta-badge">
            <i className="fa-solid fa-leaf" style={{ fontSize: '8px', marginRight: '6px' }}></i>Free Dosha Assessment
          </span>
          <div className="ritual-cta-inner">
            <div className="ritual-cta-left">
              <p className="ritual-cta-eyebrow">Begin Your Journey</p>
              <h3 className="ritual-cta-title">
                Ready to start your <em>daily ritual?</em>
              </h3>
              <p className="ritual-cta-desc">
                Join thousands who have already discovered the transformative
                power of Ayurvedic botanical wisdom.
              </p>
            </div>
            <div className="ritual-cta-right">
              <a href="#" className="ritual-btn-primary">Take the Dosha Quiz <i className="fa-solid fa-arrow-right"></i></a>
              <a href="#" className="ritual-btn-ghost">Explore Products <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

        <div className="ritual-trust">
          <div className="ritual-trust-item">
            <i className="fa-solid fa-seedling"></i> 100% Natural Botanicals
          </div>
          <div className="ritual-trust-sep"></div>
          <div className="ritual-trust-item">
            <i className="fa-solid fa-shield-halved"></i> GMP Certified
          </div>
          <div className="ritual-trust-sep"></div>
          <div className="ritual-trust-item">
            <i className="fa-solid fa-flask-vial"></i> No Synthetic Additives
          </div>
          <div className="ritual-trust-sep"></div>
          <div className="ritual-trust-item">
            <i className="fa-solid fa-users"></i> 10,000+ Happy Customers
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualSection;
