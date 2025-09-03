import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WelcomePage from "../../pages/WelcomePage.jsx";
import Loader from "../shared/Loader/Loader.jsx";
import PrivateRoute from "../../routes/PrivateRoute.jsx";
import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage.jsx"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage.jsx"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage.jsx"));

export default function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />

          <Route element={<PrivateRoute component={Layout} />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />{" "}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
