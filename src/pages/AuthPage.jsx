// src/pages/AuthPage.jsx
import { useParams, Navigate } from "react-router-dom";
import RegistrationForm from "../components/AuthPage/Forms/RegistrationForm";
import LoginForm from "../components/AuthPage/Forms/LoginForm";

const AuthPage = () => {
  const { authType } = useParams();

  switch (authType) {
    case "register":
      return <RegistrationForm />;
    case "login":
      return <LoginForm />;
    default:
      return <Navigate to="/auth/login" replace />;
  }
};

export default AuthPage;
