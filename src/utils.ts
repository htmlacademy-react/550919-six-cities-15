import { Offers } from './types/offers';
import { SortType } from './const';

export function sortOffers(sortType: SortType, offers: Offers): Offers {
  switch (sortType) {
    case SortType.LowToHigh:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.HighToLow:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TopRated:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}
