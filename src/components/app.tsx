import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main';
import LoginPage from '../pages/login';
import Favorites from '../pages/favorites';
import Offer from '../pages/offer';
import NotFoundPage from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { AppRoutes } from '../const';
import { Offers } from '../types/offers';
import { Comments } from '../types/comments';

type AppScreenProps = {
  numberOfCards: number;
  isAuthenticated: boolean;
  offers: Offers;
  comments: Comments;
};

const App: React.FC<AppScreenProps> = ({ numberOfCards, isAuthenticated, offers, comments }) => (
  <Router>
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage numberOfCards={numberOfCards} offers={offers} />} />
      <Route path={AppRoutes.Login} element={<LoginPage />} />
      <Route
        path={AppRoutes.Favorites}
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Favorites offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoutes.Offer} element={<Offer comments={comments} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
