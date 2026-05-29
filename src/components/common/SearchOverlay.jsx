import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSearch } from '../../store/slices/uiSlice';
import { Link } from 'react-router-dom';

const SearchOverlay = () => {
  const dispatch = useDispatch();
  const { isSearchOpen } = useSelector((state) => state.ui);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSearchOpen]);

  const popularSearches = ['Stress Relief Oil', 'Ayurvedic Skin Care', 'Memory Booster', 'Daily Ritual Set'];
  const quickCategories = ['Best Sellers', 'New Arrivals', 'Ritual Kits', 'Wellness Tips'];

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        onClick={() => dispatch(toggleSearch())}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(11, 33, 32, 0.45)',
          backdropFilter: 'blur(6px)',
          zIndex: 999,
          opacity: isSearchOpen ? 1 : 0,
          pointerEvents: isSearchOpen ? 'auto' : 'none',
          transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* ── Search Panel (Top-to-Bottom Animated) ── */}
      <div
        className="search-overlay-panel"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '52vh',
          background: '#ffffff',
          zIndex: 1000,
          boxShadow: '0 12px 48px rgba(1, 114, 110, 0.16)',
          borderBottom: '3px solid var(--primary)',
          transform: isSearchOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isSearchOpen ? 1 : 0,
          pointerEvents: isSearchOpen ? 'auto' : 'none',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        <div className="section-container" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px 0' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
              onClick={() => dispatch(toggleSearch())}
            >
              <img src="/logo/bgremovepng.png" alt="Veadya" style={{ height: '32px', width: 'auto', display: 'block' }} />
            </Link>
            <button
              onClick={() => dispatch(toggleSearch())}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1.5px solid rgba(1, 114, 110, 0.12)',
                background: '#fff',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              className="search-close-btn"
            >
              <i className="fa-solid fa-xmark" style={{ fontSize: '14px' }} />
            </button>
          </div>

          {/* Search Input */}
          <div style={{ maxWidth: '720px', margin: '0 auto', width: '100%', textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ position: 'relative' }}>
              <input
                ref={inputRef}
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid rgba(1, 114, 110, 0.15)',
                  padding: '12px 0 16px',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '28px',
                  fontStyle: 'italic',
                  color: 'var(--text-dark)',
                  textAlign: 'center',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                className="search-main-input"
              />
            </div>
            <p style={{
              fontFamily: '"Jost", sans-serif',
              fontSize: '9.5px',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--text-mid)',
              marginTop: '10px',
              opacity: 0.7
            }}>
              Type to search our botanical apothecary
            </p>
          </div>

          {/* Grid Suggestions */}
          <div style={{
            maxWidth: '820px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '36px',
            flexGrow: 1,
            alignItems: 'start'
          }} className="search-grid-layout">
            
            {/* Trending Searches */}
            <div>
              <h3 style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--primary)',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                Trending Rituals <span style={{ flex: 1, height: '1px', background: 'rgba(1, 114, 110, 0.1)' }} />
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '17px',
                      color: 'var(--text-dark)',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 0',
                      transition: 'all 0.2s ease',
                    }}
                    className="search-trending-item"
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(1, 114, 110, 0.3)' }} />
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Explore */}
            <div>
              <h3 style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--primary)',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                Quick Explore <span style={{ flex: 1, height: '1px', background: 'rgba(1, 114, 110, 0.1)' }} />
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {quickCategories.map((item) => (
                  <button
                    key={item}
                    style={{
                      fontFamily: '"Jost", sans-serif',
                      fontSize: '9.5px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-mid)',
                      background: 'var(--bg-mist)',
                      border: '1.5px solid rgba(1, 114, 110, 0.1)',
                      borderRadius: '20px',
                      padding: '7px 14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    className="search-explore-pill"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default SearchOverlay;
