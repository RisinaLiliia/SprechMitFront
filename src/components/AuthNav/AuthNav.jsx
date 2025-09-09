import React from "react";
import { Button } from "../ui/button";

export default function AuthNav({ onLoginClick, onRegisterClick }) {
  return (
    <nav className="flex gap-4 items-center">
      <Button variant="outline" size="default" onClick={onLoginClick}>
        Login
      </Button>
      <Button variant="outline" size="default" onClick={onRegisterClick}>
        Register
      </Button>
    </nav>
  );
}
