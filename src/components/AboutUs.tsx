import React from 'react';
import { CheckCircle, Award, Users, Building } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">About RR Developers</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Building dreams and transforming lifestyles since {COMPANY_INFO.yearEstablished}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="RR Developers Team" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden md:block">
              <div className="flex items-center">
                <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Award />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Trusted by</p>
                  <p className="font-bold text-blue-900">500+ Happy Families</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              At RR Developers, we are committed to creating exceptional living spaces that blend luxury, 
              comfort, and functionality. Based in {COMPANY_INFO.location}, we specialize in developing premium real 
              estate properties including open plots, villas, and individual houses.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-800">Quality Construction</h4>
                  <p className="text-gray-600">We use the finest materials and advanced construction techniques.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-800">Prime Locations</h4>
                  <p className="text-gray-600">All our properties are situated in strategic locations with excellent connectivity.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-800">Customer Satisfaction</h4>
                  <p className="text-gray-600">Our customers' happiness is our top priority, with transparent dealings and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Building className="text-blue-900 mx-auto mb-3" size={32} />
            <h3 className="text-3xl font-bold text-blue-900">10+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="text-blue-900 mx-auto mb-3" size={32} />
            <h3 className="text-3xl font-bold text-blue-900">500+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="text-blue-900 mx-auto mb-3" size={32} />
            <h3 className="text-3xl font-bold text-blue-900">5+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-900 mx-auto mb-3 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-blue-900">100%</h3>
            <p className="text-gray-600">Quality Assurance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
