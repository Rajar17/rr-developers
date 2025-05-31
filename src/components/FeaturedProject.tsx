import React from 'react';
     import { FEATURED_PROJECT } from '../utils/constants';

     const FeaturedProject: React.FC = () => {
       // Defensive checks for features and amenities
       const features = Array.isArray(FEATURED_PROJECT.features) ? FEATURED_PROJECT.features : [];
       const amenities = Array.isArray(FEATURED_PROJECT.amenities) ? FEATURED_PROJECT.amenities : [];

       return (
         <section id="projects" className="py-12 bg-gray-100">
           <div className="container mx-auto px-4">
             <h2 className="text-4xl font-serif text-blue-975 font-bold text-center mb-8">
               Featured Project
             </h2>
             <div className="bg-white p-6 rounded-lg shadow-md">
               <img
                 src={FEATURED_PROJECT.image || '/assets/placeholder.jpg'}
                 alt={FEATURED_PROJECT.title || 'Featured Project'}
                 className="w-full h-64 object-cover rounded-lg mb-4"
               />
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-2">
                 {FEATURED_PROJECT.title || 'N/A'}
               </h3>
               <p className="text-gray-700 mb-2">{FEATURED_PROJECT.subtitle || 'N/A'}</p>
               <p className="text-gray-700 mb-4">{FEATURED_PROJECT.description || 'No description available.'}</p>
               <div className="mb-4">
                 <h4 className="text-lg font-semibold text-gray-700 mb-2">Features:</h4>
                 {features.length > 0 ? (
                   <ul className="list-disc pl-5 text-gray-600">
                     {features.map((feature, index) => (
                       <li key={index}>{feature}</li>
                     ))}
                   </ul>
                 ) : (
                   <p className="text-gray-600">No features available.</p>
                 )}
               </div>
               <div className="mb-4">
                 <h4 className="text-lg font-semibold text-gray-700 mb-2">Amenities:</h4>
                 {amenities.length > 0 ? (
                   <ul className="list-disc pl-5 text-gray-600">
                     {amenities.map((amenity, index) => (
                       <li key={index}>{amenity}</li>
                     ))}
                   </ul>
                 ) : (
                   <p className="text-gray-600">No amenities available.</p>
                 )}
               </div>
               <p className="text-gray-700 mb-2">
                 <strong>Facing:</strong> {FEATURED_PROJECT.facing || 'N/A'}
               </p>
               <p className="text-gray-700 mb-2">
                 <strong>Parking:</strong> {FEATURED_PROJECT.parking || 'N/A'}
               </p>
               <div className="mb-4">
                 <h4 className="text-lg font-semibold text-gray-700 mb-2">Proximity:</h4>
                 <ul className="list-disc pl-5 text-gray-600">
                   <li>Hospitals: {FEATURED_PROJECT.proximity?.hospitals || 'N/A'}</li>
                   <li>Restaurants: {FEATURED_PROJECT.proximity?.restaurants || 'N/A'}</li>
                   <li>Parks: {FEATURED_PROJECT.proximity?.parks || 'N/A'}</li>
                   <li>Airport: {FEATURED_PROJECT.proximity?.airport || 'N/A'}</li>
                   <li>Bus Stand: {FEATURED_PROJECT.proximity?.busStand || 'N/A'}</li>
                   <li>Railway Station: {FEATURED_PROJECT.proximity?.railwayStation || 'N/A'}</li>
                 </ul>
               </div>
             </div>
           </div>
         </section>
       );
     };

     export default FeaturedProject;
