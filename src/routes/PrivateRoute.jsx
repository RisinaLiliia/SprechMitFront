import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectUser } from "../redux/auth/selectors";

const PrivateRoute = ({ component: Component }) => {
  const user = useSelector(selectUser);

  return user ? <Component /> : <Navigate to="/auth/login" replace />;
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
