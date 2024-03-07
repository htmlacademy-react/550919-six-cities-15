import React from 'react';
import OfferCard from './offer-card';
import {Offers} from '../types/offers';

type OfferCardListProps = {
  offers: Offers;
  setActiveOffer: (id: number | null) => void;
}

const OfferCardList: React.FC<OfferCardListProps> = ({ offers, setActiveOffer }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <OfferCard key={offer.id} offer={offer} setActiveOffer={setActiveOffer} />
    ))}
  </div>
);
export default OfferCardList;
