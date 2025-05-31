import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInfoCircle, FaAddressBook, FaHome, FaBuilding, FaFileAlt, FaTasks, FaPlusCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const timeout = setTimeout(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsScrolledDown(true);
        } else if (currentScrollY <= 50 || currentScrollY < lastScrollY) {
          setIsScrolledDown(false);
        }

        setLastScrollY(currentScrollY);
      }, 100); // Debounce delay of 100ms

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform h-[120px] will-change-transform ${
        isScrolledDown ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="bg-white/90 backdrop-blur-md h-full">
        <div className="container mx-auto px-4 py-3">
          {/* Contact Information and About Us/Contact Us (Top Row) */}
          <div className="flex justify-end mb-2">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0 text-xs md:text-sm text-gray-600 text-right">
              <div className="flex space-x-4">
                <a href="#about-us" className="flex items-center hover:text-blue-975 transition-colors">
                  <FaInfoCircle className="mr-1 text-blue-975" />
                  About Us
                </a>
                <a href="#contact" className="flex items-center hover:text-blue-975 transition-colors">
                  <FaAddressBook className="mr-1 text-blue-975" />
                  Contact Us
                </a>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-1 text-blue-975" />
                  Rajahmundry, Andhra Pradesh
                </span>
                <span className="flex items-center">
                  <FaPhone className="mr-1 text-blue-975" />
                  <a href="tel:+91-9100677906" className="hover:text-blue-975 transition-colors">
                    +91-9100677906
                  </a>
                </span>
                <span className="flex items-center">
                  <FaEnvelope className="mr-1 text-blue-975" />
                  <a href="mailto:rrdevelopers23@gmail.com" className="hover:text-blue-975 transition-colors">
                    rrdevelopers23@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Main Row: Logo, Title, and Navigation */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo and Title */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/RR-1.jpeg"
                  alt="RR Developers Logo"
                  className="h-10 w-10 object-contain rounded-full border border-blue-975"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/48x48?text=Logo')}
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
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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

            {/* Navigation Links */}
            <div
              className={`md:flex md:items-center mt-4 md:mt-0 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-blue-975">
                <li>
                  <a href="#home" className="flex items-center hover:text-blue-700 transition-colors">
                    <FaHome className="mr-1 text-blue-975" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#properties" className="flex items-center hover:text-blue-700 transition-colors">
                    <FaBuilding className="mr-1 text-blue-975" />
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#brochures" className="flex items-center hover:text-blue-700 transition-colors">
                    <FaFileAlt className="mr-1 text-blue-975" />
                    Brochures
                  </a>
                </li>
                <li>
                  <a href="#projects" className="flex items-center hover:text-blue-700 transition-colors">
                    <FaTasks className="mr-1 text-blue-975" />
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#new-projects" className="flex items-center hover:text-blue-700 transition-colors">
                    <FaPlusCircle className="mr-1 text-blue-975" />
                    New Projects
                  </a>
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
