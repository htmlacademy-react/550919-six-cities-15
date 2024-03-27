import React from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../const';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, authorizationStatus }) =>
  authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.Login} />;

export default PrivateRoute;
