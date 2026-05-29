import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../common/CartDrawer';
import MobileMenu from './MobileMenu';
import SearchOverlay from '../common/SearchOverlay';

const Layout = ({ children }) => {
  const location = useLocation();
  const authPaths = ['/login', '/register', '/forgot-password'];
  const isAuthPage = authPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthPage && <Footer />}
      <CartDrawer />
      <MobileMenu />
      <SearchOverlay />
    </div>
  );
};

export default Layout;
