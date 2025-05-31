export interface Property {
  id: string;
  title: string;
  type: string;
  price: number;
  area: number;
  areaUnit: string;
  location: string;
  facing: string;
  description: string;
  features: string[];
  image: string;
  isFeatured?: boolean;
  amenities?: string[];
  parking?: string;
  proximity?: {
    hospitals: string;
    restaurants: string;
    parks: string;
    airport: string;
    busStand: string;
    railwayStation: string;
  };
}
