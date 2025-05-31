import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Properties from './components/Properties';
import FeaturedProject from './components/FeaturedProject';
import Brochures from './components/Brochures';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PropertyDetails from './components/PropertyDetails';
import AllProperties from './components/AllProperties';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  useEffect(() => {
    document.title = "RR Developers | Premium Real Estate in Rajahmundry";

    const handleClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (!href) return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth',
      });
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          <Header />
          <main className="pt-[100px] md:pt-[80px]">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <AboutUs />
                    <Properties />
                    <FeaturedProject />
                    <Brochures />
                    <ContactUs />
                    <Footer />
                  </>
                }
              />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/all-properties" element={<AllProperties />} />
            </Routes>
            <Toaster position="top-right" />
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
