import React, { useState, useEffect } from "react";
import ModalWrapper from "./ModalWrapper";
import LoginForm from "../AuthPage/Forms/LoginForm";
import RegistrationForm from "../AuthPage/Forms/RegistrationForm";

export default function AuthModal({ isOpen, onClose, initialTab = "login" }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  const switchTab = (tab) => setActiveTab(tab);

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      {activeTab === "login" ? (
        <LoginForm switchTab={() => switchTab("register")} />
      ) : (
        <RegistrationForm switchTab={() => switchTab("login")} />
      )}
    </ModalWrapper>
  );
}
