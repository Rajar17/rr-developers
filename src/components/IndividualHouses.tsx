import React from 'react';
  import { PROPERTIES } from '../utils/constants';

  const IndividualHouses: React.FC = () => {
    const individualHouses = PROPERTIES.filter(property => property.type === 'Individual House');

    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-blue-975 font-bold text-center mb-8">
            Individual Houses
          </h2>
          {individualHouses.length === 0 ? (
            <p className="text-center text-gray-600">No Individual Houses available at the moment.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualHouses.map(property => (
                <div key={property.id} className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Location:</strong> {property.location}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Area:</strong> {property.area} {property.areaUnit}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Price:</strong> ₹{property.price.toLocaleString()}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Facing:</strong> {property.facing}
                  </p>
                  <p className="text-gray-700 mb-4">{property.description}</p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Features:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {property.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Amenities:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {property.amenities?.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-2">
                    <strong>Parking:</strong> {property.parking}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Proximity:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Hospitals: {property.proximity?.hospitals}</li>
                      <li>Restaurants: {property.proximity?.restaurants}</li>
                      <li>Parks: {property.proximity?.parks}</li>
                      <li>Airport: {property.proximity?.airport}</li>
                      <li>Bus Stand: {property.proximity?.busStand}</li>
                      <li>Railway Station: {property.proximity?.railwayStation}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  };

  export default IndividualHouses;
