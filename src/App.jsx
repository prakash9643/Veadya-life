import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/layout/Layout';
import OfferModal from './components/common/OfferModal';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Cart from './pages/Cart';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPassword from './pages/auth/ForgotPassword';
import CheckoutPage from './pages/Checkout';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import { fetchProductsThunk } from './store/slices/productSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize headless CMS products on mount
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/shop"           element={<Shop />} />
        <Route path="/about"          element={<About />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="/cart"           element={<Cart />} />
        <Route path="/checkout"       element={<CheckoutPage />} />
        <Route path="/product/:id"    element={<ProductDetails />} />
        <Route path="/login"          element={<LoginPage />} />
        <Route path="/register"       element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Fallback to Home for simplicity in this demo */}
        <Route path="*"              element={<Home />} />
      </Routes>
      <OfferModal />
    </Layout>
  );
}

export default App;
