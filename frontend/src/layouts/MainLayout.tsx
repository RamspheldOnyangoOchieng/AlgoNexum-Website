// src/layouts/MainLayout.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NeuralAfricaBackground from '../components/NeuralAfricaBackground';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] text-white font-sans overflow-hidden">
      <NeuralAfricaBackground />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
