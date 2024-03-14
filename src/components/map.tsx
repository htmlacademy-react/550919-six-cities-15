import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const';
import { Offer, Offers } from '../types/offers';
import { CityMap } from '../types/city-map';

type MapProps = {
  city: CityMap;
  offers: Offers;
  activeOffer: Offer['id'] | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

function Map({ city, offers, activeOffer }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: offer.id === activeOffer ? currentCustomIcon : defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      style={{ height: '100%' }}
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
