import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolledDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 transform ${
        isScrolledDown ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3">
          {/* Contact Information (Top Row) */}
          <div className="flex justify-end mb-2">
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>📞 +91-9100677906</span>
              <span>✉️ rrdevelopers23@gmail.com</span>
              <span>📍 Rajahmundry, Andhra Pradesh</span>
            </div>
          </div>

          {/* Main Row: Logo, Title, and Navigation */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <img
                src="src/components/RR logo.img/RR 1.jpeg"
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

            {/* Navigation Links */}
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-4 md:gap-6 text-blue-975">
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
                  <a href="#brochures" className="hover:text-blue-700 transition-colors">
                    Brochures
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-700 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#new-projects" className="hover:text-blue-700 transition-colors">
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