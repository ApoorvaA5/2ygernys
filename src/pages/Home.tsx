import React from 'react';
import Hero from '../components/Hero';
import IndustrySwiper from '../components/IndustrySwiper';
import GlobalPresence from '../components/GlobalPresence';

const Home = () => {
  return (
    
        <div className="space-y-0"> {/* Removes vertical spacing between components */}
          <Hero />
          <IndustrySwiper />
          <GlobalPresence />
        </div>
  );
};

export default Home;