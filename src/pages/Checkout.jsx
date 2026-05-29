import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { shopifyService } from '../services/shopify';

const STEPS = [
  { id: 1, key: 'identity',    label: 'Identity',     icon: 'fa-solid fa-user' },
  { id: 2, key: 'destination', label: 'Destination',  icon: 'fa-solid fa-location-dot' },
  { id: 3, key: 'payment',     label: 'Payment',      icon: 'fa-solid fa-lock' },
];

const PAYMENT_OPTS = [
  { id: 'card', label: 'Credit / Debit Card', icon: 'fa-solid fa-credit-card',     desc: 'Visa, Mastercard, RuPay' },
  { id: 'upi',  label: 'UPI Payment',         icon: 'fa-solid fa-mobile-screen',   desc: 'GPay, PhonePe, Paytm' },
  { id: 'cod',  label: 'Cash on Delivery',    icon: 'fa-solid fa-money-bill-wave', desc: 'Pay when it arrives' },
];

const Field = ({ label, name, value, onChange, placeholder, type = 'text', half = false }) => (
  <div className={`checkout-field ${half ? '' : 'checkout-field--full'}`}>
    <label className="checkout-label">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="checkout-input"
    />
  </div>
);

const CheckoutPage = () => {
  const { items: cartItems } = useSelector((state) => state.cart);
  const subtotal = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
  const shipping  = subtotal > 999 ? 0 : 150;
  const total     = subtotal + shipping;

  const [step, setStep] = useState(1);

  useEffect(() => {
    // Dynamic redirect to hosted checkout if Shopify API is active
    const initShopifyCheckout = async () => {
      if (shopifyService.isClientConfigured() && cartItems.length > 0) {
        try {
          const checkoutUrl = await shopifyService.createCheckout(cartItems);
          if (checkoutUrl) {
            window.location.href = checkoutUrl;
          }
        } catch (err) {
          console.error("Shopify Checkout error:", err);
        }
      }
    };
    initShopifyCheckout();
  }, [cartItems]);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', pincode: '',
    payment: 'card', cardNum: '', expiry: '', cvv: '', upiId: '',
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const next   = () => setStep((s) => Math.min(s + 1, 3));
  const back   = () => setStep((s) => Math.max(s - 1, 1));

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
            <Link to="/cart">Your Bag</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Checkout</span>
          </div>
          <p className="shop-hero-eyebrow"><i className="fa-solid fa-lock" /> Secure Checkout</p>
          <h1 className="shop-hero-title">Check<em>out</em></h1>
          <p className="shop-hero-subtitle">Complete your ritual — safe, simple &amp; secure.</p>
        </div>
      </section>

      {/* ── Main ── */}
      <div className="cart-content-section">
        <div className="section-container">

          {/* ── 3-Step Progress ── */}
          <div className="co-steps">
            {STEPS.map((s, i) => {
              const done   = step > s.id;
              const active = step === s.id;
              return (
                <React.Fragment key={s.id}>
                  <div className="co-step">
                    <div className={`co-step-bubble ${active ? 'co-step-bubble--active' : done ? 'co-step-bubble--done' : ''}`}>
                      {done
                        ? <i className="fa-solid fa-check" style={{ fontSize: '11px' }} />
                        : <i className={s.icon} style={{ fontSize: '12px' }} />}
                    </div>
                    <div>
                      <p className={`co-step-num ${active ? 'co-step-num--active' : done ? 'co-step-num--done' : ''}`}>
                        Step {s.id}
                      </p>
                      <p className={`co-step-label ${active ? 'co-step-label--active' : done ? 'co-step-label--done' : ''}`}>
                        {s.label}
                      </p>
                    </div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`co-step-line ${done ? 'co-step-line--done' : active ? 'co-step-line--active' : ''}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* ── Layout ── */}
          <div className="cart-layout">

            {/* ── Form Card ── */}
            <div className="cart-items-col">
              <div className="checkout-form-card">

                {/* ── STEP 1: Identity ── */}
                {step === 1 && (
                  <div className="co-form-section">
                    <div className="co-form-header">
                      <div className="co-form-header-icon">
                        <i className="fa-solid fa-user" />
                      </div>
                      <div>
                        <h2 className="co-form-title">Your Identity</h2>
                        <p className="co-form-subtitle">Let us know who we're sending to</p>
                      </div>
                    </div>

                    <div className="checkout-form-grid">
                      <Field label="First Name"    name="firstName" value={form.firstName} onChange={handle} placeholder="Arjun"          half />
                      <Field label="Last Name"     name="lastName"  value={form.lastName}  onChange={handle} placeholder="Sharma"         half />
                      <Field label="Email Address" name="email"     value={form.email}     onChange={handle} placeholder="you@email.com"   type="email" half />
                      <Field label="Phone Number"  name="phone"     value={form.phone}     onChange={handle} placeholder="+91 98765 43210" type="tel"   half />
                    </div>

                    <div className="co-form-footer">
                      <div />
                      <button className="co-next-btn" onClick={next}>
                        Continue <i className="fa-solid fa-arrow-right ml-2" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: Destination ── */}
                {step === 2 && (
                  <div className="co-form-section">
                    <div className="co-form-header">
                      <div className="co-form-header-icon">
                        <i className="fa-solid fa-location-dot" />
                      </div>
                      <div>
                        <h2 className="co-form-title">Destination</h2>
                        <p className="co-form-subtitle">Where should we deliver your ritual?</p>
                      </div>
                    </div>

                    <div className="checkout-form-grid">
                      <Field label="Full Address" name="address" value={form.address} onChange={handle} placeholder="House no., Street, Area" />
                      <Field label="City"         name="city"    value={form.city}    onChange={handle} placeholder="Rishikesh"  half />
                      <Field label="State"        name="state"   value={form.state}   onChange={handle} placeholder="Uttarakhand" half />
                      <Field label="PIN Code"     name="pincode" value={form.pincode} onChange={handle} placeholder="249 201"   half />
                    </div>

                    {/* Shipping method selector */}
                    <div className="co-shipping-opts">
                      {[
                        { id: 'standard', label: 'Standard Delivery', days: '5–7 business days', price: shipping === 0 ? 'FREE' : `₹${shipping}` },
                        { id: 'express',  label: 'Express Delivery',  days: '2–3 business days', price: '₹299' },
                      ].map((opt) => (
                        <div key={opt.id} className={`co-shipping-opt ${opt.id === 'standard' ? 'co-shipping-opt--active' : ''}`}>
                          <div className={`co-shipping-radio ${opt.id === 'standard' ? 'co-shipping-radio--active' : ''}`}>
                            {opt.id === 'standard' && <div className="co-shipping-radio-dot" />}
                          </div>
                          <div className="co-shipping-info">
                            <p className="co-shipping-label">{opt.label}</p>
                            <p className="co-shipping-days">{opt.days}</p>
                          </div>
                          <span className="co-shipping-price">{opt.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="co-form-footer">
                      <button className="co-back-btn" onClick={back}>
                        <i className="fa-solid fa-arrow-left mr-2" /> Back
                      </button>
                      <button className="co-next-btn" onClick={next}>
                        Continue <i className="fa-solid fa-arrow-right ml-2" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: Payment ── */}
                {step === 3 && (
                  <div className="co-form-section">
                    <div className="co-form-header">
                      <div className="co-form-header-icon">
                        <i className="fa-solid fa-lock" />
                      </div>
                      <div>
                        <h2 className="co-form-title">Payment</h2>
                        <p className="co-form-subtitle">Choose how you'd like to pay</p>
                      </div>
                    </div>

                    {/* Payment method cards */}
                    <div className="co-pay-grid">
                      {PAYMENT_OPTS.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setForm({ ...form, payment: opt.id })}
                          className={`co-pay-card ${form.payment === opt.id ? 'co-pay-card--active' : ''}`}
                        >
                          <div className={`co-pay-icon-wrap ${form.payment === opt.id ? 'co-pay-icon-wrap--active' : ''}`}>
                            <i className={opt.icon} />
                          </div>
                          <p className="co-pay-label">{opt.label}</p>
                          <p className="co-pay-desc">{opt.desc}</p>
                          {form.payment === opt.id && (
                            <div className="co-pay-selected"><i className="fa-solid fa-check" style={{ fontSize: '9px' }} /></div>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Card fields */}
                    {form.payment === 'card' && (
                      <div className="co-card-fields">
                        <div className="checkout-field checkout-field--full">
                          <label className="checkout-label">Card Number</label>
                          <div className="co-card-input-wrap">
                            <i className="fa-regular fa-credit-card co-card-icon" />
                            <input name="cardNum" value={form.cardNum} onChange={handle} placeholder="1234  5678  9012  3456" className="checkout-input co-card-input" />
                          </div>
                        </div>
                        <div className="checkout-form-grid" style={{ marginTop: '12px' }}>
                          <div className="checkout-field">
                            <label className="checkout-label">Expiry Date</label>
                            <input name="expiry" value={form.expiry} onChange={handle} placeholder="MM / YY" className="checkout-input" />
                          </div>
                          <div className="checkout-field">
                            <label className="checkout-label">CVV <i className="fa-solid fa-circle-question" style={{ fontSize: '9px', opacity: 0.4 }} /></label>
                            <input name="cvv" value={form.cvv} onChange={handle} placeholder="• • •" className="checkout-input" type="password" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* UPI field */}
                    {form.payment === 'upi' && (
                      <div className="co-card-fields">
                        <div className="checkout-field checkout-field--full">
                          <label className="checkout-label">UPI ID</label>
                          <div className="co-card-input-wrap">
                            <i className="fa-solid fa-at co-card-icon" />
                            <input name="upiId" value={form.upiId} onChange={handle} placeholder="yourname@upi" className="checkout-input co-card-input" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* COD note */}
                    {form.payment === 'cod' && (
                      <div className="co-cod-note">
                        <i className="fa-solid fa-circle-info" />
                        <p>Cash will be collected at the time of delivery. Please keep the exact amount ready.</p>
                      </div>
                    )}

                    {/* Security badges */}
                    <div className="co-security-row">
                      {['PCI DSS Compliant', '256-bit SSL', 'Safe & Encrypted'].map((b) => (
                        <span key={b} className="co-security-badge">
                          <i className="fa-solid fa-shield-halved" /> {b}
                        </span>
                      ))}
                    </div>

                    <div className="co-form-footer">
                      <button className="co-back-btn" onClick={back}>
                        <i className="fa-solid fa-arrow-left mr-2" /> Back
                      </button>
                      <button className="co-place-btn">
                        <i className="fa-solid fa-lock mr-2" style={{ fontSize: '11px' }} />
                        Place Order — ₹{total.toLocaleString()}
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* ── Order Summary Sidebar ── */}
            <div className="cart-summary-col">
              <div className="cart-summary-card">
                <div className="cart-blob cart-blob-1" />
                <div className="cart-blob cart-blob-2" />
                <div className="cart-summary-inner">
                  <p className="cart-summary-eyebrow"><i className="fa-solid fa-receipt" /> Order Summary</p>

                  {/* Items */}
                  <div className="checkout-items-list">
                    {cartItems.map((item) => (
                      <div key={item.id} className="checkout-summary-item">
                        <div className="checkout-summary-img-wrap">
                          <img src={item.image} alt={item.name} className="checkout-summary-img" />
                          <span className="checkout-summary-qty">{item.quantity}</span>
                        </div>
                        <div className="checkout-summary-info">
                          <p className="checkout-summary-name">{item.name}</p>
                          <p className="checkout-summary-tag">{item.tag}</p>
                        </div>
                        <span className="checkout-summary-price">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="cart-summary-rows">
                    <div className="cart-summary-row">
                      <span className="cart-summary-lbl">Subtotal</span>
                      <span className="cart-summary-val">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="cart-summary-row">
                      <span className="cart-summary-lbl">Shipping</span>
                      <span className="cart-summary-val">
                        {shipping === 0 ? <span className="cart-summary-free">FREE</span> : `₹${shipping}`}
                      </span>
                    </div>
                    <div className="cart-summary-total-row">
                      <span className="cart-summary-total-lbl">Total</span>
                      <span className="cart-summary-total-val">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <p className="cart-secure-note mt-4">
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

export default CheckoutPage;
