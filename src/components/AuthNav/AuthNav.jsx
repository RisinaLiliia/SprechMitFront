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
      <Button asChild variant="outline" size="default">
        <Link to="/blog" className={`${buttonHoverColor} ${buttonFocusColor}`}>
          Blog
        </Link>
      </Button>
      <Button asChild variant="outline" size="default">
        <Link
          to="/grammar"
          className={` ${buttonHoverColor} ${buttonFocusColor}`}
        >
          Grammatik
        </Link>
      </Button>
      <Button asChild variant="outline" size="default">
        <Link
          to="/training"
          className={`${buttonHoverColor} ${buttonFocusColor}`}
        >
          Training
        </Link>
      </Button>
      <Button asChild variant="outline" size="default">
        <Link
          to="/live-exchange"
          className={` ${buttonHoverColor} ${buttonFocusColor}`}
        >
          Chats
        </Link>
      </Button>
    </nav>
  );
}
