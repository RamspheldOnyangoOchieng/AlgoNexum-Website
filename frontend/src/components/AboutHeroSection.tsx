import React from 'react';

const AboutHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[80vh] bg-[#1A1A1A] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20digital%20landscape%20with%20neural%20network%20patterns%20in%20dark%20gray%20and%20teal%20blue%20colors.%20Abstract%20technology%20background%20with%20glowing%20nodes%20and%20connections%2C%20subtle%20tech%20elements%20floating%20in%20space%2C%20creating%20a%20modern%20and%20innovative%20atmosphere&width=1440&height=800&seq=1&orientation=landscape')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 to-[#1A1A1A]/90 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-[#007B8A] mb-6">
          AlgoNexum
        </h1>
        <p className="text-2xl md:text-3xl text-white font-semibold mb-4">
          Transforming Africa from Tech Consumers to Tech Creators.
        </p>
        <p className="text-lg text-gray-300 italic">
          Built in Africa. Designed for the World.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
