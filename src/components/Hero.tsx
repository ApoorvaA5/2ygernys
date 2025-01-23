import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1664177203336-7d74ed30e59e?auto=format&fit=crop&w=1920&q=80"
        alt="Precision Manufacturing" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            <span className="text-[#00B4D8]">Synergy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Precision Engineering Solutions for Tomorrow's Challenges
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;