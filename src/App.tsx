import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustrySwiper from './components/IndustrySwiper';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <IndustrySwiper />
      
      {/* Page Content */}
    
    </div>
  );
}

export default App;