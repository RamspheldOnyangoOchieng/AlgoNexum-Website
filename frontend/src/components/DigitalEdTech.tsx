import React from 'react';

const DigitalEdTech = () => {
  return (
    <section className="py-20 bg-[#FFB100] text-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="max-w-xl mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-['Toxigenesis'] text-[#1A1A1A] mb-6 animate__animated animate__fadeIn">
              Digital Education & Technology
            </h2>
            <p className="text-lg mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              Revolutionizing the education system through cutting-edge technology and AI-driven solutions that 
              enable personalized learning, efficient course delivery, and enhanced student engagement.
            </p>
            <div className="flex gap-4">
              <button className="cta-button-secondary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
              <button className="cta-button-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-w-lg">
            <div className="absolute inset-0 bg-[#1A1A1A] opacity-25 z-0"></div>
            <img
              src="https://readdy.ai/api/search-image?query=digital%20education%20technology"
              alt="Digital Education and Technology"
              className="w-full h-auto object-cover rounded-lg shadow-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalEdTech;
