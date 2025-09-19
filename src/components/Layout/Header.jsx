import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { IchBinLogo } from "../Logo/Logo";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import AudioControls from "./AudioControls";
import { fetchLogoutUser } from "../../redux/auth/operations";
import BurgerMenu from "./BurgerMenu.jsx";
import AuthNav from "../AuthNav/AuthNav";
import { AuthButtons } from "../AuthNav/AuthButtons";
import { Button } from "../ui/button";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleLogout = () => {
    dispatch(fetchLogoutUser());
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonStyles = isDark
    ? "text-white hover:text-sand focus:ring-2 focus:ring-forest"
    : "text-black hover:text-forest focus:ring-2 focus:ring-sand";

  return (
    <header
      className={`w-full fixed top-0 left-0 z-30 transition-all duration-300 ${
        scrolling
          ? "backdrop-blur-sm bg-background/90 shadow-lg"
          : "bg-transparent"
      }`}
    >
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

        <div className="hidden lg:flex items-center gap-3">
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

              <Button
                variant="destructive"
                onClick={handleLogout}
                title="Abmelden"
                className="w-10 h-10 rounded-full"
              >
                <FiLogOut className="w-6 h-6" />
              </Button>
            </>
          )}
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <Button
            variant="link"
            onClick={toggleMenu}
            className={`text-forest hover:text-sand focus:outline-none ${buttonStyles}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </Button>

          <ThemeToggle isDark={isDark} toggleDark={toggleDark} />
          <AudioControls
            audioRef={audioRef}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
          />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <AuthButtons
            onLoginClick={onLoginClick}
            onRegisterClick={onRegisterClick}
            isDark={isDark}
          />

          <ThemeToggle isDark={isDark} toggleDark={toggleDark} />
          <AudioControls
            audioRef={audioRef}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
          />
        </div>
      </div>

      <BurgerMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        buttonStyles={buttonStyles}
      />
    </header>
  );
}
