import React from 'react';
import { Property } from '../types';
import { PROPERTIES } from '../utils/constants';

const Properties: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-blue-975 mb-12">
          Our Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property: Property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-975 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Type:</strong> {property.type}
                </p>
                <p className="text-gray-800 font-medium mb-2">
                  <strong>Price:</strong> ₹{property.price.toLocaleString()}{' '}
                  {property.type === 'Open Site' ? 'per sq.yrd' : ''}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Facing:</strong> {property.facing}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Area:</strong> {property.area} {property.areaUnit}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Location:</strong> {property.location}
                </p>
                <p className="text-gray-500 mb-2">
                  <strong>Description:</strong> {property.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
