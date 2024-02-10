import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../redux/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(isLoggedIn);

  return !isAuth ? children : <Navigate to="/" />;
};

export default PublicRoute;