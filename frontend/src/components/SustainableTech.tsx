import React from 'react';

const SustainableTech = () => {
  return (
    <section className="py-20 bg-[#007B8A] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="max-w-xl mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-['Toxigenesis'] text-white mb-6 animate__animated animate__fadeIn">
              Sustainable Technologies
            </h2>
            <p className="text-lg mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              Empowering businesses and communities with eco-friendly, cutting-edge solutions that promote sustainability, 
              reduce environmental impact, and foster a green future.
            </p>
            <div className="flex gap-4">
              <button className="cta-button-secondary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
              <button className="cta-button-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-w-lg">
            <div className="absolute inset-0 bg-white opacity-25 z-0"></div>
            <img
              src="https://readdy.ai/api/search-image?query=sustainable%20technology"
              alt="Sustainable Technologies"
              className="w-full h-auto object-cover rounded-lg shadow-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableTech;
