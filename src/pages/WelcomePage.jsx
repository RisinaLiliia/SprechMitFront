import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/WelcomeScreen/Hero";
import BlogTeaser from "../components/WelcomeScreen/BlogTeaser";
import Roadmap from "../components/WelcomeScreen/Roadmap";
import WaveformCanvas from "../components/WelcomeScreen/WaveformCanvas";
import portraitImg from "../components/Assets/IMG_1912.jpeg";
import backgroundImg from "../components/Assets/photo-1467269204594-9661b134dd2b.jpeg";
import musicFile from "../components/Assets/mixkit-classical-vibes-5-688.mp3";

import AuthModal from "../components/AuthModal/AuthModal";
import Footer from "@/components/Footer/Footer";

export default function IchBinLanding() {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [initialTab, setInitialTab] = useState("login");

  const audioRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (err) {
      console.error(err);
    }
  }, [isDark]);

  const togglePlay = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (el.paused) await el.play();
      else el.pause();
    } catch (err) {
      console.error(err);
    }
  };

  const openLogin = () => {
    setInitialTab("login");
    setModalOpen(true);
  };

  const openRegister = () => {
    setInitialTab("register");
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground overflow-hidden">
      <Header
        isDark={isDark}
        toggleDark={() => setIsDark((d) => !d)}
        audioRef={audioRef}
        togglePlay={togglePlay}
        onLoginClick={openLogin}
        onRegisterClick={openRegister}
      />

      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTab={initialTab}
      />

      <Hero portraitSrc={portraitImg} backgroundSrc={backgroundImg} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-10">
        <WaveformCanvas audioRef={audioRef} height={56} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <Roadmap />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <BlogTeaser />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-20">
        <Footer />
      </div>

      <audio
        ref={audioRef}
        src={musicFile}
        preload="auto"
        className="sr-only"
        crossOrigin="anonymous"
      />
    </div>
  );
}
