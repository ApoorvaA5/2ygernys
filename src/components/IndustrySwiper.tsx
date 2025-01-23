import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Pickaxe, Wrench, Trees, Stethoscope, Scissors, Gauge, Goal as Valve, Package, Lightbulb, Wind, Cylinder, Train } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import'./swiper.css';

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
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold inline-block relative">
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent 
              animate-gradient">
              Industries We Serve
            </span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 
              bg-gradient-to-r from-[#00B4D8] to-[#0077B6] rounded-full 
              animate-pulse"></div>
          </h2>
        </div>
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
              <div className="flex flex-col items-center p-6 cursor-pointer group transform transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 
                  group-hover:bg-gradient-to-r from-[#007FFF] to-[#0077B6] 
                  transition-all duration-300 shadow-lg group-hover:shadow-[#007FFF]/20">
                  <industry.icon className="w-12 h-12 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-center text-gray-700 
                  group-hover:text-#007FFF] transition-colors duration-300
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