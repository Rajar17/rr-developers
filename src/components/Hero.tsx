import React from 'react';
import { Home, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'multiply'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-4 z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center bg-blue-900/80 px-4 py-2 rounded-full backdrop-blur-sm mb-6">
            <Home size={16} className="mr-2" />
            <span className="text-sm font-medium">Premium Real Estate Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Find Your <span className="text-yellow-400">Dream Property</span> in Rajahmundry
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover premium open plots, luxurious villas, and individual houses designed for modern living.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#properties" 
              className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-center font-medium transition-colors flex items-center justify-center"
            >
              Explore Properties
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-3 px-6 rounded-lg text-center font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
        <span className="text-white text-xs mt-2">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;