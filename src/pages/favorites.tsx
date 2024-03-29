import React from 'react';
import { Link } from 'react-router-dom';
import { Offers } from '../types/offers';
import OfferCard from '../components/offer-card';
import Header from '../components/header';

interface FavoritesProps {
  offers: Offers;
}

const Favorites: React.FC<FavoritesProps> = ({ offers }) => {
  const favoritesCards = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Header user="Oliver.conner@gmail.com" favoriteCount={3} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesCards.map((card) => (
                <li className="favorites__locations-items" key={card.id}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to='/'>
                        <span>{card.city.name}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OfferCard offer={card} setActiveOffer={() => {}} additionalClass="favorites__card" imageSize="favorites__image-wrapper" imageWidth={150} imageHeight={110} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

export default Favorites;
