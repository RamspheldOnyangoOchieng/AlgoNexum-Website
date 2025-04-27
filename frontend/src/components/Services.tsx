// components/Services.tsx
import React from 'react';
import { FaRobot, FaCode, FaChalkboardTeacher, FaLeaf } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const Services: React.FC = () => {
  return (
    <section className="py-20 relative z-1 bg-gradient-to-b from-[#007B8A] to-[#AA6F02B2]/30">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="What We Offer" 
          description="Comprehensive tech solutions designed to transform ideas into reality and empower businesses across Africa."
          accentColor="secondary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={<FaRobot className="w-6 h-6" />}
            title="AI & Automation"
            description="Custom AI solutions and automation tools that streamline operations and unlock new possibilities."
            imageUrl="https://readdy.ai/api/search-image?query=futuristic%20AI%20visualization%20with%20neural%20networks%20and%20data%20streams%20in%20teal%20and%20yellow%20colors%2C%20showing%20artificial%20intelligence%20concept%20with%20abstract%20digital%20patterns%2C%20modern%20tech%20aesthetic%20against%20dark%20background&width=600&height=400&seq=ai-service&orientation=landscape"
          />
          <ServiceCard 
            icon={<FaCode className="w-6 h-6" />}
            title="Web & App Development"
            description="End-to-end development services creating powerful, scalable, and user-friendly digital experiences."
            imageUrl="https://readdy.ai/api/search-image?query=modern%20web%20and%20mobile%20app%20development%20concept%20with%20code%20interfaces%20and%20responsive%20design%20elements%20in%20teal%20and%20yellow%20highlights%2C%20showing%20digital%20product%20creation%20process%2C%20professional%20tech%20development%20visualization%20against%20dark%20background&width=600&height=400&seq=web-dev-service&orientation=landscape"
          />
          <ServiceCard 
            icon={<FaChalkboardTeacher className="w-6 h-6" />}
            title="Digital EdTech"
            description="Innovative educational technology solutions that make learning accessible, engaging, and effective."
            imageUrl="https://readdy.ai/api/search-image?query=digital%20education%20technology%20concept%20with%20virtual%20classroom%20and%20interactive%20learning%20elements%20in%20teal%20and%20yellow%20accents%2C%20showing%20e-learning%20and%20educational%20innovation%2C%20modern%20tech-enabled%20teaching%20visualization%20against%20dark%20background&width=600&height=400&seq=edtech-service&orientation=landscape"
          />
          <ServiceCard 
            icon={<FaLeaf className="w-6 h-6" />}
            title="Sustainable Tech"
            description="Environmentally conscious technology solutions addressing Africa's unique sustainability challenges."
            imageUrl="https://readdy.ai/api/search-image?query=sustainable%20technology%20concept%20with%20renewable%20energy%20and%20eco-friendly%20tech%20solutions%20in%20teal%20and%20yellow%20highlights%2C%20showing%20environmental%20innovation%20and%20green%20technology%2C%20modern%20sustainable%20development%20visualization%20against%20dark%20background&width=600&height=400&seq=sustainable-tech&orientation=landscape"
          />
        </div>
      </div>
    </section>
  );
};

const SectionHeader: React.FC<{ title: string; description: string; accentColor?: 'primary' | 'secondary' }> = ({ 
  title, 
  description,
  accentColor = 'primary'
}) => {
  const gradient = accentColor === 'primary' 
    ? 'from-[#FFB100] via-[#FF8A00] to-[#007B8A]' 
    : 'from-[#007B8A] via-[#00C2A8] to-[#FFB100]';

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl text-gray-200 font-bold mb-4">
      {title}
      </h2>
      <div className="w-24 h-1 bg-light mx-auto mb-8 rounded-full"></div>
      <p className="max-w-3xl mx-auto text-lg text-light-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServiceCard: React.FC<{ 
  icon: React.ReactNode;
  title: string; 
  description: string; 
  imageUrl: string 
}> = ({ icon, title, description, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer h-[400px]">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent"></div>
      
      <div className="relative p-8 h-full flex flex-col justify-end">
        <div className="w-14 h-14 bg-gradient-to-br from-[#007B8A] to-[#FFB100] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
          <div className="text-white text-xl">{icon}</div>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#FFB100] transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a href="#" className="inline-flex items-center text-[#007B8A] hover:text-[#FFB100] transition-colors font-medium">
          Learn More
          <FiArrowUpRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Services;