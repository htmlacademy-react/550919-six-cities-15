import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/index';
import { setCityActive, getOffers, setChangeMap } from '../store/action';

type LocationsListProps = {
  cities: string[];
}

const LocationsList: React.FC<LocationsListProps> = ({ cities }) => {
  const cityActive = useAppSelector((state) => state.cityActive);
  const dispatch = useAppDispatch();

  function changeCity(city: string) {
    dispatch(setCityActive(city));
    dispatch(getOffers());
    // Вместо использования cityMap, передаем просто имя города
    dispatch(setChangeMap(city));
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
