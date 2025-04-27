import React from 'react';
import { motion } from 'framer-motion';

const mapData = [
  {
    continent: 'Africa',
    cities: [
      { name: 'Nairobi', x: 50, y: 40, color: 'green' },
      { name: 'Cape Town', x: 80, y: 80, color: 'blue' },
    ],
  },
  {
    continent: 'America',
    cities: [
      { name: 'Silicon Valley', x: 20, y: 30, color: 'red' },
      { name: 'New York', x: 15, y: 10, color: 'purple' },
    ],
  },
  {
    continent: 'Asia',
    cities: [
      { name: 'Bangalore', x: 60, y: 10, color: 'yellow' },
      { name: 'Tokyo', x: 70, y: 20, color: 'orange' },
    ],
  },
  {
    continent: 'Europe',
    cities: [
      { name: 'Berlin', x: 30, y: 20, color: 'pink' },
      { name: 'London', x: 40, y: 10, color: 'cyan' },
    ],
  },
];

const AnimatedAIAgents: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {/* Map background (Can be a real map image or SVG of continents) */}
      <svg
        viewBox="0 0 100 100"
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Africa */}
        <circle cx="50" cy="40" r="1" fill="green" />
        {/* America */}
        <circle cx="20" cy="30" r="1" fill="red" />
        {/* Asia */}
        <circle cx="60" cy="10" r="1" fill="yellow" />
        {/* Europe */}
        <circle cx="30" cy="20" r="1" fill="pink" />

        {/* Add more continent cities... */}
      </svg>

      {/* Draw Lines between Cities representing the interconnections */}
      {mapData.map((continent) =>
        continent.cities.map((startCity, i) =>
          continent.cities.slice(i + 1).map((endCity) => (
            <motion.svg
              key={`${startCity.name}-${endCity.name}`}
              className="absolute w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 3,
                delay: Math.random(),
              }}
              style={{
                pointerEvents: 'none',
              }}
            >
              <line
                x1={`${startCity.x}%`}
                y1={`${startCity.y}%`}
                x2={`${endCity.x}%`}
                y2={`${endCity.y}%`}
                stroke={`hsl(${Math.random() * 360}, 100%, 60%)`}
                strokeWidth="0.5"
                strokeOpacity={0.6}
              />
            </motion.svg>
          ))
        )
      )}

      {/* Neurons (cities) on the map */}
      {mapData.map((continent) =>
        continent.cities.map((city) => (
          <motion.div
            key={city.name}
            className="absolute rounded-full"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: city.color,
              left: `${city.x}%`,
              top: `${city.y}%`,
              borderRadius: '50%',
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
          >
            <motion.span
              className="absolute text-xs text-white"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              {city.name}
            </motion.span>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default AnimatedAIAgents;
