import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import NewLaunch from './components/NewLaunch';
import Properties from './components/Properties';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header />
        <main className="pt-[100px] md:pt-[80px]">
          <Hero id="home" />
          <AboutUs id="about-us" />
           <NewLaunch id="new-launch" />
          <Properties id="properties" />
          <ContactUs id="contact" />
          <Footer />
          <Toaster position="top-right" />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
