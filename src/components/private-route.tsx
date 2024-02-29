import React from 'react';
import { Route, Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  element: React.ReactNode;
  isAuthenticated: boolean;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated }) =>
  isAuthenticated ? <Route element={element} /> : <Navigate to="/login" />;

export default PrivateRoute;
