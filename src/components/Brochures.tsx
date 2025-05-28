import React from 'react';
import { FileText, Download, Upload } from 'lucide-react';
import { BROCHURES } from '../utils/constants';

const Brochures: React.FC = () => {
  return (
    <section id="brochures" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Our Brochures</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Download our brochures to learn more about our projects and offerings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BROCHURES.map(brochure => (
            <div key={brochure.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={brochure.thumbnail} 
                  alt={brochure.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white text-blue-900 rounded-full p-3">
                    <Download size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-blue-900 mb-1">{brochure.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{brochure.description}</p>
                <a
                  href="#"
                  className="flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-900 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <FileText size={16} className="mr-2" />
                  Download Brochure
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Upload your own brochure section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-blue-900">Upload Your Brochures</h3>
            <p className="text-gray-600 text-sm mt-1">
              Customize our website with your own company brochures
            </p>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="mx-auto text-blue-900 mb-3" size={32} />
            <p className="text-gray-600 mb-2">Drag and drop your files here, or</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Browse Files
            </button>
            <p className="text-gray-500 text-xs mt-3">
              Supported formats: PDF, JPG, PNG (Max size: 10MB)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochures;