import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/slices/uiSlice';
import { logout } from '../../store/slices/authSlice';
import { Link, useLocation } from 'react-router-dom';

const shopCategories = [
  { label: 'Juice',   path: '/shop?category=Juice',   icon: 'fa-solid fa-droplet' },
  { label: 'Capsule', path: '/shop?category=Capsule', icon: 'fa-solid fa-capsules' },
  { label: 'Drop',    path: '/shop?category=Drop',    icon: 'fa-solid fa-flask-vial' },
];

const navLinks = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Our Story',  path: '/story' },
  { label: 'Contact Us', path: '/contact' },
];

const MobileMenu = () => {
  const dispatch   = useDispatch();
  const location   = useLocation();
  const { isMenuOpen }         = useSelector((state) => state.ui);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [shopOpen, setShopOpen] = useState(false);

  if (!isMenuOpen) return null;

  const close = () => dispatch(toggleMenu());
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed inset-0 z-[700] lg:hidden animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} />

      {/* Drawer */}
      <div className="absolute left-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-500">

        {/* ── Header ── */}
        <div className="px-6 py-5 flex justify-between items-center"
          style={{ background: 'linear-gradient(135deg,#f5f9f8 0%,#eaf3f2 100%)', borderBottom: '1px solid rgba(1,114,110,0.1)' }}>
          <Link to="/" className="flex items-center" onClick={close}>
            <img src="/logo/bgremovepng.png" alt="Veadya" style={{ height: '30px', width: 'auto', display: 'block' }} />
          </Link>
          <button onClick={close}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all hover:bg-primary/10"
            style={{ border: '1px solid rgba(1,114,110,0.15)', color: 'var(--primary)' }}>
            <i className="fa-solid fa-xmark" style={{ fontSize: '14px' }}></i>
          </button>
        </div>

        {/* ── Nav ── */}
        <div className="flex-grow overflow-y-auto">
          <nav className="px-5 pt-6 pb-2">

            {/* Plain nav links — no arrow */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={close}
                className="flex items-center py-4 transition-all"
                style={{
                  borderBottom: '1px solid rgba(46,110,126,0.07)',
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '15px',
                  fontWeight: isActive(link.path) ? 600 : 400,
                  letterSpacing: '0.04em',
                  color: isActive(link.path) ? 'var(--primary)' : 'var(--text-dark)',
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* ── Shop — expandable with arrow ── */}
            <div>
              <button
                onClick={() => setShopOpen((v) => !v)}
                className="w-full flex items-center justify-between py-4 transition-all"
                style={{
                  borderBottom: shopOpen ? 'none' : '1px solid rgba(46,110,126,0.07)',
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '15px',
                  fontWeight: shopOpen ? 600 : 400,
                  letterSpacing: '0.04em',
                  color: shopOpen ? 'var(--primary)' : 'var(--text-dark)',
                  background: 'none',
                  border: shopOpen ? 'none' : undefined,
                }}
              >
                <span>Shop</span>
                <span
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: shopOpen ? 'var(--primary)' : 'rgba(1,114,110,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease',
                    flexShrink: 0,
                  }}>
                  <i
                    className="fa-solid fa-chevron-right"
                    style={{
                      fontSize: '10px',
                      color: shopOpen ? '#fff' : 'var(--primary)',
                      transform: shopOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  ></i>
                </span>
              </button>

              <div
                style={{
                  maxHeight: shopOpen ? '200px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                  borderBottom: shopOpen ? '1px solid rgba(46,110,126,0.07)' : 'none',
                }}
              >
                <div className="pl-3 pr-1 pb-3 pt-1">
                  {shopCategories.map((cat, idx) => (
                    <Link
                      key={cat.label}
                      to={cat.path}
                      onClick={close}
                      className="flex items-center gap-3 py-3 px-3 rounded-xl transition-all group"
                      style={{
                        marginBottom: idx < shopCategories.length - 1 ? '2px' : 0,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(1,114,110,0.06)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <span
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'rgba(1,114,110,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                        <i className={cat.icon} style={{ fontSize: '11px', color: 'var(--primary)' }}></i>
                      </span>
                      <span
                        style={{
                          fontFamily: '"Jost", sans-serif',
                          fontSize: '13.5px',
                          fontWeight: 400,
                          color: 'var(--text-dark)',
                          letterSpacing: '0.02em',
                        }}>
                        {cat.label}
                      </span>
                      <i
                        className="fa-solid fa-arrow-right ml-auto"
                        style={{ fontSize: '9px', color: 'rgba(1,114,110,0.35)' }}
                      ></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </nav>

          {/* ── Account section ── */}
          <div className="px-5 mt-8 pb-6">
            <p className="mb-4"
              style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(42,75,74,0.45)', fontFamily: '"Jost", sans-serif', fontWeight: 500 }}>
              Account &amp; Rituals
            </p>

            {isAuthenticated ? (
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: 'linear-gradient(135deg,#f5f9f8,#eaf3f2)', border: '1px solid rgba(1,114,110,0.08)' }}>
                  <img src={user.image || '/images/user-avatar.png'} alt="" className="w-11 h-11 rounded-full border-2 border-white shadow-sm" />
                  <div>
                    <p className="font-semibold text-text-dark text-sm">{user.name}</p>
                    <p style={{ fontSize: '10px', color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Premium Member</p>
                  </div>
                </div>
                <Link to="/orders" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all text-sm text-text-dark" onClick={close}>
                  <i className="fa-solid fa-box-open" style={{ color: 'var(--primary)', opacity: 0.5, fontSize: '13px' }}></i> My Orders
                </Link>
                <Link to="/profile" className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all text-sm text-text-dark" onClick={close}>
                  <i className="fa-solid fa-user-gear" style={{ color: 'var(--primary)', opacity: 0.5, fontSize: '13px' }}></i> Settings
                </Link>
                <button
                  onClick={() => { dispatch(logout()); close(); }}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-red-50 transition-all text-sm text-red-500 w-full text-left">
                  <i className="fa-solid fa-arrow-right-from-bracket text-[13px]"></i> Sign Out
                </button>
              </div>
            ) : (
              <Link to="/login" onClick={close}
                className="flex items-center gap-4 py-4 px-5 rounded-2xl transition-all group"
                style={{ background: 'rgba(1,114,110,0.05)', border: '1px solid rgba(1,114,110,0.1)' }}>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
                  style={{ color: 'var(--primary)', border: '1px solid rgba(1,114,110,0.12)' }}>
                  <i className="fa-regular fa-user text-sm"></i>
                </div>
                <span className="text-text-dark font-medium text-sm">Sign In / Register</span>
              </Link>
            )}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="px-6 py-5" style={{ borderTop: '1px solid rgba(46,110,126,0.07)' }}>
          <p className="text-center font-sans"
            style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(42,75,74,0.4)' }}>
            Pure · Potent · Ayurvedic
          </p>
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;
