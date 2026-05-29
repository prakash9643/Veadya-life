import React from 'react';
import { Link } from 'react-router-dom';
import SeasonalEdit from '../components/home/SeasonalEdit';

const About = () => {
  return (
    <>
    <div className="about-page-root" style={{ background: '#ffffff', minHeight: '100vh' }}>
      
      {/* ── Hero Banner ── */}
      <section className="shop-hero">
        <div className="shop-hero-orb shop-hero-orb-1" />
        <div className="shop-hero-orb shop-hero-orb-2" />
        
        <div className="section-container shop-hero-inner">
          {/* Breadcrumb */}
          <div className="shop-hero-breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>About Us</span>
          </div>

          {/* Eyebrow */}
          <p className="shop-hero-eyebrow">
            <i className="fa-solid fa-circle-user" />
            Ancient Wisdom · Modern Form
          </p>

          {/* Heading */}
          <h1 className="shop-hero-title">
            About <em>Us</em>
          </h1>

          {/* Subtitle */}
          <p className="shop-hero-subtitle">
            A decade of bridging 5,000-year-old Ayurvedic wisdom with modern botanical science.
          </p>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section style={{ padding: '80px 0 96px', background: '#ffffff' }}>
        <div className="section-container">
          
          {/* Title & Subtitle */}
          <div className="section-header" style={{ marginBottom: '56px' }}>
            <p className="section-eyebrow">
              <i className="fa-solid fa-spa section-eyebrow-icon" />
              Our Core Mission <span className="eyebrow-dot">·</span> Pure Botanicals
            </p>
            <h2 className="section-title">Crafting a State of Pure Balance</h2>
            <div style={{
              width: '40px',
              height: '2px',
              background: 'var(--primary)',
              margin: '18px auto 24px',
              opacity: 0.6
            }} />
            <p style={{
              fontFamily: '"Jost", sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-mid)',
              lineHeight: '1.7',
              maxWidth: '680px',
              margin: '0 auto',
              letterSpacing: '0.01em',
              textAlign: 'center'
            }}>
              We believe that true wellness is a harmonious flow of mind, body, and consciousness. Veadya was born out of a desire to reconcile ancient Ayurvedic wisdom with the speed and rigor of contemporary life, crafting high-potency daily essentials that restore natural equilibrium.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="about-bento-grid">
            
            {/* Card 1: Tall left Card */}
            <div className="bento-card bento-card-tall" style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(11, 33, 32, 0.4) 0%, rgba(11, 33, 32, 0.8) 100%), url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '36px',
              borderRadius: '24px',
              color: '#ffffff',
              minHeight: '520px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '36px',
                left: '36px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                fontFamily: '"Jost", sans-serif',
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                ✦ EST. 2014
              </div>
              <div>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '28px',
                  fontWeight: 500,
                  marginBottom: '14px',
                  lineHeight: '1.2'
                }}>
                  Ancient Wisdom,<br />Modern Form
                </h3>
                <p style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.85)',
                  margin: 0
                }}>
                  Translating 5,000-year-old Ayurvedic knowledge into botanical formulas crafted for your contemporary life.
                </p>
              </div>
            </div>

            {/* Right side containers (2 columns x 2 rows bento cards) */}
            <div className="bento-right-flow">
              
              {/* Card 2: Top Middle Card (Teal Blue) */}
              <div className="bento-card" style={{
                background: '#417E8A',
                borderRadius: '24px',
                padding: '36px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--bloom-pale)',
                    fontSize: '16px'
                  }}>
                    <i className="fa-solid fa-leaf" />
                  </div>
                  <span style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '32px',
                    fontStyle: 'italic',
                    opacity: 0.35,
                    fontWeight: 300
                  }}>
                    01
                  </span>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <h3 style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    marginBottom: '10px'
                  }}>
                    Purity Above All
                  </h3>
                  <p style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.88)',
                    margin: 0
                  }}>
                    No synthetic binders, artificial colours, or chemical preservatives — ever. If it isn't from the earth, it has no place in our formulas.
                  </p>
                </div>
              </div>

              {/* Card 3: Top Right Card (Botanical Photo) */}
              <div className="bento-card" style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(11, 33, 32, 0.1) 0%, rgba(11, 33, 32, 0.6) 100%), url(https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '24px',
                padding: '36px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
                position: 'relative',
                minHeight: '260px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  color: 'var(--primary)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <i className="fa-solid fa-circle-check" /> Botanicals
                </div>
                <div>
                  <h3 style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    margin: 0,
                    textShadow: '0 2px 4px rgba(0,0,0,0.15)'
                  }}>
                    Sustainably Sourced
                  </h3>
                </div>
              </div>

              {/* Card 4: Bottom Middle Card (Lives Transformed) */}
              <div className="bento-card" style={{
                background: 'var(--bg-mist)',
                border: '1.5px solid rgba(1, 114, 110, 0.08)',
                borderRadius: '24px',
                padding: '36px',
                color: 'var(--text-dark)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)'
              }}>
                <div>
                  <span style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '44px',
                    fontWeight: 400,
                    color: 'var(--primary)',
                    lineHeight: '1'
                  }}>
                    10K+
                  </span>
                  <div style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '8.5px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-mid)',
                    marginTop: '6px'
                  }}>
                    LIVES TRANSFORMED
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <p style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '16.5px',
                    fontStyle: 'italic',
                    lineHeight: '1.5',
                    color: 'var(--text-mid)',
                    margin: 0
                  }}>
                    "Veadya gave me back mornings I had stopped looking forward to."
                  </p>
                </div>
              </div>

              {/* Card 5: Bottom Right Card (Dark Teal Transparency) */}
              <div className="bento-card" style={{
                background: 'var(--bg-deep)',
                borderRadius: '24px',
                padding: '36px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
              }}>
                <div>
                  <span style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '8.5px',
                    fontWeight: 700,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: 'var(--bloom-pale)',
                    display: 'block',
                    marginBottom: '10px'
                  }}>
                    OUR COMMITMENT
                  </span>
                  <h3 style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    marginBottom: '12px'
                  }}>
                    Radical Transparency
                  </h3>
                  <p style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.82)',
                    margin: 0
                  }}>
                    Full ingredient disclosure, third-party lab results on every product page, and honest communication about what Ayurveda can and cannot do.
                  </p>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <Link to="/shop" style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--bloom-pale)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'gap 0.2s ease'
                  }} className="bento-commitment-link">
                    Explore Collection <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Founder Story Section (Alt2 Immersive Mode) ── */}
      <section className="founder-alt2-section">
        {/* Ambient glows to keep consistency */}
        <div className="full-veadya-glow-1"></div>
        <div className="full-veadya-glow-2"></div>
        
        <div className="section-container founder-alt2-inner">
          
          {/* Text block */}
          <div className="founder-alt2-text">
            <p className="founder-alt2-eyebrow">
              <i className="fa-solid fa-spa"></i>
              Meet The Founder
            </p>

            <h2 className="founder-alt2-heading">
              Conscious Luxury<br />Ayurvedic Skincare
              <em>Ananya Verma</em>
            </h2>

            <p className="founder-alt2-para">
              My relationship with Ayurveda began in my grandmother’s kitchen, watching her blend freshly hand-picked herbs, rich nourishing oils, and sacred flower essences. That early experience taught me that true radiance is not chemically manufactured, but cultivated with purity and respect for nature's intelligence.
            </p>

            <div className="founder-alt2-divider">
              <div className="founder-alt2-divider-line"></div>
              <i className="fa-solid fa-leaf"></i>
              <div className="founder-alt2-divider-line"></div>
            </div>

            <p className="founder-alt2-para">
              Veadya was born to bridge these pristine self-care traditions with clinical extraction standards — creating elevated, high-performance daily formulas that effortlessly restore harmony to your contemporary lifestyle.
            </p>

            <div className="founder-alt2-pills">
              <span className="founder-alt2-pill"><i className="fa-solid fa-seedling"></i> Founder & Chief Formulator</span>
              <span className="founder-alt2-pill"><i className="fa-solid fa-shield-halved"></i> 100% Active Botanicals</span>
              <span className="founder-alt2-pill"><i className="fa-solid fa-flask-vial"></i> Clean Science</span>
            </div>

            <div className="founder-alt2-cta-row">
              <Link to="/our-story" className="founder-alt2-btn-primary">
                <i className="fa-solid fa-arrow-right" style={{ fontSize: '9px' }}></i> Learn Our Story
              </Link>
              <Link to="/shop" className="founder-alt2-btn-ghost">
                Shop Collection <i className="fa-solid fa-arrow-right" style={{ fontSize: '9px' }}></i>
              </Link>
            </div>
          </div>

          {/* Image block */}
          <div className="founder-alt2-img-side">
            <img 
              src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1000&q=80" 
              alt="Ayurvedic botanicals and spices" 
            />
            <div className="founder-alt2-badge">
              <div className="founder-alt2-badge-num">5K</div>
              <div className="founder-alt2-badge-label">Years of<br />Wisdom</div>
            </div>
          </div>

        </div>
      </section>





      {/* ── Brand Journey Timeline Section (Figma Exact Replication) ── */}
      <section style={{ padding: '96px 0 108px', background: '#ffffff', borderTop: '1px solid rgba(1, 114, 110, 0.06)' }}>
        <div className="section-container">
          
          {/* Header */}
          <div className="section-header" style={{ marginBottom: '64px' }}>
            <p className="section-eyebrow">
              <i className="fa-solid fa-clock-rotate-left section-eyebrow-icon" />
              Our Journey <span className="eyebrow-dot">·</span> A Decade of Craft
            </p>
            <h2 className="section-title">The Journey of Veadya</h2>
            <div style={{
              width: '40px',
              height: '2px',
              background: 'var(--primary)',
              margin: '18px auto 0',
              opacity: 0.6
            }} />
          </div>

          {/* Timeline Grid (5 Columns Unified Row Container matching Figma) */}
          <div className="timeline-row-container" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            background: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 12px 48px rgba(1, 114, 110, 0.04)',
            border: '1.5px solid rgba(1, 114, 110, 0.06)',
            marginBottom: '48px'
          }}>
            
            {/* Year 1: 2014 */}
            <div className="timeline-column" style={{
              display: 'flex',
              flexDirection: 'column',
              borderRight: '1px solid rgba(1, 114, 110, 0.06)'
            }}>
              {/* Image box with big year behind and color overlay */}
              <div style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80"
                  alt="Origins"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Custom Color Tint Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(1, 114, 110, 0.08)'
                }} />
                
                {/* Year Number overlay (opacity 0.08) */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '56px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  opacity: 0.12,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>14</div>
                
                {/* Floating Circle Icon */}
                <div className="timeline-floating-icon" style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '14px',
                  zIndex: 5,
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fa-solid fa-leaf" />
                </div>
              </div>
              
              {/* Content text */}
              <div style={{ padding: '24px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  2014 · Origins
                </span>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '19px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  The First Formula
                </h3>
                <p style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '12.5px',
                  color: 'var(--text-mid)',
                  lineHeight: '1.6',
                  fontWeight: 300,
                  margin: 0
                }}>
                  Founder Ananya Verma brews the first Ashwagandha extract in her Rishikesh kitchen, guided by her grandmother's handwritten notes.
                </p>
              </div>
            </div>

            {/* Year 2: 2016 */}
            <div className="timeline-column" style={{
              display: 'flex',
              flexDirection: 'column',
              borderRight: '1px solid rgba(1, 114, 110, 0.06)'
            }}>
              <div style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80"
                  alt="Growth"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.04)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '56px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  opacity: 0.12,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>16</div>
                <div className="timeline-floating-icon" style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '14px',
                  zIndex: 5,
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fa-solid fa-store" />
                </div>
              </div>
              <div style={{ padding: '24px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  2016 · Growth
                </span>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '19px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  First Retail Launch
                </h3>
                <p style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '12.5px',
                  color: 'var(--text-mid)',
                  lineHeight: '1.6',
                  fontWeight: 300,
                  margin: 0
                }}>
                  Veadya launches in three wellness stores across Delhi and Mumbai. The Immunity Drops sell out in the first week.
                </p>
              </div>
            </div>

            {/* Year 3: 2018 */}
            <div className="timeline-column" style={{
              display: 'flex',
              flexDirection: 'column',
              borderRight: '1px solid rgba(1, 114, 110, 0.06)'
            }}>
              <div style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80"
                  alt="Quality"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(13, 42, 41, 0.06)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '56px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  opacity: 0.12,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>18</div>
                <div className="timeline-floating-icon" style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '14px',
                  zIndex: 5,
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fa-solid fa-certificate" />
                </div>
              </div>
              <div style={{ padding: '24px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  2018 · Quality
                </span>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '19px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  GMP Certification
                </h3>
                <p style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '12.5px',
                  color: 'var(--text-mid)',
                  lineHeight: '1.6',
                  fontWeight: 300,
                  margin: 0
                }}>
                  After two years of rigorous audits, we achieve GMP certification — cementing our commitment to the highest global standards.
                </p>
              </div>
            </div>

            {/* Year 4: 2021 */}
            <div className="timeline-column" style={{
              display: 'flex',
              flexDirection: 'column',
              borderRight: '1px solid rgba(1, 114, 110, 0.06)'
            }}>
              <div style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
                  alt="Digital"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.04)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '56px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  opacity: 0.12,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>21</div>
                <div className="timeline-floating-icon" style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '14px',
                  zIndex: 5,
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fa-solid fa-globe" />
                </div>
              </div>
              <div style={{ padding: '24px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  2021 · Digital
                </span>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '19px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  Digital & Reach
                </h3>
                <p style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '12.5px',
                  color: 'var(--text-mid)',
                  lineHeight: '1.6',
                  fontWeight: 300,
                  margin: 0
                }}>
                  Our online platform launches, bringing Ayurvedic ritual to every corner of India — and the first international orders arrive.
                </p>
              </div>
            </div>

            {/* Year 5: 2024 */}
            <div className="timeline-column" style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80"
                  alt="Community"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(239, 219, 187, 0.15)'
                }} />
                
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '56px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  opacity: 0.12,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>24</div>
                <div className="timeline-floating-icon" style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '14px',
                  zIndex: 5,
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fa-solid fa-users" />
                </div>
              </div>
              <div style={{ padding: '24px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  2024 · Community
                </span>
                <h3 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '19px',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  10,000+ Seekers
                </h3>
                <p style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '12.5px',
                  color: 'var(--text-mid)',
                  lineHeight: '1.6',
                  fontWeight: 300,
                  margin: 0
                }}>
                  We celebrate a decade of botanical craft and 10,000+ lives transformed — with a landmark Dosha Assessment platform.
                </p>
              </div>
            </div>

          </div>

          {/* Connected Dots Tracker Line (Mathematically Centered 5-Column Grid Layout matching Figma) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            position: 'relative',
            marginTop: '48px'
          }} className="timeline-tracker-wrapper">
            {/* Horizontal connection line passing underneath */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              right: '10%',
              height: '1px',
              background: 'rgba(1, 114, 110, 0.15)',
              transform: 'translateY(-50%)',
              zIndex: 1
            }} />
            
            {/* 5 Centered indicator dots */}
            {[...Array(5)].map((_, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                <div
                  className="timeline-tracker-dot"
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    border: '3px solid #ffffff',
                    boxShadow: '0 0 0 2px rgba(1, 114, 110, 0.15)',
                    cursor: 'pointer',
                    transform: 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
      <SeasonalEdit />
    </>
  );
};

export default About;
