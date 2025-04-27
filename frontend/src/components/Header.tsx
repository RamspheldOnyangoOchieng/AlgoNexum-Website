import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="relative z-10 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-[#007B8A]/30 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              {/* Logo Circle */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFB100] to-[#FFB100] flex items-center justify-center shadow-lg">
                <img src="/src/assets/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
              </div>
              
              {/* Logo Text */}
              <span className="ml-2 text-2xl font-semibold text-white">
                <img src="/src/assets/logoword.png" alt="AlgoNexum Logo Word" className="w-auto h-5 object-contain" />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/WhatWeDo">What We Offer</NavLink>
            <NavLink to="#">Academy</NavLink>
            <NavLink to="#">Partner With Us</NavLink>
            <NavLink to="#">Contact</NavLink>
          </div>

          {/* Login and Get Started Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="#" className="px-4 py-2 rounded-md text-white hover:text-[#FFB100] transition-all">Login</NavLink>
            <NavLink to="#" className="px-6 py-2 bg-[#007B8A] hover:bg-[#006B7A] rounded-full text-white transition-all">Get Started</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-[#1A1A1A] rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="#">What We Offer</NavLink>
              <NavLink to="#">Academy</NavLink>
              <NavLink to="#">Partner With Us</NavLink>
              <NavLink to="#">Contact</NavLink>
              <div className="pt-4 flex flex-col space-y-3">
                <NavLink to="#" className="px-4 py-2 border border-white/30 hover:bg-white/10 rounded-md transition-all">Login</NavLink>
                <NavLink to="#" className="px-4 py-2 bg-[#007B8A] hover:bg-[#006B7A] rounded-md text-white transition-all">Get Started</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({ to, className = '', children }) => {
  return (
    <Link to={to} className={`text-white hover:text-[#FFB100] transition-colors duration-300 whitespace-nowrap cursor-pointer ${className}`}>
      {children}
    </Link>
  );
};

export default Header;
