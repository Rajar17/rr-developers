import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Home } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Home className="text-yellow-400 mr-2" size={24} />
              <div>
                <h2 className="text-xl font-bold">RR Developers</h2>
                <p className="text-xs text-blue-300">Building Dreams Since {COMPANY_INFO.yearEstablished}</p>
              </div>
            </div>
            
            <p className="text-blue-200 mb-6 text-sm">
              {COMPANY_INFO.description || 'From Dream to Reality – Trust Us to Build It.'}
            </p>
            
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61576628416875" target="_blank" rel="noopener noreferrer" className="bg-blue-900 hover:bg-blue-800 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/rrdevelopers2/" target="_blank" rel="noopener noreferrer" className="bg-blue-900 hover:bg-blue-800 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://wa.me/919100677906" target="_blank" rel="noopener noreferrer" className="bg-blue-900 hover:bg-blue-800 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Properties</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Premium Open Plot
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Luxury Villa
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Individual Houses
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  North Facing Plot
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Cozy Villa
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Spacious House
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#properties" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Properties
                </a>
              </li>
              <li>
                <a href="#featured" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Featured Project
                </a>
              </li>
              <li>
                <a href="#brochures" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Brochures
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white text-sm flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={18} className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-blue-200 text-sm">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex">
                <Mail size={18} className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-blue-200 text-sm">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex">
                <MapPin size={18} className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-blue-200 text-sm">{COMPANY_INFO.location}</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <p className="text-blue-200 text-sm">
                Monday - Sunday: 9:00 AM - 9:30 PM<br />
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-975 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} RR Developers. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0">
            <ul className="flex space-x-4 text-xs text-blue-300">
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/sitemap.xml" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
