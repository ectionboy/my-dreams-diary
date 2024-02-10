import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { isLoggedIn } from '../../redux/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(isLoggedIn);
  const location = useLocation();
  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;