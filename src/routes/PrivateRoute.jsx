import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import Loader from "../components/shared/Loader/Loader";

const PrivateRoute = ({ component: Component, redirectTo = "/auth/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} replace />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
