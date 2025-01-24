import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Building2, Calculator as Excavator, Car, Pipette as Pipe, Cylinder, Train, Cog } from 'lucide-react';
import 'swiper/css';

const industries = [
  { 
    icon: Building2,
    name: 'CONSTRUCTION',
    iconSize: 24
  },
  { 
    icon: Excavator,
    name: 'MINING',
    iconSize: 24
  },
  { 
    icon: Car,
    name: 'AUTOMOTIVE',
    iconSize: 24
  },
  { 
    icon: Pipe,
    name: 'WATERWORKS',
    iconSize: 24
  },
  { 
    icon: Cylinder,
    name: 'HYDRAULICS',
    iconSize: 24
  },
  { 
    icon: Train,
    name: 'RAIL',
    iconSize: 24
  },
  { 
    icon: Cog,
    name: 'OEMS',
    iconSize: 24
  }
];

const IndustrySwiper = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15} // Reduced spaceBetween to decrease the space between icons
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
              slidesPerView: 6, // Adjusted to show 6 items on larger screens
            },
          }}
          className="industry-swiper w-full"
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-3 cursor-pointer group">
                <div className="w-24 h-24 rounded-full bg-[#f8f8f8] flex flex-col items-center justify-center 
                  transition-all duration-300 hover:shadow-lg">
                  <industry.icon 
                    className="text-gray-600 mb-2 group-hover:text-blue-600 
                    transition-colors duration-300" 
                    size={industry.iconSize}
                    strokeWidth={1.5}
                  />
                  <span className="text-[12px] font-medium text-gray-600 text-center tracking-wider">
                    {industry.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IndustrySwiper;








