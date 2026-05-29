import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const reelsData = [
  {
    id: 1,
    name: "She Care Juice",
    price: "541",
    oldPrice: "543",
    views: "8.4K Views",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0b05af38ee857d4cc3f1b6d5e9ccd4e&profile_id=139&oauth2_token_id=57447761",
    avatar: "/logo/bgremovepng.png"
  },
  {
    id: 2,
    name: "Diabic Care Juice",
    price: "457",
    oldPrice: "459",
    views: "7.4K Views",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7fdf3c675549da737e584f23b7ff46ea605df962&profile_id=165&oauth2_token_id=57447761",
    avatar: "/logo/bgremovepng.png"
  },
  {
    id: 3,
    name: "Kumkumadi Glow",
    price: "740",
    oldPrice: "820",
    views: "43.7K Views",
    videoUrl: "https://player.vimeo.com/external/540092305.sd.mp4?s=dd66da1559e2170327f337f766fcd5f573c509b5&profile_id=165&oauth2_token_id=57447761",
    avatar: "/logo/bgremovepng.png"
  },
  {
    id: 4,
    name: "Brahmi Scalp Oil",
    price: "560",
    oldPrice: "620",
    views: "2.3K Views",
    videoUrl: "https://player.vimeo.com/external/454942940.sd.mp4?s=d00da5f5db7c9597950c4bbd5f1f99c15b17a151&profile_id=165&oauth2_token_id=57447761",
    avatar: "/logo/bgremovepng.png"
  },
  {
    id: 5,
    name: "Calm Tea Blend",
    price: "320",
    oldPrice: "380",
    views: "33.0K Views",
    videoUrl: "https://player.vimeo.com/external/538571007.sd.mp4?s=2138e3e4a5009d784a92c3f84f09d8469a7f3405&profile_id=165&oauth2_token_id=57447761",
    avatar: "/logo/bgremovepng.png"
  }
];

const WatchShop = () => {
  const swiperRef = useRef(null);
  const [likes, setLikes] = useState({});

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // We duplicate data for a smoother infinite carousel slide loop
  const displayReels = [...reelsData, ...reelsData, ...reelsData];

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-mist) 45%, var(--bg) 60%, var(--bg-mist) 80%, #ffffff 100%)' }}>
      <div className="section-container relative z-10">
        
        {/* Section Heading */}
        <div className="section-header text-center mb-12">
          <p className="section-eyebrow flex items-center justify-center gap-2">
            <i className="fa-solid fa-play section-eyebrow-icon" />
            Watch &amp; Shop <span className="eyebrow-dot">·</span> Interactive Reels
          </p>
          <h2 className="section-title">
            Experience Our Daily Rituals
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            See how our premium botanical remedies are applied and integrated into a morning or evening wellness routine. Shop directly from each video.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full py-4"
          >
            {displayReels.map((reel, index) => (
              <SwiperSlide key={`reel-${index}`}>
                {/* Reel Card Container */}
                <div className="bg-white rounded-[12px] border border-[#e2ebe7] p-3 shadow-xs flex flex-col gap-3 transition-transform duration-300 hover:translate-y-[-4px]">
                  
                  {/* Video Block with Overlays */}
                  <div className="aspect-[9/16] rounded-[8px] overflow-hidden relative bg-black">
                    <video
                      src={reel.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    {/* View Count Overlay (Bottom Left) */}
                    <div className="absolute bottom-3 left-3 bg-black/40 text-white text-[9.5px] px-2 py-0.5 rounded-sm font-medium backdrop-blur-xs flex items-center gap-1">
                      <i className="fa-solid fa-eye text-[9px] opacity-90" />
                      {reel.views}
                    </div>

                    {/* Like & Share Action Overlays (Bottom Right) */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                      <button 
                        onClick={() => handleLike(`${reel.id}-${index}`)}
                        className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white transition-all hover:bg-black/60 cursor-pointer"
                      >
                        <i className={`fa-solid fa-heart text-[12px] ${likes[`${reel.id}-${index}`] ? 'text-red-500' : 'text-white'}`} />
                      </button>
                      <button className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white transition-all hover:bg-black/60 cursor-pointer">
                        <i className="fa-solid fa-share-nodes text-[12px]" />
                      </button>
                    </div>
                  </div>

                  {/* Product Details Section */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2.5">
                      {/* Brand Logo Avatar */}
                      <div className="w-8 h-8 rounded-full border border-[#e2ebe7] overflow-hidden flex-shrink-0 bg-white flex items-center justify-center p-0.5">
                        <img 
                          src={reel.avatar} 
                          alt="Veadya" 
                          className="w-full h-full object-contain" 
                        />
                      </div>

                      {/* Title & Price */}
                      <div className="min-w-0">
                        <h3 className="font-sans text-[12px] font-semibold text-[#0b1a14] truncate">
                          {reel.name}
                        </h3>
                        <p className="text-[12px] font-bold text-[#114232] mt-0.5">
                          ₹ {reel.price} <span className="text-[10px] text-gray-400 line-through font-normal ml-1">₹ {reel.oldPrice}</span>
                        </p>
                      </div>
                    </div>

                    {/* Buy Now CTA */}
                    <button className="w-full bg-[#114232] hover:bg-[#2d6b56] text-white py-2 px-4 rounded-[6px] text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 shadow-sm cursor-pointer text-center">
                      Buy Now
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Slider Arrows (Figma style overlay) */}
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e2ebe7] text-[#114232] shadow-md hidden md:flex items-center justify-center transition-all hover:bg-[#114232] hover:text-white hover:border-[#114232] z-20 cursor-pointer"
          >
            <i className="fa-solid fa-chevron-left text-[13px]" />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e2ebe7] text-[#114232] shadow-md hidden md:flex items-center justify-center transition-all hover:bg-[#114232] hover:text-white hover:border-[#114232] z-20 cursor-pointer"
          >
            <i className="fa-solid fa-chevron-right text-[13px]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WatchShop;
