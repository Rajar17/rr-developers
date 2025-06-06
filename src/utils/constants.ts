import { Property } from '../types';

export const COMPANY_INFO = {
  location: 'Rajahmundry, Andhra Pradesh',
  phone: '+91-9100677906',
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
    location: 'Gadala, Rajahmundry',
    facing: 'East',
    description: 'Prime location open plot with excellent connectivity and all amenities nearby.',
    features: ['Corner Plot', 'Gated Community', '24/7 Security', 'Parking Space Available', 'All Utilities Available'],
    amenities: ['Street Lighting', 'Underground Drainage', 'Paved Roads'],
    parking: '1 Covered Parking Space',
    proximity: {
      hospitals: '3.5 km to Apollo Hospital',
      restaurants: '2 km to Local Dining Hubs',
      parks: '0.8 km to Gadala Park',
      airport: '3 km to Rajahmundry Airport',
      busStand: '10.5 km to Rajahmundry Bus Stand',
      railwayStation: '12.5 km to Rajahmundry Railway Station',
    },
    image: 'https://i.pinimg.com/736x/10/60/e5/1060e5a452542826146ce2e6d910fd0b.jpg',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Luxury Villa',
    type: 'Villa',
    price: 9500000,
    area: 2400,
    areaUnit: 'sq.ft',
    location: 'Diwancheruvu, Rajahmundry',
    facing: 'North-East',
    description: 'A modern luxury villa with spacious interiors, premium finishes, and a private garden.',
    features: ['3 Bedrooms', 'Modular Kitchen', 'Private Garden', 'Smart Home Features', 'Parking Space Available'],
    amenities: ['Swimming Pool', 'Gym', 'Parking Space Available', 'Gated Community', '24/7 Security'],
    parking: '2 Covered Parking Spaces',
    proximity: {
      hospitals: '13 km to Apollo Hospital',
      restaurants: '2 km to Local Dining Hubs',
      parks: '1 km to Diwancheruvu Park',
      airport: '10 km to Rajahmundry Airport',
      busStand: '8 km to Rajahmundry Bus Stand',
      railwayStation: '10 km to Rajahmundry Railway Station',
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Independent House',
    type: 'Individual House',
    price: 6500000,
    area: 1800,
    areaUnit: 'sq.ft',
    location: 'Bommuru, Rajahmundry',
    facing: 'West',
    description: 'A well-designed independent house perfect for families, with ample ventilation and parking.',
    features: ['4 Bedrooms', 'Terrace', 'Spacious Living Area', 'Vastu Compliant', 'Parking Space Available'],
    amenities: ['Street Lighting', 'Underground Drainage', 'Paved Roads'],
    parking: '1 Covered Parking Space',
    proximity: {
      hospitals: '1.8 km to Apollo Hospital',
      restaurants: '0.8 km to Local Dining Hubs',
      parks: '0.4 km to Bommuru Park',
      airport: '14.5 km to Rajahmundry Airport',
      busStand: '5.8 km to Rajahmundry Bus Stand',
      railwayStation: '3.8 km to Rajahmundry Railway Station',
    },
    image: 'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'North Facing Plot',
    type: 'Open Site',
    price: 13500,
    area: 183,
    areaUnit: 'sq.yrds',
    location: 'Gadala, Rajahmundry',
    facing: 'North',
    description: 'Vastu compliant north facing plot in a prime location.',
    features: ['Vastu Compliant', 'Good Neighborhood', 'Near to Schools', 'Easy Access', 'Parking Space Available'],
    amenities: ['Street Lighting', 'Underground Drainage', 'Paved Roads'],
    parking: '1 Covered Parking Space',
    proximity: {
      hospitals: '3.5 km to Apollo Hospital',
      restaurants: '2 km to Local Dining Hubs',
      parks: '0.8 km to Gadala Park',
      airport: '3 km to Rajahmundry Airport',
      busStand: '10.5 km to Rajahmundry Bus Stand',
      railwayStation: '12.5 km to Rajahmundry Railway Station',
    },
    image: 'https://images.pexels.com/photos/17602526/pexels-photo-17602526/free-photo-of-an-empty-field-and-modern-apartment-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    title: 'Cozy Villa',
    type: 'Villa',
    price: 7200000,
    area: 2000,
    areaUnit: 'sq.ft',
    location: 'Diwancheruvu, Rajahmundry',
    facing: 'South',
    description: 'A cozy villa with modern amenities, ideal for a small family looking for comfort.',
    features: ['2 Bedrooms', 'Open Kitchen', 'Balcony', 'Energy Efficient Design', 'Parking Space Available'],
    amenities: ['Community Hall', 'Gated Community', '24/7 Security'],
    parking: '1 Covered Parking Space',
    proximity: {
      hospitals: '2.5 km to Apollo Hospital',
      restaurants: '1.5 km to Local Dining Hubs',
      parks: '0.8 km to Diwancheruvu Park',
      airport: '9 km to Rajahmundry Airport',
      busStand: '9.5 km to Rajahmundry Bus Stand',
      railwayStation: '10.5 km to Rajahmundry Railway Station',
    },
    image: 'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
    {
    id: '6',
    title: '2BHK House',
    type: '2BHK',
    price: 5000000,
    area: 1600,
    areaUnit: 'sq.ft',
    location: 'Bommuru, Rajahmundry',
    facing: 'East',
    description: '2BHK house with a modern layout, close to essential amenities.',
    features: ['2 Bedrooms', 'Large Balcony', 'Modern Bathrooms', 'Natural Light', 'Parking Space Available'],
    amenities: ['Street Lighting', 'Underground Drainage', 'Paved Roads'],
    parking: '1 Covered Parking Space',
    proximity: {
      hospitals: '1.8 km to Apollo Hospital',
      restaurants: '0.8 km to Local Dining Hubs',
      parks: '0.4 km to Bommuru Park',
      airport: '19.5 km to Rajahmundry Airport',
      busStand: '5.8 km to Rajahmundry Bus Stand',
      railwayStation: '3.8 km to Rajahmundry Railway Station',
    },
    image: 'https://placeideal.com/wp-content/uploads/2024/07/31.jpg',
  },
   {
    id: '7',
    title: '3BHK House',
    type: '3BHK',
    price: 5500000,
    area: 160,
    areaUnit: 'sq.yrds',
    location: 'Gadala, Rajahmundry',
    facing: 'East',
    description: 'Vastu compliant east facing plot in a prime location.',
    features: ['Vastu Compliant', 'Good Neighborhood', 'Near to Schools', 'Easy Access', 'Parking Space Available'],
    amenities: ['Street Lighting', 'Underground Drainage', 'Paved Roads'],
    parking: '1 Covered Parking Space',
    proximity: {
      hospitals: '3.5 km to Apollo Hospital',
      restaurants: '2 km to Local Dining Hubs',
      parks: '0.8 km to Gadala Park',
      airport: '3 km to Rajahmundry Airport',
      busStand: '10.5 km to Rajahmundry Bus Stand',
      railwayStation: '12.5 km to Rajahmundry Railway Station',
    },
    image: 'https://i.pinimg.com/736x/1f/08/49/1f0849de2729beb6a770d5a402f4649a.jpg',
  },
  {
    id: '8',
    title: 'Spacious House',
    type: 'Individual House',
    price: 5800000,
    area: 1600,
    areaUnit: 'sq.ft',
    location: 'Bommuru, Rajahmundry',
    facing: 'East',
    description: 'A spacious independent house with a modern layout, close to essential amenities.',
    features: ['3 Bedrooms', 'Large Balcony', 'Modern Bathrooms', 'Natural Light', 'Parking Space Available'],
    amenities: ['Street Lighting', 'Underground Drainage', 'Paved Roads'],
    parking: '1 Covered Parking Space',
    proximity: {
      hospitals: '1.8 km to Apollo Hospital',
      restaurants: '0.8 km to Local Dining Hubs',
      parks: '0.4 km to Bommuru Park',
      airport: '19.5 km to Rajahmundry Airport',
      busStand: '5.8 km to Rajahmundry Bus Stand',
      railwayStation: '3.8 km to Rajahmundry Railway Station',
    },
    image: 'https://srirealty.in/wp-content/uploads/2024/10/Construction-Cost-in-Top-Cities.webp',
  },
];
