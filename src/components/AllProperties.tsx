import React, { useState, ChangeEvent } from 'react';

     const AllProperties: React.FC = () => {
       const [brochures, setBrochures] = useState<File[]>([]);

       const handleBrochureUpload = (e: ChangeEvent<HTMLInputElement>) => {
         const files = e.target.files;
         if (files) {
           const newFiles = Array.from(files);
           setBrochures(prev => [...prev, ...newFiles]);
         }
       };

       return (
         <section className="py-12 bg-gray-100">
           <div className="container mx-auto px-4">
             <h2 className="text-4xl font-serif text-blue-975 font-bold text-center mb-8">
               All Properties
             </h2>

             {/* Open Plots and Sites */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 Open Plots & Sites
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <p className="text-lg text-gray-700">
                   <strong>Size:</strong> 183 sq yds
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Price:</strong> ₹13,500 per sq yd
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Total Cost:</strong> ₹24,70,500 (183 × ₹13,500)
                 </p>
               </div>
             </div>

             {/* Independent Houses */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 Independent Houses
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <p className="text-lg text-gray-700">
                   <strong>Starting Price:</strong> ₹55,00,000
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Types Available:</strong> Spacious family homes with modern amenities
                 </p>
               </div>
             </div>

             {/* Villas */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 Villas
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <p className="text-lg text-gray-700">
                   <strong>Starting Price:</strong> ₹85,00,000
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Types Available:</strong> Luxury villas with premium facilities
                 </p>
               </div>
             </div>

             {/* 2BHK Houses */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 2BHK Houses
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <p className="text-lg text-gray-700">
                   <strong>Starting Price:</strong> ₹40,00,000
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Details:</strong> Compact and affordable homes, ideal for small families
                 </p>
               </div>
             </div>

             {/* 3BHK Houses */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 3BHK Houses
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <p className="text-lg text-gray-700">
                   <strong>Starting Price:</strong> ₹65,00,000
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Details:</strong> Spacious homes with extra rooms for growing families
                 </p>
               </div>
             </div>

             {/* Duplex Houses */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 Duplex Houses
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <p className="text-lg text-gray-700">
                   <strong>Starting Price:</strong> ₹75,00,000
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Details:</strong> Two-story homes with modern design and privacy
                 </p>
               </div>
             </div>

             {/* Duplex Villas */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 Duplex Villas
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <p className="text-lg text-gray-700">
                   <strong>Starting Price:</strong> ₹1,00,00,000
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Details:</strong> Luxury duplex villas with premium amenities and large spaces
                 </p>
               </div>
             </div>

             {/* Individual Houses */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 Individual Houses
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <p className="text-lg text-gray-700">
                   <strong>Starting Price:</strong> ₹60,00,000
                 </p>
                 <p className="text-lg text-gray-700">
                   <strong>Details:</strong> Customizable homes for independent living
                 </p>
               </div>
             </div>

             {/* Brochure Upload Section */}
             <div className="mb-12">
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-4">
                 Upload Brochures
               </h3>
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <input
                   type="file"
                   accept=".pdf"
                   multiple
                   onChange={handleBrochureUpload}
                   className="mb-4"
                 />
                 {brochures.length > 0 && (
                   <div>
                     <h4 className="text-lg font-semibold text-gray-700 mb-2">
                       Attached Brochures:
                     </h4>
                     <ul className="list-disc pl-5">
                       {brochures.map((file, index) => (
                         <li key={index} className="text-gray-600">
                           {file.name}
                         </li>
                       ))}
                     </ul>
                   </div>
                 )}
               </div>
             </div>
           </div>
         </section>
       );
     };

     export default AllProperties;
