import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import AnimatedAIAgents from './AnimatedAIAgents';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-[650px] flex items-center z-0 overflow-hidden"
    >
      {/* --- Layered Background --- */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: "url('/images/Africa1.png')",
        }}
      ></div>

      {/* AMP Neural Network Animation */}
      <div className="absolute inset-0 z-1 opacity-60">
        <AnimatedAIAgents />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 via-[#007B8A]/30 to-[#FFB100]/30 opacity-95"></div>

      {/* Floating Tech Element */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.3, y: 20 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 right-20 w-16 h-16 bg-[#007B8A] rounded-full blur-xl"
      ></motion.div>

      {/* Particles System */}
      <Particles
        id="particles-bg"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 15 },
            color: { value: ["#FFB100", "#007B8A"] },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            move: { 
              enable: true, 
              speed: 0.5,
              direction: "none",
              random: true 
            },
          },
        }}
        className="absolute inset-0 z-2"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24 relative z-30">
        <div className="max-w-3xl space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%"] 
            } : {}}
            transition={{ 
              duration: 1,
              backgroundPosition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl"
            style={{
              background: "linear-gradient(90deg, #FFFFFF, #FFCB9B, #007B8A)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Empowering Businesses with Intelligent Bots and Cutting-Edge Automation Technologies
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-4xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#007B8A] via-[#00C2A8] to-[#FFB100]"
          >
            While Equipping Youth and Entrepreneurs with Future-Ready Skills.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg text-gray-200 mb-8 font-medium max-w-2xl"
          >
            Join a movement shaping the future with smart automation, education, and innovation built for a global impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap gap-5"
          >
            <Button href="#" color="primary">Explore Our Services</Button>
            <Button href="#" variant="outline">Join Our Academy</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Button: React.FC<{ 
  href: string; 
  color?: 'primary' | 'secondary'; 
  variant?: 'solid' | 'outline'; 
  children: React.ReactNode 
}> = ({ href, color = 'primary', variant = 'solid', children }) => {
  const baseClasses = "px-8 py-3.5 font-bold rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer text-lg";
  
  let colorClasses = "";
  if (variant === 'solid') {
    colorClasses = color === 'primary' 
      ? "bg-[#FFB100] text-[#1A1A1A] hover:bg-[#E6A000] hover:shadow-gold" 
      : "bg-[#007B8A] text-white hover:bg-[#006B7A] hover:shadow-cyan";
  } else {
    colorClasses = "bg-transparent border-2 border-[#007B8A] text-white hover:bg-[#007B8A]/20 hover:shadow-cyan";
  }

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${colorClasses}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 180, 0, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.a>
  );
};

export default Hero;