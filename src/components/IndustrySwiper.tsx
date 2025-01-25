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
    <div className="bg-white -mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0} // No space between slides
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
          className="industry-swiper w-full !p-0"
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-1 cursor-pointer group">
                <div
                  className="w-20 h-20 rounded-full bg-[#f8f8f8] flex flex-col items-center justify-center 
                  transition-all duration-300 hover:shadow-lg"
                >
                  <industry.icon
                    className="text-gray-600 mb-1 group-hover:text-blue-600 
                    transition-colors duration-300"
                    size={industry.iconSize}
                    strokeWidth={1.5}
                  />
                  <span className="text-[10px] font-medium text-gray-600 text-center tracking-wider">
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








