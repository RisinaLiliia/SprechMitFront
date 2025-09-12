import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout({ onLoginClick, onRegisterClick }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
