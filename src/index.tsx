import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app';
import { offers } from './mocks/offers';
import { comments } from './mocks/comments';
import { citiesList } from './const';
import { store } from './store';
import {fetchOffersAction, checkAuthAction} from './store/api-action';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        comments={comments}
        citiesList={citiesList}
      />
    </Provider>
  </React.StrictMode>
);
