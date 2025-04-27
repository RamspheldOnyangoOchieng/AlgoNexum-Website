import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-24 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-90" 
           style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=abstract%20technology%20background')" }}></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#007B8A]/90 to-[#FFB100]/40 z-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-['Toxigenesis'] text-white mb-6 animate__animated animate__fadeIn">
            What We Do
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
            Empowering Africa and the world through AI, automation, and sustainable innovation.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="cta-button-secondary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Book a Consultation
            </button>
            <button className="cta-button-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// src/components/HeroSectionWhatWeDo.tsx
// This component is a hero section that highlights the mission and vision of AlgoNexum.
// It features a background image, gradient overlay, and animated text.