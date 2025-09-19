import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function AuthNav({ isDark }) {
  const buttonHoverColor = isDark ? "hover:text-sand" : "hover:text-forest";
  const buttonFocusColor = isDark
    ? "focus:ring-2 focus:ring-forest"
    : "focus:ring-2 focus:ring-sand";

  return (
    <nav className="flex gap-4 items-center">
      <Button
        asChild
        variant="outline"
        size="default"
        className={`${buttonHoverColor} ${buttonFocusColor}`}
      >
        <Link to="/blog">Blog</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="default"
        className={`${buttonHoverColor} ${buttonFocusColor}`}
      >
        <Link to="/grammar">Grammatik</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="default"
        className={`${buttonHoverColor} ${buttonFocusColor}`}
      >
        <Link to="/training">Training</Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="default"
        className={`${buttonHoverColor} ${buttonFocusColor}`}
      >
        <Link to="/live-exchange">Chats</Link>
      </Button>
    </nav>
  );
}
