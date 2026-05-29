import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../store/slices/cartSlice';

const CartItem = ({ item, isDrawer = false }) => {
  const dispatch = useDispatch();

  const handleQty = (newQty) => {
    if (newQty < 1) return;
    dispatch(updateQuantity({ id: item.id, quantity: newQty }));
  };

  return (
    <div
      className="cart-item-row group"
      style={{
        display: 'flex',
        gap: '16px',
        padding: isDrawer ? '18px 0' : '22px 0',
        borderBottom: '1px solid rgba(1,114,110,0.07)',
        alignItems: 'center',
        animation: 'fadeUp 300ms ease forwards',
      }}
    >
      {/* Image */}
      <div
        style={{
          width: isDrawer ? '70px' : '88px',
          height: isDrawer ? '70px' : '88px',
          flexShrink: 0,
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'var(--bg-mist)',
          border: '1px solid rgba(1,114,110,0.08)',
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          className="group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="cart-item-content" style={{ flex: 1, minWidth: 0 }}>
        <div className="cart-item-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <div style={{ minWidth: 0 }}>
            <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '9px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary)', display: 'block', marginBottom: '3px' }}>
              {item.tag}
            </span>
            <h4 className="cart-item-name" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: isDrawer ? '15px' : '18px', fontWeight: 400, color: 'var(--text-dark)', letterSpacing: '0.01em', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {item.name}
            </h4>
          </div>
          {/* Remove */}
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{ padding: '4px', color: 'rgba(42,75,74,0.3)', transition: 'color 0.2s', flexShrink: 0, marginLeft: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(42,75,74,0.3)'}
            aria-label="Remove item"
          >
            <i className="fa-solid fa-trash-can" style={{ fontSize: '12px' }}></i>
          </button>
        </div>

        {/* Qty + Price */}
        <div className="cart-item-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
          {/* Qty stepper */}
          <div className="cart-item-qty" style={{ display: 'flex', alignItems: 'center', borderRadius: '20px', border: '1.5px solid rgba(1,114,110,0.15)', overflow: 'hidden', background: '#fff' }}>
            <button
              onClick={() => handleQty(item.quantity - 1)}
              style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px' }}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <span style={{ minWidth: '28px', textAlign: 'center', fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)' }}>
              {item.quantity}
            </span>
            <button
              onClick={() => handleQty(item.quantity + 1)}
              style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px' }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          {/* Price */}
          <span style={{ fontFamily: '"Jost", sans-serif', fontSize: '15px', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.01em' }}>
            ₹{(item.price * item.quantity).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
