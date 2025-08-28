import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import WelcomePage from "../../pages/WelcomePage.jsx";
import Loader from "../shared/Loader/Loader.jsx";

const HomePage = lazy(() => import("../../pages/HomePage.jsx"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage.jsx"));

export default function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
