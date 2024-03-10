import { City } from './city';
import { Host } from './host';

export type Offer = {
  id: number;
  name: string;
  type: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  previewImage: string;
  description: string;
  images: string[];
  city: City;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  host: Host;
  goods: string[];
};

export type Offers = Offer[];
