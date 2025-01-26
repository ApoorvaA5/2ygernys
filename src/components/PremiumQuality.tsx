import React from 'react';
import { Shield, Ruler, ClipboardCheck, Lock, Gauge, PenTool as Tools, Microscope, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Ruler,
    title: "Design for Manufacturing Advisory"
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance through Control Plans / PFMEA"
  },
  {
    icon: Shield,
    title: "Stringent Supplier Audits of Systems & Processes"
  },
  {
    icon: Lock,
    title: "Intellectual Property Protection"
  },
  {
    icon: Gauge,
    title: "Instrument & Gage Controls"
  },
  {
    icon: Tools,
    title: "Tooling Design & Simulation Expertise"
  },
  {
    icon: Microscope,
    title: "Design & Development of Custom Attribute Gages"
  },
  {
    icon: Award,
    title: "Internationally Approved & Certified Facilities"
  }
];

const PremiumQuality = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content Section */}
          <div className="lg:w-1/3">
            <h2 className="text-[#00B4D8] text-4xl font-bold mb-4">
              PREMIUM QUALITY
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#8BB8E8]">
              True Savings through Quality<br />and Reliability
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Synergy excels in delivering high-quality, complex engineering solutions for global OEMs. 
              With expertise in diverse manufacturing processes, robust quality control, and lean supply chains, 
              we ensure repeatable quality, real value, and dependable delivery.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-[#00B4D8] text-white px-8 py-3 rounded-lg font-semibold 
                       hover:bg-[#0096B4] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Features Section */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-50 rounded">
                      <feature.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <h4 className="text-gray-800 font-medium">
                      {feature.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumQuality;