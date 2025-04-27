 // components/CTA.tsx
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative z-1">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=abstract%20technological%20pattern%20with%20glowing%20teal%20and%20yellow%20neural%20network%20nodes%20across%20African%20continent%20silhouette%2C%20representing%20digital%20transformation%20and%20tech%20innovation%2C%20modern%20futuristic%20design%20with%20dark%20background&width=1440&height=400&seq=cta-bg&orientation=landscape')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 "></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Tech Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking to develop new skills, build innovative solutions, or partner with forward-thinking tech experts, AlgoNexum is your gateway to Africa's tech future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="#" color="primary">Start Your Journey</Button>
            <Button href="#" variant="outline">Schedule a Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Button: React.FC<{ href: string; color?: 'primary' | 'secondary'; variant?: 'solid' | 'outline'; children: React.ReactNode }> = ({ 
  href, 
  color = 'primary', 
  variant = 'solid', 
  children 
}) => {
  const baseClasses = "px-8 py-3 font-bold rounded-button transition-colors duration-300 whitespace-nowrap cursor-pointer";
  
  let colorClasses = "";
  if (variant === 'solid') {
    colorClasses = color === 'primary' 
      ? "bg-[#FFB100] text-[#1A1A1A] hover:bg-[#E6A000]" 
      : "bg-[#007B8A] text-white hover:bg-[#006B7A]";
  } else {
    colorClasses = "bg-transparent border-2 border-[#007B8A] text-white hover:bg-[#007B8A]/20";
  }

  return (
    <a href={href} className={`${baseClasses} ${colorClasses}`}>
      {children}
    </a>
  );
};

export default CTA;
