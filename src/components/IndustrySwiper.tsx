import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import {
  Pickaxe,
  Wrench,
  Trees,
  Stethoscope,
  Scissors,
  Gauge,
  Goal as Valve,
  Package,
  Lightbulb,
  Wind,
  Cylinder,
  Train,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const industries = [
  { icon: Pickaxe, name: 'Mining' },
  { icon: Wrench, name: 'Commercial Plumbing' },
  { icon: Trees, name: 'Forestry Machinery' },
  { icon: Stethoscope, name: 'Medical Equipment' },
  { icon: Scissors, name: 'Lawn Mowers' },
  { icon: Gauge, name: 'Pumps' },
  { icon: Valve, name: 'Valves' },
  { icon: Package, name: 'Dry Bulk Handling' },
  { icon: Lightbulb, name: 'Heavy-Duty Lighting' },
  { icon: Wind, name: 'Safety Air Guns' },
  { icon: Cylinder, name: 'Hydraulics' },
  { icon: Train, name: 'Railways & Metro Transportation' },
];

const IndustrySwiper = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Updated Title Styling */}
        <h2 className="text-3xl font-bold text-center mb-12 text-[#00B4D8]">
          Industries We Serve
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="industry-swiper"
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              {/* Updated Icon and Text Styles */}
              <div className="flex flex-col items-center p-6 cursor-pointer group">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F0F8FF] via-[#D4EDFA] to-[#A7DBF4] flex items-center justify-center mb-4 group-hover:bg-[#00B4D8] transition-colors duration-300 shadow-md">
                  <industry.icon 
                    className="w-10 h-10 text-[#5A98B8] group-hover:text-white transition-colors duration-300 drop-shadow-md" 
                    style={{ filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1))' }}
                  />
                </div>
                <span className="text-sm font-medium text-center text-gray-600 group-hover:text-[#00B4D8] transition-colors duration-300">
                  {industry.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IndustrySwiper;

