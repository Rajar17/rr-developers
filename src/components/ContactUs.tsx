import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs = () => {
  const googleMapsLink = 'https://maps.app.goo.gl/RtFf9H99mWf8EfSb7';

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-blue-975 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-blue-975 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-975" size={24} />
                <div>
                  <p className="text-gray-600">Rajahmundry, Andhra Pradesh, India</p>
                  <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-975 hover:text-blue-700 underline transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-975" size={24} />
                <div>
                  <p className="text-gray-600">+91 91006777906</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-975" size={24} />
                <div>
                  <p className="text-gray-600">rrdevelopers23@gmial.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold text-blue-975 mb-6">Our Location</h3>
            <div className="w-full h-64 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.0255255318543!2d81.79559747515667!3d17.022417983803848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3006376b58d%3A0xf186bc0c68c4cffe!2sRR%20developers!5e0!3m2!1sen!2sin!4v1748422756276!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;