import React from 'react';

const GraphicDesign = () => {
  return (
    <section className="py-20 bg-[#FFB100] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="max-w-xl mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-['Toxigenesis'] text-black mb-6 animate__animated animate__fadeIn">
              Graphic Design
            </h2>
            <p className="text-lg mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              Transforming ideas into visual masterpieces that captivate audiences and enhance brand identity through innovative designs.
            </p>
            <div className="flex gap-4">
              <button className="cta-button-secondary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                View Portfolio
              </button>
              <button className="cta-button-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-w-lg">
            <div className="absolute inset-0 bg-black opacity-25 z-0"></div>
            <img
              src="https://readdy.ai/api/search-image?query=graphic%20design"
              alt="Graphic Design"
              className="w-full h-auto object-cover rounded-lg shadow-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
