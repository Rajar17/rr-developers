import React from 'react';

const Brochures: React.FC = () => {
  const brochures = [
    {
      id: '1',
      title: 'RR Developers Company Profile',
      description: 'Learn about our company history, vision, and achievements',
      thumbnail: 'https://images.unsplash.com/photo-2884866?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section id="brochures" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-blue-975 font-bold text-center mb-8">
          Our Brochures
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brochures.map(brochure => (
            <div key={brochure.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={brochure.thumbnail || '/assets/placeholder.jpg'}
                alt={brochure.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-serif text-blue-975 font-semibold mb-2">
                {brochure.title || 'N/A'}
              </h3>
              <p className="text-gray-700 mb-4">{brochure.description || 'No description available.'}</p>
              <a
                href={brochure.thumbnail || '#'}
                download
                className="inline-block bg-blue-975 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Brochure
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brochures;
