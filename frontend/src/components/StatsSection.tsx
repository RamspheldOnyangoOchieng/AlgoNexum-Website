import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-['Toxigenesis'] mb-10">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="stat-card">
            <h3 className="text-5xl font-semibold">500+</h3>
            <p className="text-xl">Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="text-5xl font-semibold">120+</h3>
            <p className="text-xl">Clients Served</p>
          </div>
          <div className="stat-card">
            <h3 className="text-5xl font-semibold">20+</h3>
            <p className="text-xl">Countries Impacted</p>
          </div>
          <div className="stat-card">
            <h3 className="text-5xl font-semibold">100%</h3>
            <p className="text-xl">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
