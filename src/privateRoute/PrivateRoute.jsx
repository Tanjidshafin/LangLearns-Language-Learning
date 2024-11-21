import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AppContext);
  const location = useLocation();

  return user ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
