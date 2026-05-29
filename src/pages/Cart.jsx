import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import { shopifyService } from '../services/shopify';

const CartPage = () => {
  const { items: cartItems } = useSelector((state) => state.cart);
  const subtotal = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 150;
  const total    = subtotal + shipping;

  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');
  const navigate = useNavigate();

  const handleCheckoutClick = async (e) => {
    // If shopify headless is configured, redirect to hosted shopify checkout
    if (shopifyService.isClientConfigured()) {
      e.preventDefault();
      setLoadingCheckout(true);
      setCheckoutError('');
      
      try {
        const checkoutUrl = await shopifyService.createCheckout(cartItems);
        if (checkoutUrl) {
          window.location.href = checkoutUrl; // redirect directly to shopify checkout
        } else {
          setCheckoutError("Failed to initiate checkout via Shopify. Reverting to local fallback...");
          setTimeout(() => {
            setLoadingCheckout(false);
            navigate('/checkout'); // fallback
          }, 1500);
        }
      } catch (err) {
        setCheckoutError("Shopify connection error. Redirecting to standard checkout...");
        setTimeout(() => {
          setLoadingCheckout(false);
          navigate('/checkout'); // fallback
        }, 1500);
      }
    }
  };

  /* ── Loading State ── */
  if (loadingCheckout) {
    return (
      <div className="cart-page-root" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '160px 24px', textAlign: 'center', minHeight: '80vh' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(239, 219, 187, 0.2)',
          border: '2px solid #efdbbb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          animation: 'pulseSuccess 2s infinite'
        }}>
          <i className="fa-solid fa-lock" style={{ color: 'var(--primary)', fontSize: '28px', animation: 'spinSlow 3s infinite linear' }} />
        </div>
        <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '28px', color: 'var(--text-dark)', marginBottom: '8px' }}>
          Secure Redirect
        </h2>
        <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14.5px', color: 'var(--text-mid)', maxWidth: '450px', margin: '0 auto', lineHeight: 1.5 }}>
          {checkoutError || "Directing you to Shopify secure, PCI-compliant hosted checkout portal..."}
        </p>

        <style>{`
          @keyframes pulseSuccess {
            0% { box-shadow: 0 0 0 0 rgba(239, 219, 187, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(239, 219, 187, 0); }
            100% { box-shadow: 0 0 0 0 rgba(239, 219, 187, 0); }
          }
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  /* ── Empty State ── */
  if (cartItems.length === 0) {
    return (
      <div className="cart-page-root">
        {/* Hero banner */}
        <section className="shop-hero">
          <div className="shop-hero-orb shop-hero-orb-1" />
          <div className="shop-hero-orb shop-hero-orb-2" />
          <div className="section-container shop-hero-inner">
            <div className="shop-hero-breadcrumb">
              <Link to="/">Home</Link>
              <i className="fa-solid fa-chevron-right" />
              <span>Your Bag</span>
            </div>
            <p className="shop-hero-eyebrow"><i className="fa-solid fa-bag-shopping" /> Ritual Bag</p>
            <h1 className="shop-hero-title">Your <em>Bag</em></h1>
            <p className="shop-hero-subtitle">Your curated collection of ancient Ayurvedic formulas.</p>
          </div>
        </section>

        {/* Empty message */}
        <div className="section-container py-32 text-center">
          <div className="cart-empty-icon-wrap">
            <i className="fa-solid fa-bag-shopping cart-empty-icon" />
          </div>
          <h2 className="cart-empty-title">Your Ritual Bag is Empty</h2>
          <p className="cart-empty-desc">It seems you haven't added any essentials to your collection yet.</p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2 mt-8">
            Explore Collection <i className="fa-solid fa-arrow-right ml-1" />
          </Link>
        </div>
      </div>
    );
  }

  /* ── Filled State ── */
  return (
    <div className="cart-page-root">
      {/* ── Hero Banner ── */}
      <section className="shop-hero">
        <div className="shop-hero-orb shop-hero-orb-1" />
        <div className="shop-hero-orb shop-hero-orb-2" />
        <div className="section-container shop-hero-inner">
          <div className="shop-hero-breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <Link to="/shop">Shop</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Your Bag</span>
          </div>
          <p className="shop-hero-eyebrow"><i className="fa-solid fa-bag-shopping" /> Ritual Bag</p>
          <h1 className="shop-hero-title">Your <em>Bag</em></h1>
          <p className="shop-hero-subtitle">
            {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your ritual — ₹{subtotal.toLocaleString()} subtotal.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Link to="/shop" className="shop-filter-pill">
              <i className="fa-solid fa-arrow-left" /> Continue Shopping
            </Link>
            <Link to="/checkout" onClick={handleCheckoutClick} className="shop-filter-pill shop-filter-pill--active">
              Checkout <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="cart-content-section">
        <div className="section-container">
          <div className="cart-layout">

            {/* ── Left: Items + Trust badges ── */}
            <div className="cart-items-col">
              <div className="cart-items-card">
                <div className="cart-items-inner">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="cart-trust-row">
                {[
                  { Icon: ShieldCheck, label: 'Secure Payment' },
                  { Icon: Truck,       label: 'Free Shipping > ₹999' },
                  { Icon: RefreshCcw,  label: 'Easy Returns' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="cart-trust-badge">
                    <Icon size={22} strokeWidth={1.5} className="cart-trust-icon" />
                    <p className="cart-trust-label">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Order Summary ── */}
            <div className="cart-summary-col">
              <div className="cart-summary-card">
                {/* Decorative blobs inside summary */}
                <div className="cart-blob cart-blob-1" />
                <div className="cart-blob cart-blob-2" />

                <div className="cart-summary-inner">
                  <p className="cart-summary-eyebrow">
                    <i className="fa-solid fa-receipt" /> Order Summary
                  </p>

                  <div className="cart-summary-rows">
                    <div className="cart-summary-row">
                      <span className="cart-summary-lbl">Subtotal</span>
                      <span className="cart-summary-val">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="cart-summary-row">
                      <span className="cart-summary-lbl">Est. Shipping</span>
                      <span className="cart-summary-val">
                        {shipping === 0
                          ? <span className="cart-summary-free">FREE</span>
                          : `₹${shipping}`}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="cart-summary-free-hint">
                        <i className="fa-solid fa-truck-fast" /> Add ₹{(999 - subtotal).toLocaleString()} more for free shipping
                      </p>
                    )}
                    <div className="cart-summary-total-row">
                      <span className="cart-summary-total-lbl">Total</span>
                      <span className="cart-summary-total-val">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Link to="/checkout" onClick={handleCheckoutClick} className="cart-checkout-btn">
                    Proceed to Checkout <i className="fa-solid fa-arrow-right ml-2" />
                  </Link>

                  {/* Payment icons */}
                  <div className="cart-payment-icons">
                    <i className="fa-brands fa-cc-visa" />
                    <i className="fa-brands fa-cc-mastercard" />
                    <i className="fa-brands fa-cc-apple-pay" />
                    <i className="fa-brands fa-google-pay" />
                  </div>

                  <p className="cart-secure-note">
                    <i className="fa-solid fa-lock" /> 256-bit SSL encrypted checkout
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
