import { Property, Brochure } from '../types';

export const COMPANY_INFO = {
  location: 'Lalacheruvu, Rajahmundry, Andhra Pradesh',
  phone: '+91 9100677906',
  email: 'rrdevelopers23@gmail.com',
  yearEstablished: '2010',
};

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Premium Open Plot',
    type: 'Open Site',
    price: 13500,
    area: 183,
    areaUnit: 'sq.yrds',
    location: 'Bommuru, Rajahmundry',
    facing: 'East',
    description: 'Prime location open plot with excellent connectivity and all amenities nearby.',
    features: ['Corner Plot', 'Gated Community', '24/7 Security', 'All Utilities Available'],
    amenities: ['Street Lighting', 'Underground Drainage', 'Paved Roads'],
    parking: 'Public Parking Nearby',
    proximity: {
      hospitals: '2 km to Apollo Hospital',
      restaurants: '1 km to Local Dining Hubs',
      parks: '0.5 km to Central Park',
      airport: '15 km to Rajahmundry Airport',
      busStand: '3 km to Rajahmundry Bus Stand',
      railwayStation: '4 km to Rajahmundry Railway Station',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    isFeatured: true,
  },
  {
    id: '4',
    title: 'North Facing Plot',
    type: 'Open Site',
    price: 13500,
    area: 183,
    areaUnit: 'sq.yrds',
    location: 'Lalacheruvu, Rajahmundry',
    facing: 'North',
    description: 'Vastu compliant north facing plot in a prime location.',
    features: ['Vastu Compliant', 'Good Neighborhood', 'Near to Schools', 'Easy Access'],
    amenities: ['Street Lighting', 'Underground Drainage', 'Paved Roads'],
    parking: 'Public Parking Nearby',
    proximity: {
      hospitals: '1.5 km to Apollo Hospital',
      restaurants: '1 km to Local Dining Hubs',
      parks: '0.3 km to Lalacheruvu Park',
      airport: '15 km to Rajahmundry Airport',
      busStand: '2.5 km to Rajahmundry Bus Stand',
      railwayStation: '3.5 km to Rajahmundry Railway Station',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
];

// Removed FEATURED_PROJECT since FeaturedProject.tsx is deleted
// Removed BROCHURES since Brochures section is removed
