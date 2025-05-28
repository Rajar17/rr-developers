export interface Property {
  id: string;
  title: string;
  type: 'Open Site' | 'Villa' | 'Individual House' | 'Independent House' | '2BHK' | '3BHK';
  price: number;
  area: number;
  areaUnit: 'sq.yrds' | 'sq.ft';
  location: string;
  facing?: 'East' | 'West' | 'North' | 'South';
  description: string;
  features?: string[];
  image: string;
  isFeatured?: boolean;
}

export interface Brochure {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  downloadLink?: string;
}