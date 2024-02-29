import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  element: JSX.Element;
  isAuthenticated: boolean;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated }) =>
  isAuthenticated ? element : <Navigate to="/login" />;

export default PrivateRoute;
