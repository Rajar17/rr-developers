import React from 'react';

     const FeaturedProject: React.FC = () => {
       const featuredProject = {
         title: 'Jetty Mayfair',
         subtitle: 'Luxury Living Near Rajamahendravaram',
         description:
           'Experience luxury living at its finest with our new project - Jetty Mayfair. Promoted by RR Developers, this premium residential development offers the best of modern amenities and elegant living spaces.',
         features: [
           'Premium Location',
           'World-class Amenities',
           'Modern Architecture',
           'Green Spaces',
           'Secure Community',
           'Smart Home Features',
         ],
         image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
         logo: 'https://images.unsplash.com/photo-1628592101752-6db6e8b240e5?q=80&w=2070&auto=format&fit=crop',
         facing: 'East-facing',
         amenities: [
           'Swimming Pool',
           'Gymnasium',
           'Clubhouse',
           'Children’s Play Area',
           'Jogging Track',
           'Community Hall',
         ],
         parking: 'Dedicated Parking for 2-3 Cars per Unit',
         proximity: {
           hospitals: '3 km to GSL Medical College',
           restaurants: '2 km to Fine Dining Restaurants',
           parks: '1 km to Riverside Park',
           airport: '14 km to Rajahmundry Airport',
           busStand: '4 km to Rajahmundry Bus Stand',
           railwayStation: '5 km to Rajahmundry Railway Station',
         },
       };

       return (
         <section id="projects" className="py-12 bg-gray-100">
           <div className="container mx-auto px-4">
             <h2 className="text-4xl font-serif text-blue-975 font-bold text-center mb-8">
               Featured Project
             </h2>
             <div className="bg-white p-6 rounded-lg shadow-md">
               <img
                 src={featuredProject.image || '/assets/placeholder.jpg'}
                 alt={featuredProject.title || 'Featured Project'}
                 className="w-full h-64 object-cover rounded-lg mb-4"
               />
               <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-2">
                 {featuredProject.title || 'N/A'}
               </h3>
               <p className="text-gray-700 mb-2">{featuredProject.subtitle || 'N/A'}</p>
               <p className="text-gray-700 mb-4">{featuredProject.description || 'No description available.'}</p>
               <div className="mb-4">
                 <h4 className="text-lg font-semibold text-gray-700 mb-2">Features:</h4>
                 <ul className="list-disc pl-5 text-gray-600">
                   {featuredProject.features.map((feature, index) => (
                     <li key={index}>{feature}</li>
                   ))}
                 </ul>
               </div>
               <div className="mb-4">
                 <h4 className="text-lg font-semibold text-gray-700 mb-2">Amenities:</h4>
                 <ul className="list-disc pl-5 text-gray-600">
                   {featuredProject.amenities.map((amenity, index) => (
                     <li key={index}>{amenity}</li>
                   ))}
                 </ul>
               </div>
               <p className="text-gray-700 mb-2">
                 <strong>Facing:</strong> {featuredProject.facing || 'N/A'}
               </p>
               <p className="text-gray-700 mb-2">
                 <strong>Parking:</strong> {featuredProject.parking || 'N/A'}
               </p>
               <div className="mb-4">
                 <h4 className="text-lg font-semibold text-gray-700 mb-2">Proximity:</h4>
                 <ul className="list-disc pl-5 text-gray-600">
                   <li>Hospitals: {featuredProject.proximity.hospitals || 'N/A'}</li>
                   <li>Restaurants: {featuredProject.proximity.restaurants || 'N/A'}</li>
                   <li>Parks: {featuredProject.proximity.parks || 'N/A'}</li>
                   <li>Airport: {featuredProject.proximity.airport || 'N/A'}</li>
                   <li>Bus Stand: {featuredProject.proximity.busStand || 'N/A'}</li>
                   <li>Railway Station: {featuredProject.proximity.railwayStation || 'N/A'}</li>
                 </ul>
               </div>
             </div>
           </div>
         </section>
       );
     };

     export default FeaturedProject;
