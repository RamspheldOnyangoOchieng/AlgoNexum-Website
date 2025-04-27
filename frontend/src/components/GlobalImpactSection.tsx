// src/components/GlobalImpactSection.tsx
import React from 'react';

const GlobalImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#007B8A] mb-12">
          Our Global Impact
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
          From African cities to global tech hubs, AlgoNexum connects businesses, students, and innovators across continents — building solutions, driving digital transformation, and empowering the next generation to lead with technology.
        </p>

        {/* Optional: Add a world map or Africa-centered world map image */}
        <div className="mt-8 flex justify-center">
          <img
            src="/assets/world-map.svg"
            alt="Global Presence"
            className="w-full max-w-3xl opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;
