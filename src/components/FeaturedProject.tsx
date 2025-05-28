import React from 'react';
import { Star, ArrowRight, Check } from 'lucide-react';
import { FEATURED_PROJECT } from '../utils/constants';

const FeaturedProject: React.FC = () => {
  return (
    <section id="featured" className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Star size={16} className="text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-yellow-400">Featured Project</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">{FEATURED_PROJECT.title}</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-blue-100 max-w-3xl mx-auto italic">
            {FEATURED_PROJECT.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Experience Luxury Living</h3>
            <p className="text-blue-100 mb-6">
              {FEATURED_PROJECT.description}
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              {FEATURED_PROJECT.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-yellow-400 mr-2" size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg text-center transition-colors flex items-center justify-center"
              >
                Book a Site Visit
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#brochures" 
                className="bg-white/10 hover:bg-white/20 py-3 px-6 rounded-lg text-center transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <img 
              src={FEATURED_PROJECT.image} 
              alt={FEATURED_PROJECT.title}
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute bottom-4 right-4 bg-blue-900/80 backdrop-blur-sm p-3 rounded-lg hidden md:block">
              <div className="flex items-center">
                <img 
                  src={FEATURED_PROJECT.logo} 
                  alt="Sreemaan Properties Logo"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-xs text-blue-200">Promoted by</p>
                  <p className="font-bold text-sm">Sreemaan Properties</p>
                  <p className="text-xs text-yellow-400">The Golden Empire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;