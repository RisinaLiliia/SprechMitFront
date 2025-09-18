import React from "react";
import { Button } from "../ui/button";
import { FiUser } from "react-icons/fi";

const AuthButtons = ({ onLoginClick, isDark }) => {
  const buttonTextColor = isDark ? "text-white" : "text-black";
  const buttonHoverColor = isDark ? "hover:text-sand" : "hover:text-forest";
  const buttonFocusColor = isDark
    ? "focus:ring-2 focus:ring-forest"
    : "focus:ring-2 focus:ring-sand";

  return (
    <div className="flex gap-4 items-center">
      <Button
        variant="outline"
        size="default"
        onClick={onLoginClick}
        className={`${buttonTextColor} ${buttonHoverColor} ${buttonFocusColor} flex items-center justify-center gap-2`}
      >
        <FiUser className="w-5 h-5" />
        Login
      </Button>
    </div>
  );
};

export { AuthButtons };
