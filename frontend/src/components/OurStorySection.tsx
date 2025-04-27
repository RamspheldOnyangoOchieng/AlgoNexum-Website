// src/components/OurStorySection.tsx
import React from 'react';

const OurStorySection: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#007B8A] mb-8">
          Our Story
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          AlgoNexum was founded with a powerful belief: Africa and the world deserve to be 
          at the forefront of technological innovation — not just as consumers, but as creators and leaders. 
          Our journey began with a vision to bridge the gap between ideas and execution, 
          by empowering businesses with intelligent automation, and inspiring a new generation with cutting-edge education.
        </p>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Today, AlgoNexum connects global minds, drives business transformation through smart technologies, 
          and builds pathways for young innovators to shape a smarter, more sustainable future. 
          Rooted in creativity, fueled by innovation, and driven by a global mission — we are building what comes next.
        </p>
      </div>
    </section>
  );
};

export default OurStorySection;
