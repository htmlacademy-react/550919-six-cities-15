import React, { useState } from 'react';
import OfferCardList from '../components/offer-card-list';
import Header from '../components/header';
import Map from '../components/map';
import { useAppSelector } from '../hooks/index';
import LocationsList from '../components/location-list';
import {Offers} from '../types/offers';
import {useParams} from 'react-router-dom';

interface MainPageProps {
  offers: Offers;
  citiesList: string[];
}

const MainPage: React.FC<MainPageProps> = ({ citiesList,offers }) => {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const params = useParams();
  const cardId = parseInt(params.id || '0', 10).toString();
  const selectedCard = offers.filter((offer) => offer.id === parseInt(cardId, 10))[0];
  const cityActive = useAppSelector((state) => state.cityActive);
  const offersActive = useAppSelector((state) => state.offers);
  const placesCount = offersActive.length;

  return (
    <div className="page page--gray page--main">
      <Header user="Oliver.conner@gmail.com" favoriteCount={3} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList cities={citiesList} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in {cityActive}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferCardList offers={offersActive} setActiveOffer={setActiveOffer} />
            </section>
            <div className="cities__right-section">
              <Map mapType={'offer'} offers={offersActive} activeOffer={activeOffer} city={selectedCard} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
