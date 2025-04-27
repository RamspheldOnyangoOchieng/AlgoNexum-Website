// components/Footer.tsx
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#007B8A]/30 pt-16 pb-8 relative z-1">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="text-gray-400 mb-6">
              Transforming Africa from tech consumers to tech creators through innovation, education, and collaboration.
            </p>
            <SocialLinks />
          </div>

          <FooterLinks 
            title="Quick Links"
            links={[
              { text: "Home", href: "/" },
              { text: "About Us", href: "/about" },
              { text: "Services", href: "/WhatWeDo" },
              { text: "Academy", href: "#" },
              { text: "Partner With Us", href: "#" },
              { text: "Contact", href: "#" }
            ]}
          />

          <FooterLinks 
            title="Services"
            links={[
              { text: "AI & Automation", href: "#" },
              { text: "Web & App Development", href: "#" },
              { text: "Digital EdTech", href: "#" },
              { text: "Sustainable Tech", href: "#" },
              { text: "Consulting", href: "#" },
              { text: "Training", href: "#" }
            ]}
          />

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ContactInfo />
            <Newsletter />
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <a href="#" className="flex items-center">
        {/* Logo Circle */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FFB100] to-[#FFB100] flex items-center justify-center shadow-lg">
          <img src="/src/assets/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
        </div>

        {/* Logo Text */}
        <span className="ml-2 text-2xl font-semibold text-white">
          <img src="/src/assets/logoword.png" alt="AlgoNexum Logo Word" className="w-auto h-5 object-contain" />
        </span>
      </a>
    </div>
  );
};

const FooterLinks: React.FC<{ title: string; links: Array<{ text: string; href: string }> }> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-6">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-gray-400 hover:text-[#FFB100] transition-colors duration-300 cursor-pointer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <ul className="space-y-3">
      <li className="flex items-start">
        <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#007B8A]"></i>
        <span className="text-gray-400">Tech Hub, Innovation Avenue, Nairobi, Kenya</span>
      </li>
      <li className="flex items-start">
        <i className="fas fa-envelope mt-1 mr-3 text-[#007B8A]"></i>
        <span className="text-gray-400">info@algonexum.com</span>
      </li>
      <li className="flex items-start">
        <i className="fas fa-phone-alt mt-1 mr-3 text-[#007B8A]"></i>
        <span className="text-gray-400">+254 743 864 874</span>
      </li>
    </ul>
  );
};

const Newsletter: React.FC = () => {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold mb-3 text-gray-300">Subscribe to our newsletter</h4>
      <div className="flex">
        <input 
          type="email" 
          placeholder="Your email" 
          className="px-4 py-2 bg-[#1A1A1A] border border-[#007B8A]/50 rounded-l-lg focus:outline-none focus:border-[#007B8A] text-white text-sm w-full"
        />
        <button className="bg-[#007B8A] text-white px-4 rounded-r-lg hover:bg-[#006B7A] transition-colors duration-300 whitespace-nowrap cursor-pointer">
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-[#007B8A]/30 pt-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} AlgoNexum. All rights reserved.</p>
        <div className="flex space-x-6">
          <FooterBottomLink href="#">Privacy Policy</FooterBottomLink>
          <FooterBottomLink href="#">Terms of Service</FooterBottomLink>
          <FooterBottomLink href="#">Cookie Policy</FooterBottomLink>
        </div>
      </div>
    </div>
  );
};

const FooterBottomLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a href={href} className="text-gray-500 text-sm hover:text-[#FFB100] transition-colors duration-300 cursor-pointer">
      {children}
    </a>
  );
};

export default Footer;
