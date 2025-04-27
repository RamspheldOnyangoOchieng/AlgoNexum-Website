// src/components/SocialLinks.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a href="#" className="text-white text-2xl hover:text-[#FFB100]">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#" className="text-white text-2xl hover:text-[#FFB100]">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="#" className="text-white text-2xl hover:text-[#FFB100]">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="text-white text-2xl hover:text-[#FFB100]">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialLinks;
