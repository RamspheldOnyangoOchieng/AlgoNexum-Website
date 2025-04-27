// src/components/CoreFocusSection.tsx
import React from 'react';
import { FaRobot, FaLaptopCode, FaGraduationCap, FaLeaf } from 'react-icons/fa';

const CoreFocusSection: React.FC = () => {
  const focusAreas = [
    {
      icon: <FaRobot size={40} />,
      title: 'AI & Automation',
      description:
        'Custom AI solutions, intelligent bots, and automation tools that streamline operations and unlock new opportunities for businesses globally.',
      highlight: true, // Main focus
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: 'Web & App Development',
      description:
        'Building powerful, scalable, and user-friendly digital experiences for startups, enterprises, and organizations around the world.',
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: 'Digital EdTech',
      description:
        'Delivering innovative tech education to students, entrepreneurs, and professionals, preparing them with future-ready digital skills.',
    },
    {
      icon: <FaLeaf size={40} />,
      title: 'Sustainable Tech',
      description:
        'Developing environmentally conscious technologies that tackle global sustainability challenges through innovation.',
    },
  ];

  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#007B8A] mb-12">
          What We Focus On
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-transform duration-300 ${
                area.highlight
                  ? 'bg-[#007B8A]/20 border-2 border-[#007B8A] hover:scale-105'
                  : 'bg-[#1A1A1A] border border-gray-700 hover:bg-[#007B8A]/10 hover:scale-105'
              }`}
            >
              <div className="text-[#FFB100] mb-4 flex justify-center">{area.icon}</div>
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-300 text-base">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFocusSection;
