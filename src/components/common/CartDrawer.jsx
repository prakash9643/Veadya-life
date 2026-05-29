import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/slices/uiSlice';
import { Link } from 'react-router-dom';
import CartItem from '../cart/CartItem';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.ui.isCartOpen);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => dispatch(toggleCart())}
      />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl shadow-black/20 flex flex-col animate-in slide-in-from-right duration-500">
        {/* Header */}
        <div className="px-6 py-5 flex justify-between items-center" style={{background: 'linear-gradient(135deg, #f5f9f8 0%, #eaf3f2 100%)', borderBottom: '1px solid rgba(1,114,110,0.1)'}}>
          <div>
            <h2 className="font-serif text-text-dark flex items-center gap-2.5" style={{fontSize:'19px', fontWeight:500, letterSpacing:'0.03em'}}>
              <i className="fa-solid fa-bag-shopping text-primary" style={{fontSize:'15px'}}></i> Your Bag
            </h2>
            <p className="font-sans mt-0.5" style={{fontSize:'10.5px', letterSpacing:'0.12em', color:'var(--text-mid)', fontWeight:400}}>
              {cartItems.length === 0 ? 'No items yet' : `${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your ritual`}
            </p>
          </div>
          <button 
            onClick={() => dispatch(toggleCart())}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all hover:bg-primary/10"
            style={{border:'1px solid rgba(1,114,110,0.15)', color:'var(--primary)'}}
          >
            <i className="fa-solid fa-xmark" style={{fontSize:'14px'}}></i>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-24 h-24 bg-gradient-to-tr from-bg-mist to-white border border-primary/10 shadow-lg shadow-primary/5 rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-2 border border-dashed border-primary/20 rounded-full animate-spin duration-[40s]"></div>
                <i className="fa-solid fa-bag-shopping text-3xl text-primary/45"></i>
              </div>
              <h3 className="text-2xl font-serif text-text-dark font-medium mb-3 tracking-wide">Your ritual bag is empty</h3>
              <p className="text-sm text-text-mid font-light leading-relaxed mb-10 max-w-[280px]">
                Begin your wellness journey by exploring our ancient Ayurvedic formulas.
              </p>
              <button 
                onClick={() => dispatch(toggleCart())}
                className="btn-primary w-full py-4 justify-center tracking-widest text-xs font-bold uppercase flex items-center gap-2 group shadow-xl shadow-primary/15 hover:shadow-primary/25 hover:translate-y-[-2px] transition-all"
              >
                START SHOPPING 
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} isDrawer={true} />
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="px-6 py-6" style={{background: 'linear-gradient(180deg, #f5f9f8 0%, #eaf3f2 100%)', borderTop: '1px solid rgba(1,114,110,0.1)'}}>
            {/* Subtotal row */}
            <div className="flex justify-between items-end mb-1">
              <span className="font-sans text-xs uppercase tracking-widest" style={{color:'var(--text-mid)', letterSpacing:'0.15em'}}>Subtotal</span>
              <span className="font-serif text-2xl" style={{color:'var(--primary)', fontWeight:500}}>₹{subtotal.toLocaleString()}</span>
            </div>
            <p className="font-sans mb-5" style={{fontSize:'9.5px', letterSpacing:'0.1em', color:'rgba(42,75,74,0.5)', textTransform:'uppercase'}}>
              Taxes &amp; shipping calculated at checkout
            </p>

            {/* Trust mini-badges */}
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center gap-1 font-sans" style={{fontSize:'9px', color:'var(--primary)', letterSpacing:'0.08em'}}>
                <i className="fa-solid fa-lock text-[8px]"></i> Secure
              </span>
              <span style={{width:'1px', height:'10px', background:'rgba(1,114,110,0.2)'}}></span>
              <span className="flex items-center gap-1 font-sans" style={{fontSize:'9px', color:'var(--primary)', letterSpacing:'0.08em'}}>
                <i className="fa-solid fa-truck-fast text-[8px]"></i> Free shipping ₹999+
              </span>
              <span style={{width:'1px', height:'10px', background:'rgba(1,114,110,0.2)'}}></span>
              <span className="flex items-center gap-1 font-sans" style={{fontSize:'9px', color:'var(--primary)', letterSpacing:'0.08em'}}>
                <i className="fa-solid fa-arrow-rotate-left text-[8px]"></i> Easy returns
              </span>
            </div>

            <div className="space-y-3">
              <Link 
                to="/cart" 
                className="btn-primary w-full py-4 justify-center"
                onClick={() => dispatch(toggleCart())}
              >
                VIEW CART <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
              <Link 
                to="/checkout"
                className="w-full py-4 font-sans font-bold uppercase rounded-xl transition-all hover:bg-primary hover:text-white text-center flex items-center justify-center"
                style={{fontSize:'10px', letterSpacing:'0.2em', color:'var(--primary)', border:'1.5px solid rgba(1,114,110,0.25)', background:'white'}}
                onClick={() => dispatch(toggleCart())}
              >
                <i className="fa-solid fa-lock mr-2 text-[9px]"></i> SECURE CHECKOUT
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
