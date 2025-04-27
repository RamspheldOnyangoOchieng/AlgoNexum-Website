// src/components/MissionVisionSection.tsx
import React from 'react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#007B8A] mb-12">
          Our Mission & Vision
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Mission */}
          <div className="bg-[#007B8A]/10 p-8 rounded-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#FFB100] mb-4">Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower businesses with smart automation technologies and equip the next generation of students and entrepreneurs with future-ready digital skills — driving innovation, impact, and sustainable growth worldwide.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#007B8A]/10 p-8 rounded-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[#FFB100] mb-4">Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To shape a smarter, more inclusive, and sustainable world by building a generation of tech creators, innovators, and empowered businesses — with Africa as a catalyst for global transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
