import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define what a "property" looks like
interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  description: string; // Added description
  type: string; // Added type
}

const Properties = () => {
  // Tell TypeScript that "properties" is an array of Property objects
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProperties = async () => {
      try {
        setLoading(true);
        // Updated to production Render URL
        const response = await fetch('https://rr-developers-backend.onrender.com/api/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  if (loading) {
    return <div className="py-16 text-center">Loading...</div>;
  }

  return (
    <section id="properties" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-blue-975 mb-12">Our Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-975 mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> {property.location}</p>
              <p className="text-gray-800 font-medium mb-2"><strong>Price:</strong> {property.price.toLocaleString()} INR</p>
              <p className="text-gray-500 mb-2"><strong>Description:</strong> {property.description}</p>
              <p className="text-gray-600 mb-4"><strong>Type:</strong> {property.type}</p>
              <Link
                to={`/property/${property.id}`} // Navigates to /property/1 (or 2, 3, etc.)
                className="inline-block bg-blue-975 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;