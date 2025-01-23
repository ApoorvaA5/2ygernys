import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      
      {/* Page Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold">Welcome to Synergy</h2>
        <p className="mt-4">Start editing to add your content.</p>
      </div>
    </div>
  );
}

export default App;