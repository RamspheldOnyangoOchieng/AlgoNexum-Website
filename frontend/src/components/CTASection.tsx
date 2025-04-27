// src/components/CTASection.tsx
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#007B8A] text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Shape the Future?
        </h2>
        <p className="text-lg md:text-xl text-[#1A1A1A] mb-8">
          Whether you're a business looking to innovate, a student ready to learn, or a partner ready to make an impact — AlgoNexum is your next step into the future of technology.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/partner-with-us"
            className="px-8 py-4 bg-[#FFB100] text-[#1A1A1A] font-bold rounded-md hover:bg-[#E6A000] transition-colors"
          >
            Partner With Us
          </a>
          <a
            href="/academy"
            className="px-8 py-4 border-2 border-white font-bold rounded-md hover:bg-white hover:text-[#007B8A] transition-colors"
          >
            Join the Academy
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
