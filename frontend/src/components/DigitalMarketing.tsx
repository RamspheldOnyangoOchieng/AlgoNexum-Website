import React from 'react';

const DigitalMarketing = () => {
  return (
    <section className="py-20 bg-[#007B8A] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="max-w-xl mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-['Toxigenesis'] mb-6 animate__animated animate__fadeIn">
              Digital Marketing
            </h2>
            <p className="text-lg mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              Accelerating growth through innovative digital marketing strategies tailored to your brand’s goals and audience.
            </p>
            <div className="flex gap-4">
              <button className="cta-button-secondary transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                View Case Studies
              </button>
              <button className="cta-button-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Start Your Campaign
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative max-w-lg">
            <div className="absolute inset-0 bg-black opacity-25 z-0"></div>
            <img
              src="https://readdy.ai/api/search-image?query=digital%20marketing"
              alt="Digital Marketing"
              className="w-full h-auto object-cover rounded-lg shadow-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
