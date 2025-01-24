import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Pickaxe, Wrench, Trees, Stethoscope, Scissors, Gauge, Goal as Valve, Package, Lightbulb, Wind, Cylinder, Train } from 'lucide-react';

import 'swiper/css';

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
  { icon: Train, name: 'Railways & Metro Transportation' }
];

const IndustrySwiper = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
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
          className="industry-swiper w-full" // Ensure full width
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-6 cursor-pointer group transform transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 
                  group-hover:bg-gradient-to-r from-[#007FFF] to-[#0077B6] 
                  transition-all duration-300 shadow-lg group-hover:shadow-[#007FFF]/20">
                  <industry.icon className="w-12 h-12 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-center text-gray-700 
                  group-hover:text-[#007FFF] transition-colors duration-300
                  group-hover:font-semibold">
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


