import { Comments } from '../types/comments';

export const comments: Comments = [
  {
    id: '0',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'June 2019',
    rating: 5,
    user: {
      userName: 'Jane',
      avatarUrl: 'https://i.pravatar.cc/121',
      isPro: true
    }
  },
  {
    id: '1',
    comment: 'Not a bad place, but could be better. The location is great, but the amenities need improvement.',
    date: 'April 2021',
    rating: 4,
    user: {
      userName: 'Nick',
      avatarUrl: 'https://i.pravatar.cc/122',
      isPro: false
    }
  },
  {
    id: '2',
    comment: 'The building is green and from 18th century.',
    date: 'August 2022',
    rating: 4,
    user: {
      userName: 'Sarah',
      avatarUrl: 'https://i.pravatar.cc/123',
      isPro: false
    }
  },
];
