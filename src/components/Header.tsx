import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../utils/constants';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[80px] will-change-transform">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center h-full">
        <div className="flex items-center">
          <img
            src="/assets/logo.jpeg"
            alt="RR Developers Logo"
            className="w-12 h-12 mr-2 rounded-full"
            onError={(e) => (e.currentTarget.src = 'https://placehold.co/48x48?text=Logo')}
          />
          <div>
            <Link to="/" className="text-2xl font-serif text-blue-975 font-bold">
              RR Developers
            </Link>
            <p className="text-sm text-gray-600">Premium Real Estate in Rajahmundry</p>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-975 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-[80px] left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300`}>
          {/* Main Navigation Links */}
          <ul className="md:flex md:space-x-6">
            <li>
              <Link
                to="/"
                className={`block py-2 px-4 text-sm ${
                  location.pathname === '/' ? 'text-blue-975 font-semibold' : 'text-gray-700'
                } hover:text-blue-975 transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-properties"
                className={`block py-2 px-4 text-sm ${
                  location.pathname === '/all-properties' ? 'text-blue-975 font-semibold' : 'text-gray-700'
                } hover:text-blue-975 transition-colors`}
              >
                Properties
              </Link>
            </li>
            <li>
              <a
                href="/#projects"
                className={`block py-2 px-4 text-sm ${
                  location.hash === '#projects' ? 'text-blue-975 font-semibold' : 'text-gray-700'
                } hover:text-blue-975 transition-colors`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className={`block py-2 px-4 text-sm ${
                  location.hash === '#projects' ? 'text-blue-975 font-semibold' : 'text-gray-700'
                } hover:text-blue-975 transition-colors`}
              >
                New Projects
              </a>
            </li>
            <li>
              <a
                href="/#brochures"
                className={`block py-2 px-4 text-sm ${
                  location.hash === '#brochures' ? 'text-blue-975 font-semibold' : 'text-gray-700'
                } hover:text-blue-975 transition-colors`}
              >
                Brochures
              </a>
            </li>
          </ul>
          {/* Contact Section */}
          <div className="md:ml-6 mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:space-x-4">
            <ul className="space-y-2 md:space-y-0 md:flex md:space-x-4">
              <li>
                <a
                  href="/#about-us"
                  className={`block py-2 px-4 text-sm ${
                    location.hash === '#about-us' ? 'text-blue-975 font-semibold' : 'text-gray-700'
                  } hover:text-blue-975 transition-colors`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#contact-us"
                  className={`block py-2 px-4 text-sm ${
                    location.hash === '#contact-us' ? 'text-blue-975 font-semibold' : 'text-gray-700'
                  } hover:text-blue-975 transition-colors`}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="mt-2 md:mt-0 space-y-2 md:space-y-0 md:flex md:space-x-4">
              <li className="flex items-center text-sm text-gray-700">
                <FaMapMarkerAlt className="mr-2 text-blue-975" />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-975" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-blue-975 font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-975" />
                <a href="mailto:info@rr-developers.com" className="text-sm text-blue-975 font-semibold">
                  info@rr-developers.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
