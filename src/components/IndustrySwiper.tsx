import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Calculator as Excavator,  Pipette as Pipe, Cog, Pipette, PipetteIcon,Building2Icon, CarFrontIcon, TrainFrontTunnelIcon, TrainTrackIcon, TrainFrontIcon, TrainFrontTunnel, CarTaxiFrontIcon } from 'lucide-react';
import 'swiper/css';
import { PiCylinderBold, PiFileJsBold, PiPenNibStraight } from 'react-icons/pi';
import { WiDaySnowThunderstorm } from 'react-icons/wi';
import { BiBuildingHouse, BiBuildings } from 'react-icons/bi';
import { HiMiniFingerPrint } from 'react-icons/hi2';
import { MdDining, MdOutlineWaterDamage } from 'react-icons/md';
import { GiMiningHelmet, GiWaterDivinerStick, GiWindTurbine } from 'react-icons/gi';
import { FcAutomotive } from 'react-icons/fc';
import { TbBatteryAutomotive, TbBatteryAutomotiveFilled } from 'react-icons/tb';
import { SiJcb } from 'react-icons/si';
import { FaCcJcb, FaPumpMedical } from 'react-icons/fa';
import { LiaCcJcb } from 'react-icons/lia';

const industries = [
  { 
    icon: BiBuildings,
    name: 'CONSTRUCTION',
    iconSize: 32
  },
  { 
    icon:GiMiningHelmet,
    name: 'MINING',
    iconSize: 32
  },
  { 
    icon:CarTaxiFrontIcon,
    name: 'AUTOMOTIVE',
    iconSize: 32
  },
  { 
    icon:MdOutlineWaterDamage,
    name: 'WATERWORKS',
    iconSize: 32
  },
  { 
    icon: FaPumpMedical,
    name: 'HYDRAULICS',
    iconSize: 32
  },
  { 
    icon: TrainFrontTunnel,
    name: 'RAIL',
    iconSize: 32
  },
  { 
    icon: Cog,
    name: 'OEMS',
    iconSize: 32
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








