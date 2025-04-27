// components/Mission.tsx
import React from 'react';
import { FaLightbulb, FaUsers, FaGlobeAfrica } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

const Mission: React.FC = () => {
  return (
    <section className="py-20 relative z-1 bg-gradient-to-t from-[#007b8a] to-[#AA6F02B2]/45">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Our Mission" 
          description="AlgoNexum is dedicated to empowering African tech talent, fostering innovation, and building sustainable digital solutions that address local challenges while connecting to global opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MissionCard 
            icon={<FaLightbulb className="w-8 h-8" />}
            title="Innovation Hub"
            description="Creating spaces where ideas flourish and transform into impactful tech solutions tailored for African contexts."
          />
          <MissionCard 
            icon={<FaUsers className="w-8 h-8" />}
            title="Talent Development"
            description="Nurturing the next generation of African tech leaders through comprehensive education and mentorship programs."
          />
          <MissionCard 
            icon={<FaGlobeAfrica className="w-8 h-8" />}
            title="Global Connection"
            description="Building bridges between African innovation and global markets, creating opportunities for collaboration and growth."
          />
        </div>
      </div>
    </section>
  );
};

const SectionHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-gray-200 font-bold mb-4">
{title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#007B8A] to-[#FFB100] mx-auto mb-8 rounded-full"></div>
      <p className="max-w-3xl mx-auto text-lg text-light-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const MissionCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="group bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#007B8A]/30 p-8 rounded-lg hover:transform hover:scale-[1.02] transition-all duration-300 hover:border-[#FFB100]/50">
      <div className="w-16 h-16 bg-gradient-to-br from-[#007B8A] to-[#FFB100] rounded-full flex items-center justify-center mb-6 group-hover:rotate-[15deg] transition-transform">
        <div className="text-2xl text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#FFB100] to-[#FFB100] bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default Mission;