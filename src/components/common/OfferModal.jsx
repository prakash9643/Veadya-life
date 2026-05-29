import React, { useState, useEffect } from 'react';

const OfferModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show modal after 1.5 seconds if it hasn't been shown in this session
    const hasShown = sessionStorage.getItem('veadya_offer_shown');
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('veadya_offer_shown', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10000 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
      <div className="relative w-full max-w-[760px] bg-white rounded-[16px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scale-up border border-gray-100">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:bg-white shadow-xs transition-all z-10 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm" />
        </button>

        {/* Left column: Banner Image */}
        <div className="w-full md:w-[48%] relative min-h-[220px] md:min-h-[420px] flex flex-col justify-between p-6 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(17, 66, 50, 0.45) 0%, rgba(11, 26, 20, 0.85) 100%), url('/modelimg/modelimg.png')" }}>
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] font-semibold text-white/90 bg-white/15 px-3 py-1 rounded-full backdrop-blur-xs uppercase">
              Limited Offer
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-[12px] tracking-[0.25em] font-bold text-white/85 uppercase">Unlock</p>
            <h3 className="text-3xl font-serif text-white leading-tight">Exclusive Offer</h3>
            <p className="text-white/80 text-[12px] leading-relaxed">
              Get flat 20% off on your first order. Natural Ayurvedic wellness delivered to your doorstep.
            </p>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="w-full md:w-[52%] p-8 md:p-10 flex flex-col justify-center bg-white">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-xl font-serif text-text-dark font-medium leading-snug">
                  Shop Ayurvedic care with exclusive offer
                </h4>
                <p className="text-[12px] text-text-mid font-light leading-relaxed">
                  Enter your mobile number to get the discount code.
                </p>
              </div>

              <div className="space-y-4">
                {/* Mobile Input */}
                <div className="flex border border-gray-200 rounded-[8px] overflow-hidden focus-within:border-primary transition-colors">
                  <div className="bg-gray-50 border-r border-gray-100 px-3.5 flex items-center text-[13px] font-medium text-gray-500">
                    +91
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="flex-1 px-4 py-3 text-[13px] text-text-dark outline-none placeholder:text-gray-400 font-medium"
                  />
                </div>

                {/* Consent checkbox */}
                <label className="flex items-start gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 rounded border-gray-300 text-primary focus:ring-primary w-3.5 h-3.5 cursor-pointer"
                  />
                  <span className="text-[11px] text-text-mid font-light leading-relaxed select-none group-hover:text-primary transition-colors">
                    Notify me for any updates & offers
                  </span>
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={!agree || phone.length < 10}
                className="w-full bg-primary hover:bg-primary-lt disabled:bg-gray-200 disabled:text-gray-400 text-white text-[12px] font-semibold py-3 px-6 rounded-[8px] uppercase tracking-[0.1em] shadow-sm transition-all duration-300 cursor-pointer disabled:cursor-not-allowed text-center"
              >
                Submit
              </button>

              {/* Disclaimer */}
              <p className="text-[9.5px] text-gray-400 text-center leading-normal">
                By logging in, you're agreeing to our{' '}
                <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a> &{' '}
                <a href="/terms" className="underline hover:text-primary">Terms of Service</a>
              </p>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary text-xl">
                <i className="fa-solid fa-check" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-serif text-text-dark font-medium">Thank You!</h4>
                <p className="text-[12px] text-text-mid leading-relaxed">
                  Your 20% discount code has been sent to +91 {phone}.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
