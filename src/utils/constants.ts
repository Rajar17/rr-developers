import { Property, Brochure } from '../types';

export const COMPANY_INFO = {
  location: 'Lalacheruvu, Rajahmundry, Andhra Pradesh',
  phone: '+91 9100677906',
  email: 'rrdeveopers23@gmail.com',
  yearEstablished: '2010',
};

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Premium Open Plot',
    type: 'Open Site',
    price: 13500, // per sq yard
    area: 183,
    areaUnit: 'sq.yrds',
    location: 'Bommuru, Rajahmundry',
    facing: 'East',
    description: 'Prime location open plot with excellent connectivity and all amenities nearby.',
    features: ['Corner Plot', 'Gated Community', '24/7 Security', 'All Utilities Available'],
    image: 'https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg',
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
    facing: 'East',
    description: 'Spacious 3BHK villa with modern amenities and elegant design.',
    features: ['3 Bedrooms', '3 Bathrooms', 'Modular Kitchen', 'Garden Area', 'Car Parking'],
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Independent House',
    type: 'Individual House',
    price: 5500000,
    area: 1800,
    areaUnit: 'sq.ft',
    location: 'Gadala, Rajahmundry',
    facing: 'West',
    description: 'Beautiful individual house with spacious rooms and modern facilities.',
    features: ['2 Bedrooms', '2 Bathrooms', 'Hall', 'Kitchen', 'Car Parking'],
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
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
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg',
  },
  {
    id: '5',
    title: 'Spacious 3BHK',
    type: '3BHK',
    price: 8500000,
    area: 2200,
    areaUnit: 'sq.ft',
    location: 'Lalacheruvu, Rajahmundry',
    description: 'Modern 3BHK apartment with luxury amenities.',
    features: ['3 Bedrooms', '3 Bathrooms', 'Balcony', 'Modular Kitchen', 'Club House Access'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
  },
  {
    id: '6',
    title: 'Compact 2BHK',
    type: '2BHK',
    price: 6500000,
    area: 1500,
    areaUnit: 'sq.ft',
    location: 'Rajanagaram, Rajahmundry',
    description: 'Well-designed 2BHK apartment perfect for small families.',
    features: ['2 Bedrooms', '2 Bathrooms', 'Balcony', 'Modern Kitchen'],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  },
];

export const FEATURED_PROJECT = {
  title: 'Jetty Mayfair',
  subtitle: 'Luxury Living Near Rajamahendravaram',
  description: 'Experience luxury living at its finest with our new project - Jetty Mayfair. Promoted by Sreemaan Properties, The Golden Empire, this premium residential development offers the best of modern amenities and elegant living spaces.',
  features: [
    'Premium Location',
    'World-class Amenities',
    'Modern Architecture',
    'Green Spaces',
    'Secure Community',
    'Smart Home Features'
  ],
  image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
  logo: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
};

export const BROCHURES: Brochure[] = [
  {
    id: '1',
    title: 'RR Developers Company Profile',
    description: 'Learn about our company history, vision, and achievements',
    thumbnail: 'https://images.pexels.com/photos/2884866/pexels-photo-2884866.jpeg',
  },
  {
    id: '2',
    title: 'Jetty Mayfair Brochure',
    description: 'Detailed information about our premium Jetty Mayfair project',
    thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
  },
  {
    id: '3',
    title: 'Open Plots Catalog',
    description: 'Browse our available open plots with pricing details',
    thumbnail: 'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg',
  },
  {
    id: '4',
    title: 'Villas and Individual Houses',
    description: 'Explore our collection of luxury villas and individual houses',
    thumbnail: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
  },
];
