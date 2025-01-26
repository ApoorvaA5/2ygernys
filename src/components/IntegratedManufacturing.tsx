import React from 'react';
import { Settings, Globe, Shield, Layers } from 'lucide-react';

const features = [
  {
    title: "Manufacturing Expertise",
    icon: Settings,
    points: [
      "Team of 100+ engineers",
      "Precision machining",
      "Fabrication & welding",
      "Molding, Castings, Forgings",
      "Hands-on manufacturing process knowledge",
      "Surface treatment & coating, including fully integrated contract assembly"
    ]
  },
  {
    title: "Revolutionizing Global Manufacturing",
    icon: Globe,
    points: [
      "Trusted partner for nearly two decades in manufacturing solutions.",
      "Delivering high-quality products and world-class services.",
      "Serving OEMs across the U.S, Canada, Europe, Australia, the U.K, New Zealand, and Asia."
    ]
  },
  {
    title: "Reassuring Quality",
    icon: Shield,
    points: [
      "Every sourcing strategy focuses on striking the right balance between best-in-class quality and competitiveness.",
      "We strive to help you achieve  \"true\" savings with zero compromise on quality.",
      "Ensuring a dependable supply chain for consistent and reliable delivery."
    ]
  },
  {
    title: "Manufacturing Complexities Simplified",
    icon: Layers,
    points: [
      "Fully integrated value-added sourcing and manufacturing solutions.",
      "Eliminates complexities in lean supply chain management.",
      "Enables seamless management of multiple processes"
    ]
  }
];

const IntegratedManufacturing = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00B4D8]">
          Integrated Off-Shore Manufacturing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <feature.icon className="w-12 h-12 text-[#00B4D8] mb-4" />
                  <h3 className="text-xl font-bold text-[#00B4D8] mb-4">
                    {feature.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 text-gray-700">
                  {feature.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="flex items-start group"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00B4D8] flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span className="group-hover:text-[#00B4D8] transition-colors duration-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegratedManufacturing;