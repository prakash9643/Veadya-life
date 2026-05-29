import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../shop/ProductCard';

const Products = () => {
  const products = useSelector((state) => state.products.items);
  const homeProducts = products.slice(0, 5); // Show only 5 products

  return (
    <section className="products-section">
      <div className="section-container">
        <div className="section-header">
          <p className="section-eyebrow">
            <i className="fa-solid fa-spa section-eyebrow-icon"></i>Shop the Ritual <span className="eyebrow-dot">·</span> Ancient Wisdom
          </p>
          <h2 className="section-title">Essentials for Everyday Balance</h2>
          <p className="section-desc">
            Rituals rooted in Ayurvedic wisdom, crafted for the modern seeker. Each formula bridges ancient botanical knowledge with your daily intention.
          </p>
        </div>
        
        <div className="prod-grid">
          {homeProducts.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
        
        <div className="view-all-wrap mt-16 text-center">
          <Link to="/shop" className="btn-primary px-10 py-4 text-xs tracking-[0.3em]">
            Explore Entire Collection <i className="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
