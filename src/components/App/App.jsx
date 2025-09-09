import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WelcomePage from "../../pages/WelcomePage.jsx";
import Loader from "../shared/Loader/Loader.jsx";
import PrivateRoute from "../../routes/PrivateRoute.jsx";
import Layout from "../Layout/Layout.jsx";
import AuthModal from "../AuthModal/AuthModal.jsx";

const HomePage = lazy(() => import("../../pages/HomePage.jsx"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage.jsx"));

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null); // "login" | "register"

  const openLogin = () => {
    setActiveForm("login");
    setIsModalOpen(true);
  };

  const openRegister = () => {
    setActiveForm("register");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveForm(null);
  };

  return (
    <div>
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          <Route
            element={
              <PrivateRoute
                component={Layout}
                extraProps={{
                  onLoginClick: openLogin,
                  onRegisterClick: openRegister,
                }}
              />
            }
          >
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Suspense>

      <AuthModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialTab={activeForm || "login"}
      />
    </div>
  );
}
