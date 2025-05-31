import React from 'react';
  import { BROCHURES } from '../utils/constants';

  const TwoThreeBHKBrochure: React.FC = () => {
    const brochure = BROCHURES.find(b => b.id === '5');

    if (!brochure) {
      return <p className="text-center py-12">Brochure not found.</p>;
    }

    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-blue-975 font-bold text-center mb-8">
            {brochure.title}
          </h2>
          <div className="max-w-2xl mx-auto">
            <img
              src={brochure.thumbnail}
              alt={brochure.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4 text-center">{brochure.description}</p>
            <div className="text-center">
              <a
                href={brochure.thumbnail}
                download
                className="inline-block bg-blue-975 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default TwoThreeBHKBrochure;
