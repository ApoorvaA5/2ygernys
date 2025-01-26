import React, { useState, useEffect } from 'react';
import locallyGlobal from '../assets/locally-global.jpg';
import reassuringQuality from '../assets/reassuring-quality.jpg';
import manufacturing from '../assets/manufacturing.jpg';
import attention from '../assets/attention.jpg';
import solution from '../assets/solutions.jpg';


const Hero = () => {
  const images = [
    locallyGlobal,
    reassuringQuality,
    manufacturing,
    attention,
    solution,
  ];

  const headings = [
    'LOCAL GLOBAL',
    'REASSURING QUALITY',
    'MANUFACTURING COMPLEXITY SIMPLIFIED',
    'ATTENTION TO DETAIL',
    'SOLUTION FOR DEMANDING APPLICATION',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Background"
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            <span className="text-[#007FFF]">Synergy</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            {headings[currentIndex]}
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Precision Engineering Solutions for Tomorrow's Challenges
          </p>
         
        </div>
      </div>
    </div>
    
  );
};

export default Hero;


