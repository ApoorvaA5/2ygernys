import React from 'react';
import Logo from '../assets/logo.png'; // Import the logo
import IndiaVideo from '../assets/india.mp4'; // Import the India video

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={Logo}
            alt="Synergy Logo"
            className="h-10 object-contain"
          />
          <video
            src={IndiaVideo}
            className="w-12 h-12 rounded-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-[#00B4D8] transition-colors">Home</a>
          <a href="#" className="text-white hover:text-[#00B4D8] transition-colors">About Us</a>
          <div className="relative group">
            <a href="#" className="text-white hover:text-[#00B4D8] transition-colors flex items-center">
              Products
              <span className="ml-1">▼</span>
            </a>
          </div>
          <a href="#" className="text-white hover:text-[#00B4D8] transition-colors">Solutions</a>
          <a href="#" className="text-white hover:text-[#00B4D8] transition-colors">Contact Us</a>
          <a href="#" className="text-white hover:text-[#00B4D8] transition-colors">Blog</a>
        </div>

        {/* Flags Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative group">
            <img
              src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
              alt="USA Flag"
              className="w-8 h-5 object-cover"
            />
            <span className="absolute hidden group-hover:block text-sm bg-gray-700 text-white rounded p-1 mt-1 left-1/2 transform -translate-x-1/2">
              usa@indiasynergy.com
            </span>
          </div>
          <div className="relative group">
            <img
              src="https://cdn.britannica.com/66/96866-050-BBAE91CE/Flag-European-Union.jpg"
              alt="EU Flag"
              className="w-8 h-5 object-cover"
            />
            <span className="absolute hidden group-hover:block text-sm bg-gray-700 text-white rounded p-1 mt-1 left-1/2 transform -translate-x-1/2">
              europe@indiasynergy.com
            </span>
          </div>
          <div className="relative group">
            <img
              src="https://cdn.britannica.com/68/7068-050-54679E29/Flag-Canada.jpg"
              alt="Canada Flag"
              className="w-8 h-5 object-cover"
            />
            <span className="absolute hidden group-hover:block text-sm bg-gray-700 text-white rounded p-1 mt-1 left-1/2 transform -translate-x-1/2">
              canada@indiasynergy.com
            </span>
          </div>
          <div className="relative group">
            <img
              src="https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg"
              alt="UK Flag"
              className="w-8 h-5 object-cover"
            />
            <span className="absolute hidden group-hover:block text-sm bg-gray-700 text-white rounded p-1 mt-1 left-1/2 transform -translate-x-1/2">
              uk@indiasynergy.com
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;






