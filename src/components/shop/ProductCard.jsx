import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const ProductCard = ({ product, isDark = false }) => {
  const dispatch   = useDispatch();
  const cartItems  = useSelector((state) => state.cart.items);
  const isInCart   = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) return;
    dispatch(addToCart(product));
  };

  if (isDark) {
    return (
      <div className="group cursor-pointer flex flex-col w-full h-full bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-[1px] relative">
        {/* Image Container */}
        <div className="aspect-square overflow-hidden relative">
          <Link to={`/product/${product.id}`} className="w-full h-full block">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]" 
            />
          </Link>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col justify-between flex-grow text-white">
          <div>
            <div className="w-6 h-[1px] bg-[#9abcb9] mb-4"></div>
            <p className="text-[#9abcb9] text-[9px] uppercase tracking-[0.2em] font-semibold mb-2">
              {product.tag || product.type}
            </p>
            <h3 className="font-serif text-[20px] text-white mb-6 transition-colors group-hover:text-[#f3eed5] truncate">
              <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {product.name}
              </Link>
            </h3>
          </div>

          <div className="flex items-center justify-between mt-auto pt-4">
            <p className="text-[#f3eed5] font-semibold text-[13px] tracking-wide">
              ₹ {product.price}
            </p>
            <button
              onClick={handleAddToCart}
              disabled={isInCart}
              className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-4 py-2 text-[9px] uppercase tracking-[0.15em] hover:bg-white hover:text-[var(--bg-deep)] transition-all font-medium rounded-sm cursor-pointer disabled:opacity-60 disabled:cursor-default"
              style={{
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              {isInCart ? (
                <>
                  <i className="fa-solid fa-check mr-1"></i> IN BAG
                </>
              ) : (
                'ADD TO CART'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="prod-card group">
      {/* Image */}
      <div className="prod-card-img-outer">
        <Link to={`/product/${product.id}`} className="prod-card-img-wrap" style={{ display: 'block', textDecoration: 'none' }}>
          <img
            src={product.image}
            alt={product.name}
            className="prod-card-img"
          />
        </Link>
      </div>

      {/* Body */}
      <div className="prod-card-body">
        <span className="prod-card-cat">{product.tag}</span>
        <h3 className="prod-card-name">
          <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }} className="contact-link-hover">
            {product.name}
          </Link>
        </h3>

        <p className="prod-card-desc" style={{ fontSize: '13px', color: 'var(--text-mid)', marginTop: '8px', marginBottom: '4px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.shortDescription}
        </p>

        <div className="prod-card-footer">
          <span className="prod-card-price">₹{product.price}</span>

          <button
            className="prod-card-add-text"
            onClick={handleAddToCart}
            disabled={isInCart}
            aria-label={isInCart ? 'In Bag' : 'Add to Cart'}
            style={{
              padding: '10px 16px',
              fontSize: '10px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              background: isInCart ? 'var(--surface)' : 'var(--primary)',
              color: isInCart ? 'var(--text-dark)' : '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: isInCart ? 'default' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {isInCart ? (
              <>
                <i className="fa-solid fa-check" style={{ fontSize: '10px' }}></i> In Bag
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
