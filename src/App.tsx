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
     import OpenSites from './components/OpenSites';
     import Villas from './components/Villas';
     import IndividualHouses from './components/IndividualHouses';
     import TwoBHK from './components/TwoBHK';
     import ThreeBHK from './components/ThreeBHK';
     import DuplexHouses from './components/DuplexHouses';
     import DuplexVillas from './components/DuplexVillas';
     import CompanyProfileBrochure from './components/CompanyProfileBrochure';
     import JettyMayfairBrochure from './components/JettyMayfairBrochure';
     import OpenPlotsBrochure from './components/OpenPlotsBrochure';
     import VillasIndividualHousesBrochure from './components/VillasIndividualHousesBrochure';
     import TwoThreeBHKBrochure from './components/TwoThreeBHKBrochure';
     import DuplexBrochure from './components/DuplexBrochure';
     import ErrorBoundary from './components/ErrorBoundary';
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
                 <ErrorBoundary>
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
                     <Route path="/open-sites" element={<OpenSites />} />
                     <Route path="/villas" element={<Villas />} />
                     <Route path="/individual-houses" element={<IndividualHouses />} />
                     <Route path="/2bhk" element={<TwoBHK />} />
                     <Route path="/3bhk" element={<ThreeBHK />} />
                     <Route path="/duplex-houses" element={<DuplexHouses />} />
                     <Route path="/duplex-villas" element={<DuplexVillas />} />
                     <Route path="/brochures/company-profile" element={<CompanyProfileBrochure />} />
                     <Route path="/brochures/jetty-mayfair" element={<JettyMayfairBrochure />} />
                     <Route path="/brochures/open-plots" element={<OpenPlotsBrochure />} />
                     <Route path="/brochures/villas-individual-houses" element={<VillasIndividualHousesBrochure />} />
                     <Route path="/brochures/2bhk-3bhk" element={<TwoThreeBHKBrochure />} />
                     <Route path="/brochures/duplex" element={<DuplexBrochure />} />
                   </Routes>
                 </ErrorBoundary>
                 <Toaster position="top-right" />
               </main>
             </div>
           </Router>
         </AuthProvider>
       );
     }

     export default App;
