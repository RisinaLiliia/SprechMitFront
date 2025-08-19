import { Route, Routes } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";
import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/AuthPage";
import PrivateRoute from "../../routes/PrivateRoute";
import RestrictedRoute from "../../routes/RestrictedRoute";
import LoginForm from "../AuthPage/Forms/LoginForm";
import RegistrationForm from "../AuthPage/Forms/RegistrationForm";

const App = () => {
  return (
    <Routes>
      <Route path="/auth/:authType" element={<AuthPage />} />

      <Route
        path="/profile"
        element={<PrivateRoute component={ProfilePage} />}
      />

      <Route
        path="/auth/login"
        element={<RestrictedRoute component={LoginForm} />}
      />
      <Route
        path="/auth/register"
        element={<RestrictedRoute component={RegistrationForm} />}
      />

      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
