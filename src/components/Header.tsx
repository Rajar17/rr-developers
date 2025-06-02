import React, { useState, useEffect } from 'react';
import logo from '../assets/RR-1.jpeg';
import { COMPANY_INFO } from '../utils/constants';

const Header: React.FC = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolledDown(true);
      } else if (currentScrollY <= 50 || currentScrollY < lastScrollY) {
        setIsScrolledDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        isScrolledDown ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-2">
          {/* Main Row: Logo, Title, and Navigation */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo and Title */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="RR Developers Logo"
                  className="h-10 w-10 object-contain rounded-full border border-blue-975"
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-serif text-blue-975 font-bold">
                    RR Developers
                  </h1>
                  <p className="text-sm text-blue-975">
                    Discover Premium Real Estate in Rajahmundry
                  </p>
                </div>
              </div>
              {/* Hamburger Menu Button (Visible on Mobile) */}
              <button
                className="md:hidden text-blue-975 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links and Company Info */}
            <div
              className={`md:flex md:items-center mt-2 md:mt-0 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
            >
              {/* Company Info (Mobile Only) */}
              <div className="md:hidden flex flex-col space-y-0.5 text-[10px] text-gray-900 mb-2">
                <span>📞 {COMPANY_INFO.phone}</span>
                <span>✉️ {COMPANY_INFO.email}</span>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col md:flex-row gap-3 md:gap-3 text-blue-975 text-xs">
                <li>
                  <a href="#home" className="hover:text-blue-700 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#properties" className="hover:text-blue-700 transition-colors">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-blue-700 transition-colors">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-700 transition-colors">
                    Contact
                  </a>
                </li>
              
                <li>
                  <a href="#new-projects" className="hover:text-blue-700 transition-colors whitespace-nowrap">
                    New Projects
                  </a>
                </li>
                {/* Company Info (Desktop Only) */}
                <li className="hidden md:flex md:items-center md:space-x-1 text-gray-900 text-xs">
                  <span>📞 {COMPANY_INFO.phone}</span>
                  <span>✉️ {COMPANY_INFO.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
