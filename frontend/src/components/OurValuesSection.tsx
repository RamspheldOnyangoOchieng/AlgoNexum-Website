// src/components/OurValuesSection.tsx
import React from 'react';
import { FaLightbulb, FaAward, FaGlobeAfrica, FaLeaf, FaUsers } from 'react-icons/fa';

const OurValuesSection: React.FC = () => {
  const values = [
    {
      icon: <FaLightbulb size={40} />,
      title: 'Innovation',
      description: 'We champion creativity and continuous improvement to lead the future of technology.',
    },
    {
      icon: <FaAward size={40} />,
      title: 'Excellence',
      description: 'We uphold the highest standards in everything we build and deliver.',
    },
    {
      icon: <FaGlobeAfrica size={40} />,
      title: 'Impact',
      description: 'We focus on creating meaningful, scalable solutions for communities and businesses globally.',
    },
    {
      icon: <FaLeaf size={40} />,
      title: 'Sustainability',
      description: 'We design environmentally conscious solutions for a smarter, greener world.',
    },
    {
      icon: <FaUsers size={40} />,
      title: 'Inclusion',
      description: 'We welcome diverse ideas, talents, and perspectives from every background.',
    },
  ];

  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#007B8A] mb-12">
          Our Core Values
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-8 hover:bg-[#007B8A]/10 transition"
            >
              <div className="text-[#FFB100] mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
