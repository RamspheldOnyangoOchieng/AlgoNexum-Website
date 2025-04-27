// src/components/MeetTheTeamSection.tsx
import React from 'react';

const MeetTheTeamSection: React.FC = () => {
  const team = [
    {
      name: 'Your Name',
      role: 'Founder & CEO',
      description: 'Visionary leader driving AlgoNexum’s global impact through technology, innovation, and education.',
      image: '/assets/founder-avatar.png', // Replace with real image path later
    },
    {
      name: 'Team Member 1',
      role: 'Chief Technology Officer (CTO)',
      description: 'Leading development of intelligent bots, AI systems, and technical innovation.',
      image: '/assets/cto-avatar.png',
    },
    {
      name: 'Team Member 2',
      role: 'Chief Operations Officer (COO)',
      description: 'Oversees business operations, partnerships, and scaling strategies.',
      image: '/assets/coo-avatar.png',
    },
    {
      name: 'Team Member 3',
      role: 'Chief Creative Officer (CCO)',
      description: 'Manages branding, storytelling, and public image of AlgoNexum worldwide.',
      image: '/assets/cco-avatar.png',
    },
    {
      name: 'Team Member 4',
      role: 'Chief Learning Officer (CLO)',
      description: 'Designs and leads tech education programs for students and entrepreneurs globally.',
      image: '/assets/clo-avatar.png',
    },
  ];

  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#007B8A] mb-12">
          Meet Our Team
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6 hover:bg-[#007B8A]/10 transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-6 object-cover bg-gray-500"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-[#FFB100] font-medium mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
