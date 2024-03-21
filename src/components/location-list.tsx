import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/index';
import { setCityActive, getOffers, setChangeMap } from '../store/action';
import { cityMap } from '../const';

type LocationsListProps = {
  cities: string[];
}

const LocationsList: React.FC<LocationsListProps> = ({ cities }) => {
  const cityActive = useAppSelector((state) => state.cityActive);
  const dispatch = useAppDispatch();

  function changeCity(city: string) {
    const cityMapActive = cityMap.find((item) => item.title === city);

    if (cityMapActive) {
      dispatch(setCityActive(city));
      dispatch(getOffers());
      dispatch(setChangeMap(cityMapActive));
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
}

export default LocationsList;
