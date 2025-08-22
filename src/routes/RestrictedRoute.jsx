import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectUser } from "../redux/auth/selectors";

const RestrictedRoute = ({ component: Component }) => {
  const user = useSelector(selectUser);
  if (user) {
    console.log("Redirecting to home page due to login.");
  }
  return !user ? <Component /> : <Navigate to="/" replace />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default RestrictedRoute;
