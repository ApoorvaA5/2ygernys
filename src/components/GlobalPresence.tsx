import React from 'react';
import { Globe2 } from 'lucide-react';
import mapImage from '../assets/global-presence-map.jpg'; // Adjust the path based on your file structure

const GlobalPresence = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section - Left Side */}
          <div
            className="lg:w-1/2"
            data-aos="fade-right" // AOS animation for fade-in effect
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">CONNECTING INDIA</span> TO{' '}
              <span className="text-blue-600">GLOBAL INDUSTRIAL OEMs</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We are leaders in providing{' '}
              <span className="text-blue-500 font-semibold">
                high-quality custom-engineered products
              </span>{' '}
              and fully integrated supply chain solutions from India, proudly
              serving a worldwide Industrial OEM customer base across the{' '}
              <span className="text-blue-500 font-semibold">
                United States, Canada, UK, Europe, New Zealand, China & Australia
              </span>
              , spanning multiple industrial segments.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>

          {/* Map Section - Right Side */}
          <div
            className="lg:w-1/2"
            data-aos="fade-left" // AOS animation for fade-in effect
          >
            <div className="relative">
              <img
                src={mapImage} // Use the imported image here
                alt="Global Presence Map"
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#00B4D8] rounded-full flex items-center justify-center animate-bounce">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;


