import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { toggleCart } from '../store/slices/uiSlice';
import ProductCard from '../components/shop/ProductCard';

// Comprehensive botanical profile mapping for each product to make details feel ultra-premium
const BOTANICAL_PROFILES = {
  1: {
    scientificName: "Withania somnifera & Aurum Metallicum",
    intention: "Deep Grounding & Cellular Radiance",
    dosha: "Vata & Kapha Pacifying",
    texture: "Rich Golden Nectar",
    aroma: "Earthy wood notes laced with sweet amber resin",
    benefits: [
      "Dissolves daily stress while increasing natural skin resilience",
      "Infused with colloidal gold for structural luminosity",
      "Deeply hydrates dry vata skin and improves firmness"
    ],
    ritual: "Warm 3–4 drops between your palms. Inhale the grounding forest aroma. Press gently onto freshly cleansed damp face and neck, moving in upward sweeping motions from center out. Ideal for night-time alignment.",
    alchemy: "Wild-harvested organic Ashwagandha root solar-infused in cold-pressed Sesame and Jojoba oils. Charged with 24k gold leaf bhasma particles and native forest botanical essences.",
    notes: { top: "Sweet Herbaceous", heart: "Warm Sandalwood", base: "Earthy Vetiver" }
  },
  2: {
    scientificName: "Crocus sativus & Rosa damascena",
    intention: "Sovereign Brightness & Aura Correction",
    dosha: "Tridoshic (Vata, Pitta & Kapha Pacifying)",
    texture: "Lightweight Silky Serum",
    aroma: "Bespoke blend of Kashmiri saffron and freshly bloomed rose petals",
    benefits: [
      "Illuminates complexion and targets dark patches organically",
      "Rich in organic antioxidants that boost cellular renewal",
      "Instills a dewy, soft bloom appearance on all skin types"
    ],
    ritual: "After misting with rose water, massage 2–3 drops onto your face in circular motions. Focus gently around the cheekbones and forehead. Perform daily at dawn to welcome sovereign energy.",
    alchemy: "Hand-picked pure Kashmiri saffron pistils simmered gently in botanical steam-distilled damask rose water and high-grade squalane. Reinforced with wild liquorice root extracts.",
    notes: { top: "Distilled Rose", heart: "Spicy Saffron", base: "Warm Honeyed Amber" }
  },
  3: {
    scientificName: "Bacopa monnieri & Ocimum tenuiflorum",
    intention: "Cognitive Fortitude & Mind Calm",
    dosha: "Pitta & Kapha Calming",
    texture: "Loose Leaf Botanical Blend",
    aroma: "Herbaceous tulsi freshness layered with sharp citrus sparks",
    benefits: [
      "Soothes hyperactive thoughts and sharpens mental focus",
      "Supports mental clarity and balances natural stress responses",
      "Antioxidant-rich botanical tea that rejuvenates internal systems"
    ],
    ritual: "Infuse one heap-spoon of leaves in freshly boiled spring water for 5 minutes. Strain gently into a handmade earthenware cup. Sit in quiet reflection while taking small, deliberate sips.",
    alchemy: "Sun-dried organic Brahmi leaves sourced from pristine Himalayan foothills, blended carefully with Purple Tulsi, dried orange zest, and sweet cardamom seeds.",
    notes: { top: "Himalayan Tulsi", heart: "Bright Citrus Zest", base: "Sweet Cardamom Dust" }
  },
  4: {
    scientificName: "Azadirachta indica & Melaleuca alternifolia",
    intention: "Absolute Purification & Clarifying",
    dosha: "Pitta & Kapha Purifying",
    texture: "Mineral-rich crystalline salt",
    aroma: "Medicinal neem freshness with sharp eucalyptus clean notes",
    benefits: [
      "Purifies pores thoroughly and draws out surface impurities",
      "Soothes irritated, inflamed or red skin immediately",
      "Detoxifies the entire body while instilling a feeling of deep clean"
    ],
    ritual: "Dissolve two scoops of therapeutic salt in warm running bath water. Immerse yourself for 15–20 minutes. Massage areas of tension gently. Shower off with lukewarm water afterwards.",
    alchemy: "Pure Epsom salts solar-evaporated and hand-blended with wild-harvested Neem leaf powder, therapeutic Eucalyptus globulus leaf oil, and skin-softening sodium bicarbonate.",
    notes: { top: "Sharp Eucalyptus", heart: "Bitter Neem Leaf", base: "Cool Peppermint Spark" }
  },
  5: {
    scientificName: "Rosa damascena & Aloe barbadensis",
    intention: "Immediate Hydration & Calming Balance",
    dosha: "Pitta Pacifying & Cooling",
    texture: "Fine Cloud Mist",
    aroma: "Dew-kissed organic rose gardens at daybreak",
    benefits: [
      "Provides instant, deep moisture to dry skin",
      "Instantly cools, tones, and minimizes look of pores",
      "Calms skin irritation and redness almost instantly"
    ],
    ritual: "Mist generously over your clean face, neck, and chest area. Keep your eyes closed during misting. Use freely throughout the day to refresh your spirit and skin hydration.",
    alchemy: "Steam-distilled rose water derived from freshly gathered organic Damask rose petals, blended with cold-pressed pure Aloe Vera inner leaf liquid.",
    notes: { top: "Morning Dew", heart: "Crisp Rose Petals", base: "Cool Aloe Nectar" }
  },
  6: {
    scientificName: "Eclipta prostrata & Cocos nucifera",
    intention: "Follicle Revival & Crown Grounding",
    dosha: "Pitta & Vata Balancing",
    texture: "Nourishing Botanical Oil",
    aroma: "Rich herbal notes balanced with creamy warm coconut",
    benefits: [
      "Supports natural hair thickness and targets hair shedding",
      "Nourishes hair roots deeply and relieves mental tension",
      "Adds a brilliant, luxurious shine to dull hair strands"
    ],
    ritual: "Warm the oil slightly. Part your hair and apply directly to the scalp. Massage with your fingertips in gentle circular strokes. Leave on for at least 1 hour or overnight before washing.",
    alchemy: "Organic Bhringraj and Amla herbs cooked slowly in cold-pressed virgin Coconut oil and Sesame seed oil. Infused with organic rosemary oil extracts.",
    notes: { top: "Fresh Rosemary", heart: "Rich Bhringraj", base: "Creamy Coconut Oil" }
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.items);
  
  // Find current product
  const product = products.find((p) => p.id === parseInt(id)) || products[0];
  const isInCart = cartItems.some((item) => item.id === product.id);

  // States
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('profile');
  const [activeImage, setActiveImage] = useState(product?.image);
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [activeThumb, setActiveThumb] = useState(1);

  // Update active image when product changes
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setActiveThumb(1);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div style={{ padding: '120px 0', textAlign: 'center', fontFamily: '"Jost", sans-serif' }}>
        <p>Loading your botanical pairing...</p>
      </div>
    );
  }

  // Get premium profile details, fallback if product not in hardcoded list
  const profile = BOTANICAL_PROFILES[product.id] || {
    scientificName: "Botanical Blend",
    intention: "Ayurvedic Balancing",
    dosha: "Tridoshic (All Body Types)",
    texture: "Silky Liquid",
    aroma: "Sacred Botanical Herbs",
    benefits: [
      "Brings deep balance to mind and skin layers",
      "Crafted with pure therapeutic botanical extracts",
      "Supports skin's natural healing properties"
    ],
    ritual: "Warm a small portion in your hands and massage onto clean skin with upward strokes.",
    alchemy: "A signature blend of sun-cured Ayurvedic herbs infused in pure organic base oils.",
    notes: { top: "Fresh Herbaceous", heart: "Clean Botanical", base: "Earthy Wood" }
  };

  // Define actual multiple high-definition gallery images custom to the product's botanicals:
  const mockGallery = [
    product.image,
    product.id === 1 ? "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop" :
    product.id === 2 ? "https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?q=80&w=1000&auto=format&fit=crop" :
    product.id === 3 ? "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop" :
    product.id === 4 ? "https://images.unsplash.com/photo-1608571424266-eeddf9f13e70?q=80&w=1000&auto=format&fit=crop" :
    product.id === 5 ? "https://images.unsplash.com/photo-1552689486-f6c19ab065d7?q=80&w=1000&auto=format&fit=crop" :
    "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1000&auto=format&fit=crop", // Case 6
    
    product.id === 1 ? "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop" :
    product.id === 2 ? "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" :
    product.id === 3 ? "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop" :
    product.id === 4 ? "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop" :
    product.id === 5 ? "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop" :
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1000&auto=format&fit=crop", // Case 6
    
    product.id === 1 ? "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop" :
    product.id === 2 ? "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop" :
    product.id === 3 ? "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1000&auto=format&fit=crop" :
    product.id === 4 ? "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop" :
    product.id === 5 ? "https://images.unsplash.com/photo-1590156546746-c588a113f6f3?q=80&w=1000&auto=format&fit=crop" :
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop"  // Case 6
  ];

  const galleryImages = product.images && product.images.length > 0
    ? [...product.images, ...mockGallery.slice(product.images.length)].slice(0, 4)
    : mockGallery;

  const handleAddToCart = () => {
    // Add multiple items based on quantity
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    dispatch(toggleCart());
  };

  // Dynamically calculate recommended products (excluding current one)
  const recommendations = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div style={{ background: 'var(--bg-mist)', minHeight: '100vh', paddingBottom: '120px' }}>
      
      {/* ── Shop Hero Banner & Breadcrumbs ── */}
      <section className="shop-hero">
        {/* Decorative floating orbs */}
        <div className="shop-hero-orb shop-hero-orb-1" />
        <div className="shop-hero-orb shop-hero-orb-2" />

        <div className="section-container shop-hero-inner">
          {/* Breadcrumb */}
          <div className="shop-hero-breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <Link to="/shop">Shop</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>{product.name}</span>
          </div>

          <h1 className="shop-hero-title">
            {product.name}
          </h1>
          
          <p className="shop-hero-subtitle">
            {profile.scientificName}
          </p>
        </div>
      </section>

      {/* ── Main Detail Block ── */}
      <section style={{ marginTop: '40px' }}>
        <div className="section-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '64px',
            alignItems: 'start'
          }} className="about-values-grid product-details-grid">
            
            {/* ── LEFT COLUMN: Gallery & Stamp ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="product-details-gallery-column">
              
              {/* Main Image Outer with Luxury Studio Aura Glow */}
              <div style={{
                background: 'radial-gradient(circle, rgba(239, 219, 187, 0.22) 0%, #ffffff 85%)',
                border: '1px solid rgba(1, 114, 110, 0.08)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 20px 50px rgba(1, 114, 110, 0.04)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                height: '520px',
                transition: 'all 0.4s ease'
              }} className="product-details-primary-image">
                <img 
                  src={activeImage} 
                  alt={product.name}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    borderRadius: '12px'
                  }}
                />

                {/* Circular Luxury Gold Glassmorphic Seal */}
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(239, 219, 187, 0.9)',
                  borderRadius: '50%',
                  width: '74px',
                  height: '74px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transform: 'rotate(-8deg)',
                  boxShadow: '0 8px 24px rgba(239, 219, 187, 0.25)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.4s ease'
                }} className="consultation-banner-btn">
                  <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '7.5px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Organic</span>
                  <i className="fa-solid fa-seedling" style={{ fontSize: '10px', color: 'var(--primary)', margin: '3px 0' }} />
                  <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '7.5px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Certified</span>
                </div>
              </div>

              {/* Gallery Thumbnails Row: Multiple Product Images */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="product-details-thumbs">
                {galleryImages.map((imgUrl, index) => (
                  <button 
                    key={index}
                    onClick={() => {
                      setActiveImage(imgUrl);
                      setActiveThumb(index + 1);
                    }}
                    style={{
                      background: '#ffffff',
                      border: activeImage === imgUrl ? '1.5px solid var(--primary)' : '1.5px solid rgba(1, 114, 110, 0.08)',
                      borderRadius: '16px',
                      padding: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '84px',
                      boxShadow: activeImage === imgUrl ? '0 8px 24px rgba(1, 114, 110, 0.06)' : 'none',
                      overflow: 'hidden'
                    }}
                    className="contact-submit-btn"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Thumbnail ${index + 1}`} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease'
                      }} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ── RIGHT COLUMN: Content Profile ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="product-details-summary">
              
              {/* Core Information Header */}
              <div>
                <span style={{
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  {product.tag} · {profile.intention}
                </span>
                
                <h2 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '44px',
                  fontWeight: 400,
                  color: 'var(--text-dark)',
                  lineHeight: '1.2',
                  marginBottom: '16px'
                }}>
                  {product.name}
                </h2>

                {/* Rating & Reviews */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '2px', color: 'var(--bloom-pale)' }}>
                    <i className="fa-solid fa-star" style={{ fontSize: '12px', color: '#efdbbb' }}></i>
                    <i className="fa-solid fa-star" style={{ fontSize: '12px', color: '#efdbbb' }}></i>
                    <i className="fa-solid fa-star" style={{ fontSize: '12px', color: '#efdbbb' }}></i>
                    <i className="fa-solid fa-star" style={{ fontSize: '12px', color: '#efdbbb' }}></i>
                    <i className="fa-solid fa-star" style={{ fontSize: '12px', color: '#efdbbb' }}></i>
                  </div>
                  <span style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '12px',
                    color: 'var(--text-mid)',
                    fontWeight: 400
                  }}>
                    4.9 / 5.0 (48 Reviews)
                  </span>
                </div>

                {/* Price tag */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '28px',
                    fontWeight: 500,
                    color: 'var(--text-dark)'
                  }}>
                    ₹{product.price}
                  </span>
                  <span style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '11px',
                    color: 'rgba(1, 114, 110, 0.6)',
                    letterSpacing: '0.05em'
                  }}>
                    (Inclusive of all taxes)
                  </span>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid rgba(1, 114, 110, 0.08)', margin: '0' }} />

              {/* Quick Alchemical Properties */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px 32px'
              }} className="product-details-properties">
                <div>
                  <span style={{ display: 'block', fontFamily: '"Jost", sans-serif', fontSize: '9px', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Dosha Suitability</span>
                  <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '13.5px', color: 'var(--text-dark)', fontWeight: 400 }}>{profile.dosha}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: '"Jost", sans-serif', fontSize: '9px', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Sensory Texture</span>
                  <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '13.5px', color: 'var(--text-dark)', fontWeight: 400 }}>{profile.texture}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: '"Jost", sans-serif', fontSize: '9px', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Aroma Profile</span>
                  <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '13.5px', color: 'var(--text-dark)', fontWeight: 400 }}>{profile.aroma}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: '"Jost", sans-serif', fontSize: '9px', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Botanical Class</span>
                  <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '13.5px', color: 'var(--text-dark)', fontWeight: 400 }}>100% Biodegradable</span>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid rgba(1, 114, 110, 0.08)', margin: '0' }} />

              {/* Custom Size Selector */}
              <div>
                <span style={{
                  display: 'block',
                  fontFamily: '"Jost", sans-serif',
                  fontSize: '10px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--primary)',
                  marginBottom: '12px'
                }}>
                  Select Botanical Volume
                </span>
                <div style={{ display: 'flex', gap: '16px' }} className="product-details-size-options">
                  {['50ml', '100ml'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '12px 28px',
                        borderRadius: '6px',
                        border: selectedSize === size ? '1px solid var(--primary)' : '1px solid rgba(1, 114, 110, 0.12)',
                        background: selectedSize === size ? 'rgba(1, 114, 110, 0.04)' : '#ffffff',
                        color: selectedSize === size ? 'var(--primary)' : 'var(--text-mid)',
                        fontFamily: '"Jost", sans-serif',
                        fontSize: '13px',
                        fontWeight: selectedSize === size ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: selectedSize === size ? '0 8px 20px rgba(1, 114, 110, 0.04)' : 'none'
                      }}
                    >
                      {size} {size === '100ml' && <span style={{ fontSize: '10px', opacity: 0.7 }}> (Best Value)</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Add to Bag CTA */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '8px' }} className="product-details-action-row">
                
                {/* Quantity Box */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#ffffff',
                  border: '1px solid rgba(1, 114, 110, 0.12)',
                  borderRadius: '6px',
                  padding: '6px 16px',
                  height: '56px'
                }}>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ background: 'none', border: 'none', color: 'var(--primary)', width: '28px', fontSize: '16px', cursor: 'pointer', outline: 'none' }}
                  >
                    —
                  </button>
                  <span style={{
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--text-dark)',
                    width: '32px',
                    textAlign: 'center',
                    userSelect: 'none'
                  }}>
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ background: 'none', border: 'none', color: 'var(--primary)', width: '28px', fontSize: '16px', cursor: 'pointer', outline: 'none' }}
                  >
                    +
                  </button>
                </div>

                {/* Primary Add to Bag / Checkout CTA */}
                <button
                  onClick={isInCart ? () => navigate('/checkout') : handleAddToCart}
                  className="btn-primary"
                  style={{
                    flex: 1,
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <i className={isInCart ? "fa-solid fa-arrow-right-to-bracket" : "fa-solid fa-bag-shopping"} style={{ fontSize: '14px' }} />
                  {isInCart ? "Go to Checkout" : "Add to Ritual Bag"}
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs Section: Alchemical Ritual Disclosures ── */}
      <section style={{ marginTop: '80px' }}>
        <div className="section-container">
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(1, 114, 110, 0.08)',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 16px 48px rgba(1, 114, 110, 0.02)'
          }} className="product-details-tabs">
            
            {/* Tab Headers */}
            <div style={{
              display: 'flex',
              borderBottom: '1px solid rgba(1, 114, 110, 0.08)',
              gap: '40px',
              marginBottom: '36px'
            }} className="product-details-tab-list">
              {[
                { id: 'profile', label: 'The Botanical Profile' },
                { id: 'alchemy', label: 'Sacred Alchemy' },
                { id: 'ritual', label: 'The Application Ritual' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: activeTab === tab.id ? '2.5px solid var(--primary)' : '2.5px solid transparent',
                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-mid)',
                    fontFamily: '"Jost", sans-serif',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    paddingBottom: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="product-details-tab-body">
              {activeTab === 'profile' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px' }} className="about-values-grid product-details-profile">
                  <div>
                    <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '24px', fontWeight: 500, color: 'var(--text-dark)', marginBottom: '16px' }}>Bespoke Wellness Intentions</h4>
                    <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14.5px', color: 'var(--text-mid)', lineHeight: '1.75', fontWeight: 300, marginBottom: '24px' }}>
                      This pure Ayurvedic formula is consciously crafted to target physical skin issues while clearing congested mental pathways. Each bottle represents a small, sacred step towards daily energetic alignment.
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px' }}>
                      {profile.benefits.map((benefit, idx) => (
                        <li key={idx} style={{ fontFamily: '"Jost", sans-serif', fontSize: '13.5px', color: 'var(--text-mid)', fontWeight: 300, lineHeight: '1.6' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: 600, marginRight: '8px' }}>✦</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sensory Profile Notes Card */}
                  <div style={{
                    background: 'rgba(239, 219, 187, 0.12)',
                    border: '1px solid rgba(239, 219, 187, 0.4)',
                    borderRadius: '16px',
                    padding: '28px'
                  }}>
                    <h5 style={{ fontFamily: '"Jost", sans-serif', fontSize: '10px', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>Olfactory Notes</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <span style={{ display: 'block', fontFamily: '"Jost", sans-serif', fontSize: '8px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Top Note</span>
                        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '18px', fontStyle: 'italic', color: 'var(--text-dark)' }}>{profile.notes.top}</span>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontFamily: '"Jost", sans-serif', fontSize: '8px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Heart Note</span>
                        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '18px', fontStyle: 'italic', color: 'var(--text-dark)' }}>{profile.notes.heart}</span>
                      </div>
                      <div>
                        <span style={{ display: 'block', fontFamily: '"Jost", sans-serif', fontSize: '8px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Base Note</span>
                        <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '18px', fontStyle: 'italic', color: 'var(--text-dark)' }}>{profile.notes.base}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'alchemy' && (
                <div style={{ maxWidth: '680px' }} className="product-details-alchemy">
                  <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '24px', fontWeight: 500, color: 'var(--text-dark)', marginBottom: '16px' }}>Active Alchemical Disclosures</h4>
                  <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14.5px', color: 'var(--text-mid)', lineHeight: '1.8', fontWeight: 300, marginBottom: '20px' }}>
                    {profile.alchemy}
                  </p>
                  <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '13.5px', color: 'rgba(1, 114, 110, 0.7)', lineHeight: '1.6', fontWeight: 300 }}>
                    <em>* Certified Organic. Free from parabens, synthetic fragrances, petrochemical pollutants, and animal-derived thickeners. Cruelty-free and vegan.</em>
                  </p>
                </div>
              )}

              {activeTab === 'ritual' && (
                <div style={{ maxWidth: '680px', display: 'flex', gap: '28px' }} className="product-details-ritual">
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(239, 219, 187, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0
                  }}>
                    <i className="fa-solid fa-spa" style={{ fontSize: '16px' }} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '24px', fontWeight: 500, color: 'var(--text-dark)', marginBottom: '16px' }}>The Sacred Application Ritual</h4>
                    <p style={{ fontFamily: '"Jost", sans-serif', fontSize: '14.5px', color: 'var(--text-mid)', lineHeight: '1.8', fontWeight: 300 }}>
                      {profile.ritual}
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Recommendations Section ── */}
      <section style={{ marginTop: '100px' }}>
        <div className="section-container">
          
          <div className="section-header" style={{ marginBottom: '48px', textAlign: 'center' }}>
            <p className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <i className="fa-solid fa-gift section-eyebrow-icon"></i>Ritual Pairings <span className="eyebrow-dot">·</span> Harmonious Flow
            </p>
            <h2 className="section-title">Bespoke Pairings</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Unite these pure botanical formulations to complete your customized morning or evening energetic skincare ritual.
            </p>
          </div>

          {/* Recommendations Grid */}
          <div className="prod-grid">
            {recommendations.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default ProductDetails;
