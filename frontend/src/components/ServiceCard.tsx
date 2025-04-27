import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-base mb-6">{description}</p>
        <a
          href={link}
          className="text-primary font-semibold hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
