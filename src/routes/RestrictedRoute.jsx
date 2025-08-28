// routes/RestrictedRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import Loader from "../components/shared/Loader/Loader";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return !isLoggedIn ? <Component /> : <Navigate to={redirectTo} replace />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;
