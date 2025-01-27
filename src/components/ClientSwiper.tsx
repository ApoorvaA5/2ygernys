import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Manufacturing from '../assets/Manufacturing.png'; 
import Phoenix from '../assets/Phoenix.png';
import Mcdeniel from '../assets/Mcdeniel.png';
import bradken from '../assets/bradken.png';
import TandS from '../assets/T-S.png';
import Red from '../assets/Red.png';
import SPC from '../assets/SPC.png';
import Stanley from '../assets/StanleyBlack.png';
import unicrest from '../assets/Unicrest.png';
import UEE from '../assets/UEE.png';

const clients = [
  {
    id: "1",
    name: "Manufacturing Technology Inc",
    logo: Manufacturing,
    place: "UK"
  },
  {
    id: "2",
    name: "Phoenix",
    logo: Phoenix,
    place: "USA"
  },
  {
    id: "3",
    name: "Mcdeniel",
    logo: Mcdeniel,
    place: "USA"
  },
  {
    id: "4",
    name: "Bradken",
    logo: bradken,
    place: "USA"
  },
  {
    id: "5",
    name: "T & s",
    logo: TandS,
    place: "USA"
  },
  {
    id: "6",
    name: "Red valve",
    logo: Red,
    place: "USA"
  },
  {
    id: "7",
    name: "Sullivan Process Control",
    logo: SPC,
    place: "USA"
  },
  {
    id: "8",
    name: "Stanley Black and Decker",
    logo: Stanley,
    place: "USA"
  },
  {
    id: "9",
    name: "Unicrest",
    logo: unicrest,
    place: "Australia"
  },
  {
    id: "10",
    name: "UEE",
    logo: UEE,
    place: "Canada"
  },
];

const ClientSwiper = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#448FFF] opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
          Our Trusted Partners
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
          Collaborating with Industry Leaders
        </p>

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
          className="client-swiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div 
                className="flex flex-col items-center justify-center h-32 transition-all duration-300 transform hover:scale-110"
                style={{
                  animation: `fadeSlideUp 0.5s ease-out forwards`,
                }}
              >
                <img 
                  src={client.logo}
                  alt={client.name}
                  className={`max-w-[80%] object-contain mb-2 ${
                    client.name === "Mcdeniel" ? "h-32" : "max-h-[60%]"
                  }`}
                />
                <p className="text-sm text-gray-800 font-medium">{client.place}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSwiper;