import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { isLoggedIn } from '../../redux/selectors';

const PublickRoute = ({ children }) => {
  const isAuth = useSelector(isLoggedIn);
  const location = useLocation();
  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublickRoute;