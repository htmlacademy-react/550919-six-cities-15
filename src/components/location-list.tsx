import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/index';
import { setCityActive, getOffers, setChangeMap } from '../store/action';
import {Offers} from '../types/offers';
import {useParams} from 'react-router-dom';

type LocationsListProps = {
  offers: Offers;
  cities: string[];
}

const LocationsList: React.FC<LocationsListProps> = ({ cities,offers }) => {
  const cityActive = useAppSelector((state) => state.cityActive);
  const dispatch = useAppDispatch();
  const params = useParams();
  const cardId = parseInt(params.id || '0', 10).toString();
  const selectedCard = offers.filter((offer) => offer.id === parseInt(cardId, 10))[0];

  function changeCity(city: string) {
    if (selectedCard) {
      dispatch(setCityActive(city));
      dispatch(getOffers());
      dispatch(setChangeMap(selectedCard));
    }
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${city === cityActive ? 'tabs__item--active' : ''}`}
                onClick={() => changeCity(city)}
                href="#"
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LocationsList;
