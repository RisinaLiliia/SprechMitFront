import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { IchBinLogo } from "../Logo/Logo";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import AudioControls from "../WelcomeScreen/AudioControls";
import AuthNav from "../AuthNav/AuthNav";
import { fetchLogoutUser } from "../../redux/auth/operations";

export default function Header({
  isDark,
  toggleDark,
  audioRef,
  isPlaying,
  togglePlay,
  onLoginClick,
  onRegisterClick,
}) {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(fetchLogoutUser());
  };

  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="hover:scale-110 transition-transform">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <IchBinLogo />
          </motion.div>
        </a>

        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <AuthNav
              onLoginClick={onLoginClick}
              onRegisterClick={onRegisterClick}
            />
          ) : (
            <>
              <Link
                to="/profile"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-forest text-linen hover:bg-sand hover:text-charcoal transition-colors focus:ring-2 focus:ring-forest"
                title="Profil"
              >
                {user?.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name || "User"}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="font-semibold">
                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </span>
                )}
              </Link>

              <button
                onClick={handleLogout}
                title="Abmelden"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-clay text-linen hover:bg-sand hover:text-charcoal transition-colors focus:ring-2 focus:ring-forest"
              >
                <FiLogOut className="w-6 h-6" />
              </button>
            </>
          )}

          <ThemeToggle isDark={isDark} toggleDark={toggleDark} />

          <AudioControls
            audioRef={audioRef}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
          />
        </div>
      </div>
    </header>
  );
}
