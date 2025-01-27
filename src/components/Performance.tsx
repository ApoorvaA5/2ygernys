import React from "react";
import { Cog, Timer, CheckCircle, Settings } from "lucide-react";

const stats = [
  {
    icon: Cog,
    number: "1500+ Parts",
    description: "Developed & Under Production",
  },
  {
    icon: Settings,
    number: "200+ Years",
    description: "Combined Engineering Expertise",
  },
  {
    icon: Timer,
    number: "94% On-Time",
    description: "Delivery Performance",
  },
  {
    icon: CheckCircle,
    number: "Less Than 100 ppm",
    description: "Last 19 Years",
  },
];

const Performance = () => {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2574"
          alt="Performance Background"
          className="w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Performance Speaks for Itself
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-[#448FFF] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-[#448FFF] mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                {stat.number}
              </h3>
              <p className="text-gray-300 text-base">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;


