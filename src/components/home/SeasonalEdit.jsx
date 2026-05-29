import React from 'react';
import { Link } from 'react-router-dom';

const SeasonalEdit = () => {
  return (
    <section className="seasonal-section py-24 text-white">
      {/* Decorative Blobs */}
      <div className="seasonal-blob-1"></div>
      <div className="seasonal-blob-2"></div>

      <div className="section-container relative z-10 max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="seasonal-content pr-8 relative z-10">
            <p className="text-[#9abcb9] text-[11px] uppercase tracking-[0.25em] font-medium mb-6 flex items-center gap-2">
              <span className="text-sm">✦</span> SEASONAL EDIT
            </p>
            <h2 className="font-serif text-[56px] leading-[1.1] mb-6 font-normal tracking-wide">
              Ritual Sets for <em className="italic font-light text-[#f3eed5]">Deep<br/>Healing</em>
            </h2>
            <p className="text-[#9abcb9] text-[17px] font-light leading-relaxed mb-10 max-w-md">
              Complete Ayurvedic routines — morning to night, inside and out. Curated for lasting transformation.
            </p>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-4 text-[#9abcb9] text-[15px] font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-[#338e8b]"></div>
                Formulated by Ayurvedic physicians
              </li>
              <li className="flex items-center gap-4 text-[#9abcb9] text-[15px] font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-[#338e8b]"></div>
                Sourced from Himalayan herb gardens
              </li>
              <li className="flex items-center gap-4 text-[#9abcb9] text-[15px] font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-[#338e8b]"></div>
                Results in 14 days of regular use
              </li>
            </ul>

            <Link to="/shop" className="inline-flex items-center gap-3 bg-[#f3eed5] text-[var(--bg-deep)] px-7 py-3.5 rounded-md font-medium text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all hover:-translate-y-0.5 shadow-lg">
              → SHOP RITUAL SETS
            </Link>
          </div>

          {/* Right Image Grid */}
          <div className="seasonal-grid grid grid-cols-[1.2fr_1fr] gap-4 h-[580px]">
            {/* Main Image */}
            <div className="relative rounded-[20px] overflow-hidden group">
              <img src="/images/product/1.jfif" alt="Brahmi Scalp Oil" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                <div>
                  <h3 className="font-serif text-[26px] text-white mb-1">Brahmi Scalp Oil</h3>
                  <p className="text-[#f3eed5] font-medium text-sm tracking-wide">₹ 56.00</p>
                </div>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-[5px] text-[10px] uppercase tracking-[0.15em] hover:bg-white hover:text-[var(--bg-deep)] transition-all font-medium cursor-pointer">
                  + CART
                </button>
              </div>
            </div>

            {/* Sub Images Stack */}
            <div className="grid grid-rows-2 gap-4 h-[580px]">
              <div className="relative rounded-[20px] overflow-hidden group h-full">
                <img src="/images/product/2.jfif" alt="Shatavari Balance" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-[20px] text-white mb-1">Shatavari Balance</h3>
                    <p className="text-[#f3eed5] text-[13px] font-medium tracking-wide">₹ 68.00</p>
                  </div>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-[5px] text-[9px] uppercase tracking-[0.15em] hover:bg-white hover:text-[var(--bg-deep)] transition-all font-medium cursor-pointer">
                    + CART
                  </button>
                </div>
              </div>
              <div className="relative rounded-[20px] overflow-hidden group h-full">
                <img src="/images/product/3.jfif" alt="Tulsi Calm Blend" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-[20px] text-white mb-1">Tulsi Calm Blend</h3>
                    <p className="text-[#f3eed5] text-[13px] font-medium tracking-wide">₹ 32.00</p>
                  </div>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-[5px] text-[9px] uppercase tracking-[0.15em] hover:bg-white hover:text-[var(--bg-deep)] transition-all font-medium cursor-pointer">
                    + CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalEdit;
