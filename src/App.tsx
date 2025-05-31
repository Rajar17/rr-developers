import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
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
        top: targetElement.getBoundingClientRect().top + window.scrollY - 100, // Adjusted for header height
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

  const showToast = () => {
    toast.success('Welcome to RR Developers!', {
      style: {
        fontFamily: 'sans-serif',
      },
    });
  };

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
                    <section className="text-center mt-4 mb-16 animate-fadeIn">
                      <h1 className="text-5xl font-serif mb-4"></h1>
                      <p className="text-xl font-sans mb-6 max-w-2xl mx-auto"></p>
                      <button
                        className="mx-auto text-white px-8 py-3 rounded-lg font-sans transition-colors"
                        onClick={showToast}
                      >
                        Get Started
                      </button>
                    </section>
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
            </Routes>
            <Toaster position="top-right" />
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
