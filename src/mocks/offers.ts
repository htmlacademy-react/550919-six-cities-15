import { Offers } from '../types/offers';

export const offers: Offers = [
  {
    id: 0,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 180,
    isPremium: false,
    isFavorite: true,
    rating: 5,
    bedrooms: 3,
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from the 18th century.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    host: {
      hostName: 'Angelina',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128',
    },
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'],
  },
  {
    id: 1,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    isPremium: false,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 2,
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    description: 'Bright, cozy and spacious apartment in the heart of the city overlooking the picturesque canal.',
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    host: {
      hostName: 'John',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128',
    },
    goods: ['Wi-Fi', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'],
  },
  {
    id: 2,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 4,
    maxAdults: 6,
    previewImage: 'img/apartment-03.jpg',
    description: 'Luxury apartment located in the heart of the city. Spacious and cozy.',
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 12,
    },
    host: {
      hostName: 'Oliver',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128',
    },
    goods: ['Wi-Fi', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'],
  },
  {
    id: 3,
    name: 'Wood and stone place',
    type: 'Room',
    price: 80,
    isPremium: true,
    isFavorite: false,
    rating: 4,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: 'img/room.jpg',
    description: 'Cozy room with wooden and stone interior elements. Perfect for a romantic getaway.',
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },
    host: {
      hostName: 'Mia',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128',
    },
    goods: ['Wi-Fi', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'],
  },
  {
    id: 4,
    name: 'Luxe apartment',
    type: 'Apartment',
    price: 160,
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    bedrooms: 2,
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    description: 'Luxe partment.',
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 12,
      },
    },
    location: {
      latitude: 48.856615550,
      longitude: 2.351499004,
      zoom: 10
    },
    host: {
      hostName: 'Lima',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: [ 'Wi-Fi',
      'Coffee machine',
      'Dishwasher',
      'Heating',],
  },
  {
    id: 5,
    name: 'Wood and stone place',
    type: 'Room',
    price: 90,
    isPremium: true,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    description: 'Wood and stone place.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361021,
        longitude: 6.959974158,
        zoom: 10
      },
    },
    location: {
      latitude: 50.938361021,
      longitude: 6.959974158,
      zoom: 10
    },
    host: {
      hostName: 'Rick',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: ['Wi-Fi',
      'Coffee machine',
      'Heating',],
  },
  {
    id: 6,
    name: 'Modern apartment',
    type: 'Apartment',
    price: 110,
    isPremium: false,
    isFavorite: false,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    description: 'Wood and stone place.',
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg'],
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557154,
        longitude: 4.351697178,
        zoom: 10
      },
    },
    location: {
      latitude: 50.846557154,
      longitude: 4.351697178,
      zoom: 10
    },
    host: {
      hostName: 'Morty',
      isPro: false,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: ['Coffee machine',
      'Towels',
      'Heating',],
  },
  {
    id: 7,
    name: 'Tiny apartment',
    type: 'Apartment',
    price: 110,
    isPremium: false,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    description: 'Wood and stone place.',
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341789,
        longitude: 10.000654654,
        zoom: 10
      },
    },
    location: {
      latitude: 53.550341789,
      longitude: 10.000654654,
      zoom: 10
    },
    host: {
      hostName: 'Mia',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: ['Coffee machine',
      'Towels',
      'Heating',],
  },
  {
    id: 8,
    name: 'Cozy room',
    type: 'Room',
    price: 180,
    isPremium: true,
    isFavorite: false,
    rating: 3.5,
    bedrooms: 2,
    maxAdults: 3,
    previewImage: 'img/apartment-02.jpg',
    description: 'Wood and stone place.',
    images: ['img/apartment-02.jpg', 'img/apartment-04.jpg', 'img/apartment-01.jpg'],
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402157,
        longitude: 6.776314654,
        zoom: 10
      },
    },
    location: {
      latitude: 51.225402157,
      longitude: 6.776314654,
      zoom: 10
    },
    host: {
      hostName: 'Ann',
      isPro: true,
      avatarUrl: 'https://i.pravatar.cc/128'
    },
    goods: ['Wi-Fi',
      'Coffee machine',
      'Dishwasher',],
  },
];
