import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../utils/supabase';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  description: string;
  type: string;
}

const PropertyDetails = () => {
  const { id } = useParams(); // Removed explicit type since useParams can infer it
  const [property, setProperty] = useState<Property | null>(null);
  const [brochureUrl, setBrochureUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPropertyAndBrochure = async () => {
      if (!id) {
        setError('Property ID is missing');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // Fetch property from your backend (updated to Render URL)
        const response = await fetch(`https://rr-developers-backend.onrender.com/api/properties/${id}`);
        if (!response.ok) {
          throw new Error('Property not found');
        }
        const propertyData = await response.json();
        setProperty(propertyData);

        // Fetch brochure URL from Supabase Storage
        const { data } = supabase.storage
          .from('brochures')
          .getPublicUrl(`${id}.pdf`);

        if (data?.publicUrl) {
          setBrochureUrl(data.publicUrl);
        } else {
          console.warn('Brochure not found for this property');
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyAndBrochure();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading property details...</p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-975">Property Not Found</h2>
          <p className="text-gray-600 mt-2">{error || "The property you're looking for doesn't exist."}</p>
          <Link to="/" className="mt-4 inline-block bg-blue-975 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-block mb-6 text-blue-975 hover:text-blue-700 transition-colors">
          ← Back to Properties
        </Link>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-blue-975 mb-4">{property.title}</h1>
          <p className="text-gray-600 mb-2"><strong>Location:</strong> {property.location}</p>
          <p className="text-gray-800 font-medium mb-2"><strong>Price:</strong> {property.price.toLocaleString()} INR</p>
          <p className="text-gray-500 mb-4"><strong>Description:</strong> {property.description}</p>
          <p className="text-gray-600 mb-4"><strong>Type:</strong> {property.type}</p>
          {brochureUrl ? (
            <div className="mt-4">
              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View/Download Brochure
              </a>
            </div>
          ) : (
            <p className="text-gray-500 mt-4">No brochure available for this property.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;