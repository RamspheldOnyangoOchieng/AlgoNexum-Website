// src/pages/About.tsx
import React from 'react';
import AboutHeroSection from '../components/AboutHeroSection';
import OurStorySection from '../components/OurStorySection';
import MissionVisionSection from '../components/MissionVisionSection';
import CoreFocusSection from '../components/CoreFocusSection';
import MeetTheTeamSection from '../components/MeetTheTeamSection';
import OurValuesSection from '../components/OurValuesSection';
import GlobalImpactSection from '../components/GlobalImpactSection';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  return (
    <main className="bg-[#1A1A1A]/30 text-white">
      <AboutHeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <CoreFocusSection />
      <MeetTheTeamSection />
      <OurValuesSection />
      <GlobalImpactSection />
      <CTASection />
    </main>
  );
};

export default AboutPage;