import React from 'react';
import { Link } from 'react-router-dom';

const sourcingSolutions = [
  "Manufacturing feasibility analysis",
  "Onsite audits of supplier capabilities",
  "Budgetary pricing & true cost analysis",
  "PFMEA, Control Plans",
  "Custom gauges",
  "Tooling control",
  "In-process & final quality inspections",
  "Accredited labs for material testing",
  "Engineering packaging solutions",
  "Real-time updates for on-time deliveries"
];

const products = [
  "Metal Castings, Forgings",
  "Precision Machined Components",
  "Metal Stamping & Fabrication",
  "Welded Assemblies",
  "Motor & Generator Coils",
  "Electrical Insulation & Composites",
  "Injection Moulding of Plastics & Rubber",
  "Epoxy, DMC, SMC",
  "Sub-assemblies",
  "Private Label Contract Manufacturing"
];

const SourcingAndProducts = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sourcing Solutions */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,180,216,0.3)]">
            <h2 className="text-3xl font-bold mb-8 text-[#00B4D8] opacity-0 animate-[fadeSlideUp_0.6s_ease-out_forwards]">
              SOURCING SOLUTIONS
            </h2>
            <div className="space-y-4">
              {sourcingSolutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 opacity-0"
                  style={{
                    animation: `fadeSlideUp 0.5s ease-out ${index * 0.1}s forwards`
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#00B4D8] group-hover:scale-150 transition-transform duration-300" />
                  <p className="text-gray-300 hover:text-[#00B4D8] transition-colors duration-300">
                    {solution}
                  </p>
                </div>
              ))}
            </div>
            <Link 
              to="/solutions"
              className="inline-block mt-8 px-6 py-3 bg-[#00B4D8] text-white rounded-lg 
                       hover:bg-[#0096B4] transition-all duration-300 
                       transform hover:-translate-y-1 hover:shadow-lg
                       opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.8s_forwards]"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Products */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,180,216,0.3)]">
            <h2 className="text-3xl font-bold mb-8 text-[#00B4D8] opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.2s_forwards]">
              PRODUCTS
            </h2>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 opacity-0"
                  style={{
                    animation: `fadeSlideUp 0.5s ease-out ${index * 0.1 + 0.2}s forwards`
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#00B4D8] group-hover:scale-150 transition-transform duration-300" />
                  <p className="text-gray-300 hover:text-[#00B4D8] transition-colors duration-300">
                    {product}
                  </p>
                </div>
              ))}
            </div>
            <Link 
              to="/products"
              className="inline-block mt-8 px-6 py-3 bg-[#00B4D8] text-white rounded-lg 
                       hover:bg-[#0096B4] transition-all duration-300 
                       transform hover:-translate-y-1 hover:shadow-lg
                       opacity-0 animate-[fadeSlideUp_0.6s_ease-out_1s_forwards]"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingAndProducts ;