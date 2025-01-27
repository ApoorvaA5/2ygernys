import React from 'react';
import Hero from '../components/Hero';
import IndustrySwiper from '../components/IndustrySwiper';
import GlobalPresence from '../components/GlobalPresence';
import IntegratedManufacturing from '../components/IntegratedManufacturing';
import PremiumQuality from '../components/PremiumQuality';
import SourcingAndProducts from '../components/SourcingAndProducts';
import Performance from '../components/Performance';
import  ClientSwiper from '../components/ClientSwiper';

const Home = () => {
  return (
    <div className="space-y-0"> {/* Removes vertical spacing between components */}
      <Hero />
      <IndustrySwiper />
      <GlobalPresence />
      <IntegratedManufacturing />
      <PremiumQuality />
    <SourcingAndProducts/>
      <Performance />
      < ClientSwiper/>
    </div>
  );
};

export default Home;
