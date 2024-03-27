import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useAppSelector} from '../hooks/index';
import MainPage from '../pages/main';
import LoginPage from '../pages/login';
import Favorites from '../pages/favorites';
import Offer from '../pages/offer';
import NotFoundPage from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { AppRoutes, AuthorizationStatus } from '../const';
import { Offers } from '../types/offers';
import { Comments } from '../types/comments';
import Spinner from './spinner/spinner';

type AppScreenProps = {
  offers: Offers;
  comments: Comments;
  citiesList: string[];
};

const App: React.FC<AppScreenProps> = ({ offers, comments, citiesList }) => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.offersIsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return <Spinner />;
  }

  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage offers={offers} citiesList={citiesList} />} />
        <Route path={AppRoutes.Login} element={<LoginPage />} />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Offer} element={<Offer offers={offers} comments={comments} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};


export default App;
