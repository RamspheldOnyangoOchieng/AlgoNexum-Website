import React from 'react';
import HeroSection from '../components/HeroSectionWhatWeDo';
import AIAndAutomation from '../components/AIAndAutomation';
import WebAppDevelopment from '../components/WebAppDevelopment';
import DigitalEdTech from '../components/DigitalEdTech';
import SustainableTech from '../components/SustainableTech';
import UIUXDesign from '../components/UIUXDesign';
import GraphicDesign from '../components/GraphicDesign';
import DigitalMarketing from '../components/DigitalMarketing';
import ServiceCard from '../components/ServiceCard';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';

const WhatWeDo = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* AI and Automation Section */}
      <AIAndAutomation />

      {/* Web App Development Section */}
      <WebAppDevelopment />

      {/* Digital EdTech Section */}
      <DigitalEdTech />

      {/* Sustainable Tech Section */}
      <SustainableTech />

      {/* UI/UX Design Section */}
      <UIUXDesign />

      {/* Graphic Design Section */}
      <GraphicDesign />

      {/* Digital Marketing Section */}
      <DigitalMarketing />

      {/* Service Cards */}
      <div className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-['Toxigenesis'] text-teal-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceCard title="Service 1" description="Brief description about the service." />
            <ServiceCard title="Service 2" description="Brief description about the service." />
            <ServiceCard title="Service 3" description="Brief description about the service." />
            {/* Add more ServiceCard components as needed */}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};

export default WhatWeDo;
