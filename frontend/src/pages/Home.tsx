import React from 'react';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Services from '../components/Services';
import Community from '../components/Community';
import CTA from '../components/CTA';
import MainLayout from '../layouts/MainLayout'; // ✅ You missed this import

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Mission />
      <Services />
      <Community />
      <CTA />
    </main>
  );
};

export default Home;
