import React from 'react';
import LoginForm from '../../components/authform/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side: Image & Quote */}
      <div className="hidden lg:block relative overflow-hidden bg-bg-deep">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=80" 
          alt="Ayurvedic Ritual" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12">
          <Link to="/" className="mb-8 block">
            <img src="/logo/bgremovepng.png" alt="Veadya" style={{ height: '36px', width: 'auto', display: 'block' }} />
          </Link>
          <blockquote className="text-3xl font-serif text-white leading-relaxed mb-6">
            "The body is your temple. Keep it pure and clean for the soul to reside in."
          </blockquote>
          <p className="text-bloom-pale/60 uppercase tracking-widest text-xs font-medium">— Ancient Wisdom</p>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <Link to="/" className="lg:hidden mb-8 block">
              <img src="/logo/bgremovepng.png" alt="Veadya" style={{ height: '36px', width: 'auto', display: 'block', margin: '0 auto' }} />
            </Link>
            <h1 className="text-4xl font-serif text-text-dark mb-3">Welcome Back</h1>
            <p className="text-gray-500 font-light">Enter your credentials to access your ritual dashboard.</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
