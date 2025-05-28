import React from 'react';
import { MapPin, ArrowRight, Tag } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number, type: string) => {
    if (type === 'Open Site') {
      return `₹${price}/sq.yrd`;
    } else {
      if (price >= 10000000) {
        return `₹${(price / 10000000).toFixed(1)} Cr`;
      } else {
        return `₹${(price / 100000).toFixed(1)} Lac`;
      }
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 bg-blue-900 text-white px-3 py-1 m-2 rounded-full text-xs font-medium">
          {property.type}
        </div>
        {property.isFeatured && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 m-2 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{property.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features && property.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1"></span>
              {feature}
            </span>
          ))}
          {property.features && property.features.length > 3 && (
            <span className="text-blue-600 text-xs font-medium">+{property.features.length - 3} more</span>
          )}
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div>
            <div className="flex items-center">
              <Tag size={14} className="text-blue-600 mr-1" />
              <span className="text-xs text-gray-500">{property.area} {property.areaUnit}</span>
            </div>
            <div className="text-lg font-bold text-blue-900">
              {formatPrice(property.price, property.type)}
            </div>
          </div>
          
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-900 px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center">
            Details
            <ArrowRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;