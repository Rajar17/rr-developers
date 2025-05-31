import React from 'react';
     import { Link } from 'react-router-dom';

     const FeaturedProject: React.FC = () => {
       return (
         <section className="py-12 bg-white">
           <div className="container mx-auto px-4">
             <h2 className="text-4xl font-serif text-blue-975 font-bold text-center mb-8">
               Featured Projects
             </h2>
             <div className="mb-8">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 Property Highlights
               </h3>
               <ul className="list-disc pl-5 text-gray-700">
                 <li>Open Plots & Sites: 183 sq yds at ₹13,500 per sq yd</li>
                 <li>Independent Houses: Starting from ₹55,00,000</li>
                 <li>Villas: Starting from ₹85,00,000</li>
                 <li>2BHK Houses: Starting from ₹40,00,000</li>
                 <li>3BHK Houses: Starting from ₹65,00,000</li>
                 <li>Duplex Houses: Starting from ₹75,00,000</li>
                 <li>Duplex Villas: Starting from ₹1,00,00,000</li>
                 <li>Individual Houses: Starting from ₹60,00,000</li>
               </ul>
             </div>
             <div className="text-center">
               <Link
                 to="/all-properties"
                 className="inline-block bg-blue-975 text-white px-6 py-3 rounded-lg font-sans hover:bg-blue-700 transition-colors"
               >
                 View All Properties
               </Link>
             </div>
           </div>
         </section>
       );
     };

     export default FeaturedProject;
