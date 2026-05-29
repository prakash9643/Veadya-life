import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, toggleMenu, toggleSearch } from '../../store/slices/uiSlice';
import { logout } from '../../store/slices/authSlice';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const categories = [
    { 
      name: "Juice", 
      img: "https://images.unsplash.com/photo-1610970881699-44a5587caa90?auto=format&fit=crop&w=300&q=80" 
    },
    { 
      name: "Capsule", 
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=300&q=80" 
    },
    { 
      name: "Drop", 
      img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=300&q=80" 
    }
  ];

  return (
    <>
      <div className="announcement-bar overflow-hidden">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item"><i className="fa-solid fa-truck-fast marquee-icon"></i>FREE SHIPPING ON RITUAL SETS OVER ₹999</span>
              <span className="marquee-item"><i className="fa-solid fa-leaf marquee-icon"></i>100% NATURAL · AYURVEDIC FORMULAS</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <button 
              className="icon-btn" 
              onClick={() => dispatch(toggleMenu())}
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>


          <Link to="/" className="site-logo flex items-center">
            <img src="/logo/bgremovepng.png" alt="Veadya" style={{ height: '54px', width: 'auto', display: 'block' }} />
          </Link>
          
          <nav className="main-nav hidden lg:block">
            <ul className="nav-list">
              <li>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'nav-active' : ''}`}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'nav-active' : ''}`}>About</Link>
              </li>
              <li 
                onMouseEnter={() => setIsShopHovered(true)}
                onMouseLeave={() => setIsShopHovered(false)}
                className="relative"
              >
                <Link to="/shop" className={`nav-link flex items-center gap-1 ${location.pathname === '/shop' ? 'nav-active' : ''}`}>
                  Shop <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isShopHovered ? 'rotate-180' : ''}`}></i>
                </Link>
                
                {isShopHovered && (
                  <div className="absolute top-full -left-28 pt-4 z-[300] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-6 w-[420px]">
                      <div className="space-y-6">
                        {/* Header label */}
                        <div className="text-center">
                          <p className="text-[16px] font-serif text-text-dark mb-1">Shop by Category</p>
                          <p className="text-[11px] text-gray-400">Premium Ayurvedic Formats</p>
                        </div>
                        {/* Category cards grid */}
                        <div className="grid grid-cols-3 gap-4">
                          {categories.map((cat) => (
                            <Link
                              key={cat.name}
                              to={`/shop?category=${cat.name}`}
                              className="group flex flex-col items-center text-center gap-2 p-2 hover:bg-[#e8f0ed] rounded-xl transition-all"
                              onClick={() => setIsShopHovered(false)}
                            >
                              <div className="w-14 h-14 rounded-full overflow-hidden border border-[#e2ebe7] group-hover:border-primary transition-all flex items-center justify-center bg-gray-50">
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                              </div>
                              <span className="text-[11px] font-semibold tracking-wider text-text-dark group-hover:text-primary transition-colors uppercase">
                                {cat.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                        {/* Footer CTA */}
                        <Link
                          to="/shop"
                          className="w-full mt-2 py-3 bg-gray-50 text-primary text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-bg-mist transition-all border border-gray-100 flex items-center justify-center gap-2"
                          onClick={() => setIsShopHovered(false)}
                        >
                          View All Shop <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'nav-active' : ''}`}>Contact Us</Link>
              </li>
            </ul>
          </nav>

          <div className="header-icons">
            {/* Search Trigger */}
            <button 
              className="icon-btn header-search-btn"
              onClick={() => dispatch(toggleSearch())}
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* User Dropdown */}
            <div 
              className="relative header-user-dropdown"
              onMouseEnter={() => setIsUserDropdownOpen(true)}
              onMouseLeave={() => setIsUserDropdownOpen(false)}
            >
              <button className="icon-btn" aria-label="Account">
                {isAuthenticated && user?.image ? (
                  <img src={user.image} alt={user.name} className="w-6 h-6 rounded-full object-cover border border-primary/20 shadow-sm" />
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
              </button>

              {isUserDropdownOpen && (
                <div className="absolute top-full right-0 pt-4 z-[300] animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-6 min-w-[240px]">
                    {isAuthenticated ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-50">
                          <img src={user.image || '/images/user-avatar.png'} className="w-10 h-10 rounded-full" alt="" />
                          <div>
                            <p className="text-sm font-semibold text-text-dark">{user.name}</p>
                            <p className="text-[10px] text-gray-400 truncate w-32">{user.email}</p>
                          </div>
                        </div>
                        <ul className="space-y-1">
                          <li><Link to="/profile" className="text-sm text-text-dark hover:text-primary block py-2">Profile Settings</Link></li>
                          <li><Link to="/orders" className="text-sm text-text-dark hover:text-primary block py-2">My Orders</Link></li>
                          <li><Link to="/wishlist" className="text-sm text-text-dark hover:text-primary block py-2">Wishlist</Link></li>
                        </ul>
                        <button 
                          onClick={() => dispatch(logout())}
                          className="w-full mt-4 py-3 bg-gray-50 text-primary text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-bg-mist transition-all border border-gray-100"
                        >
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="text-center">
                          <p className="text-lg font-serif text-text-dark mb-2">Welcome Back</p>
                          <p className="text-xs text-gray-400">Access your personalized ritual dashboard</p>
                        </div>
                        <div className="space-y-3">
                          <Link to="/login" className="btn-primary w-full justify-center text-center">SIGN IN</Link>
                          <Link to="/register" className="flex items-center justify-center w-full py-3 text-[10px] font-bold text-gray-400 hover:text-primary tracking-widest transition-all">
                            CREATE ACCOUNT
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Trigger */}
            <button 
              className="icon-btn cart-btn" 
              aria-label="Cart"
              onClick={() => dispatch(toggleCart())}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
