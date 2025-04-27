 // components/Community.tsx
import React from 'react';

const Community: React.FC = () => {
  return (
<section className="py-20 relative z-1 bg-gradient-to-t from-[#102325af] to-[#AA6F02B2]/30">
<div className="container mx-auto px-6">
        <SectionHeader 
          title="Our Community" 
          description="Join a thriving network of innovators, developers, and visionaries shaping Africa's tech future."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CommunityMember 
            imageUrl="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20African%20female%20tech%20entrepreneur%20with%20confident%20expression%2C%20modern%20business%20attire%2C%20neutral%20studio%20background%20with%20soft%20lighting%2C%20professional%20headshot%20style&width=200&height=200&seq=community-1&orientation=squarish"
            name="Amara Okafor"
            role="AI Developer & Mentor"
            quote="AlgoNexum provided me with the skills and network to build AI solutions that address real challenges in my community."
          />
          <CommunityMember 
            imageUrl="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20African%20male%20software%20engineer%20with%20friendly%20smile%2C%20casual%20professional%20attire%2C%20neutral%20studio%20background%20with%20soft%20lighting%2C%20professional%20headshot%20style&width=200&height=200&seq=community-2&orientation=squarish"
            name="Ramspheld Onyango"
            role="Startup Founder"
            quote="The mentorship and resources at AlgoNexum helped me transform my idea into a thriving tech business serving clients globally."
          />
          <CommunityMember 
            imageUrl="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20African%20female%20UX%20designer%20with%20creative%20style%2C%20modern%20professional%20look%2C%20neutral%20studio%20background%20with%20soft%20lighting%2C%20professional%20headshot%20style&width=200&height=200&seq=community-3&orientation=squarish"
            name="Zainab Diallo"
            role="UX Designer"
            quote="AlgoNexum's academy gave me the tools to create user experiences that blend global best practices with African perspectives."
          />
        </div>

        <div className="mt-12 text-center">
          <Button href="#">Join Our Community</Button>
        </div>
      </div>
    </section>
  );
};

const SectionHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="w-24 h-1 bg-[#007B8A] mx-auto mb-8"></div>
      <p className="max-w-3xl mx-auto text-lg text-gray-300">{description}</p>
    </div>
  );
};

const CommunityMember: React.FC<{ imageUrl: string; name: string; role: string; quote: string }> = ({ 
  imageUrl, 
  name, 
  role, 
  quote 
}) => {
  return (
    <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#007B8A]/30 p-8 rounded-lg">
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#007B8A]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-[#FFB100] text-center mb-4">{role}</p>
      <p className="text-gray-300 text-center">"{quote}"</p>
    </div>
  );
};

const Button: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a href={href} className="px-8 py-3 bg-[#007B8A] text-white rounded-button hover:bg-[#006B7A] transition-colors duration-300 inline-block whitespace-nowrap cursor-pointer">
      {children}
    </a>
  );
};

export default Community;
