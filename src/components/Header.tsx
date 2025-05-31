import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../utils/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/48?text=Logo"
            alt="RR Developers Logo"
            className="w-12 h-12 mr-2"
            onError={(e) => (e.currentTarget.src = '/assets/placeholder.jpg')}
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
        <ul
          className={`md:flex md:space-x-6 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link
              to="/"
              className={`block py-2 px-4 text-base ${
                location.pathname === '/' ? 'text-blue-975 font-semibold' : 'text-gray-700'
              } hover:text-blue-975 transition-colors`}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="/#about-us"
              className={`block py-2 px-4 text-base ${
                location.hash === '#about-us' ? 'text-blue-975 font-semibold' : 'text-gray-700'
              } hover:text-blue-975 transition-colors`}
            >
              About Us
            </a>
          </li>
          <li>
            <Link
              to="/all-properties"
              className={`block py-2 px-4 text-base ${
                location.pathname === '/all-properties' ? 'text-blue-975 font-semibold' : 'text-gray-700'
              } hover:text-blue-975 transition-colors`}
            >
              Properties
            </Link>
          </li>
          <li>
            <a
              href="/#projects"
              className={`block py-2 px-4 text-base ${
                location.hash === '#projects' ? 'text-blue-975 font-semibold' : 'text-gray-700'
              } hover:text-blue-975 transition-colors`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className={`block py-2 px-4 text-base ${
                location.hash === '#projects' ? 'text-blue-975 font-semibold' : 'text-gray-700'
              } hover:text-blue-975 transition-colors`}
            >
              New Projects
            </a>
          </li>
          <li>
            <a
              href="/#brochures"
              className={`block py-2 px-4 text-base ${
                location.hash === '#brochures' ? 'text-blue-975 font-semibold' : 'text-gray-700'
              } hover:text-blue-975 transition-colors`}
            >
              Brochures
            </a>
          </li>
          <li>
            <a
              href="/#contact-us"
              className={`block py-2 px-4 text-base ${
                location.hash === '#contact-us' ? 'text-blue-975 font-semibold' : 'text-gray-700'
              } hover:text-blue-975 transition-colors`}
            >
              Contact Us
            </a>
          </li>
          <li>
            <span className="block py-2 px-4 text-base text-gray-700">
              {COMPANY_INFO.location}
            </span>
          </li>
          <li>
            <a href={`tel:${COMPANY_INFO.phone}`} className="block py-2 px-4 text-base text-blue-975 font-semibold">
              {COMPANY_INFO.phone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
