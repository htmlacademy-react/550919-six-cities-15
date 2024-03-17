import React from 'react';
import { Offer } from '../types/offers';
import OfferCard from './offer-card';

type NearOfferCardListProps = {
  offerList: Offer[];
}

const NearOfferCardList: React.FC<NearOfferCardListProps> = ({ offerList }) => (
  <>
    {offerList.map((offer) => (
      <OfferCard key={offer.id} offer={offer} />
    ))}
  </>
);

export default NearOfferCardList;
