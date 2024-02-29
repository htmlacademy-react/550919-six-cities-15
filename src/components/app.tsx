import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main';
import LoginPage from '../pages/login';
import Favorites from '../pages/favorites';
import Offer from '../pages/offer';
import NotFoundPage from '../pages/not-found-page';
import PrivateRoute from './private-route';
import { AppRoutes } from '../const';

type AppScreenProps = {
  numberOfCards: number;
  isAuthenticated: boolean;
};

const App: React.FC<AppScreenProps> = ({ numberOfCards, isAuthenticated }) => (
  <Router>
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage numberOfCards={numberOfCards} />} />
      <Route path={AppRoutes.Login} element={<LoginPage />} />
      <Route
        path={AppRoutes.Favorites}
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={AppRoutes.Offer} element={<Offer />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
