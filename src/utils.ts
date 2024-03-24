import { Offers } from 'types/offers';
import { SortType } from './const';

export function sortOffers(sortType: SortType, offers: Offers) {
  switch (sortType) {
    case SortType.LowToHigh:
      return offers.sort((a, b) => a.price - b.price);
    case SortType.HighToLow:
      return offers.sort((a, b) => b.price - a.price);
    case SortType.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
    case SortType.Popular:
      return offers;
    default:
      return offers;
  }
}
