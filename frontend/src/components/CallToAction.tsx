import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-teal-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-['Toxigenesis'] mb-6">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-xl mb-8">
          Leverage AI and automation to transform your business processes and drive innovation.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#contact"
            className="cta-button-secondary py-3 px-6 text-lg font-semibold rounded-md bg-gold hover:bg-gold/80 transition"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="cta-button-white py-3 px-6 text-lg font-semibold rounded-md bg-teal-700 hover:bg-teal-600 transition"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
