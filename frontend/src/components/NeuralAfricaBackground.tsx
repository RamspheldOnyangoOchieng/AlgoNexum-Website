import React from 'react';

const NeuralAfricaBackground: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0"
      viewBox="0 0 1000 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Global Nodes */}
      {/* Africa (Kept as a central node) */}
      <circle cx="400" cy="400" r="8" fill="#007B8A">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* North America */}
      <circle cx="150" cy="200" r="8" fill="#FFB100">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Europe */}
      <circle cx="600" cy="100" r="8" fill="#007B8A">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Asia */}
      <circle cx="800" cy="200" r="8" fill="#FFB100">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* South America */}
      <circle cx="300" cy="600" r="8" fill="#007B8A">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Australia */}
      <circle cx="850" cy="600" r="8" fill="#FFB100">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Connections between continents */}
      {/* Africa <-> North America */}
      <line
        x1="400"
        y1="400"
        x2="150"
        y2="200"
        stroke="#007B8A"
        strokeWidth="2"
        strokeDasharray="5,5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Africa <-> Europe */}
      <line
        x1="400"
        y1="400"
        x2="600"
        y2="100"
        stroke="#FFB100"
        strokeWidth="2"
        strokeDasharray="5,5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Africa <-> Asia */}
      <line
        x1="400"
        y1="400"
        x2="800"
        y2="200"
        stroke="#007B8A"
        strokeWidth="2"
        strokeDasharray="5,5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Africa <-> South America */}
      <line
        x1="400"
        y1="400"
        x2="300"
        y2="600"
        stroke="#FFB100"
        strokeWidth="2"
        strokeDasharray="5,5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Africa <-> Australia */}
      <line
        x1="400"
        y1="400"
        x2="850"
        y2="600"
        stroke="#007B8A"
        strokeWidth="2"
        strokeDasharray="5,5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Additional global connections */}
      {/* Europe <-> Asia */}
      <line
        x1="600"
        y1="100"
        x2="800"
        y2="200"
        stroke="#FFB100"
        strokeWidth="2"
        strokeDasharray="5,5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* South America <-> Australia */}
      <line
        x1="300"
        y1="600"
        x2="850"
        y2="600"
        stroke="#007B8A"
        strokeWidth="2"
        strokeDasharray="5,5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>

      {/* Additional customization */}
      {/* You can add more nodes and connections between various parts of the globe */}
    </svg>
  );
};

export default NeuralAfricaBackground;
