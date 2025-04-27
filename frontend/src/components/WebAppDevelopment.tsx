import React from 'react';

const WebAppDevelopment = () => {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="max-w-xl mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-['Toxigenesis'] text-[#FFB100] mb-6 animate__animated animate__fadeIn">
              Web Application Development
            </h2>
            <p className="text-lg mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              We design and develop cutting-edge web applications tailored to meet your business needs, 
              leveraging the latest technologies to ensure scalability, performance, and security.
            </p>
            <div className="flex gap-4">
              <button className="cta-button-secondary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                See Our Work
              </button>
              <button className="cta-button-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Start Your Project
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-w-lg">
            <div className="absolute inset-0 bg-white opacity-25 z-0"></div>
            <img
              src="https://readdy.ai/api/search-image?query=web%20application%20development"
              alt="Web App Development"
              className="w-full h-auto object-cover rounded-lg shadow-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppDevelopment;
