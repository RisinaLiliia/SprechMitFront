import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function BurgerMenu({
  isMenuOpen,
  // toggleMenu,
  buttonTextColor,
  buttonHoverColor,
  buttonFocusColor,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: isMenuOpen ? 1 : 0,
        height: isMenuOpen ? "auto" : 0,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="lg:hidden flex flex-col gap-4 p-4 bg-linen mt-4 rounded-lg shadow-md"
    >
      <Button asChild variant="outline" size="default">
        <Link
          to="/"
          className={`${buttonTextColor} ${buttonHoverColor} ${buttonFocusColor}`}
        >
          MVP Landing
        </Link>
      </Button>
      <Button asChild variant="outline" size="default">
        <Link
          to="/blog"
          className={`${buttonTextColor} ${buttonHoverColor} ${buttonFocusColor}`}
        >
          Blog & Wörter
        </Link>
      </Button>
      <Button asChild variant="outline" size="default">
        <Link
          to="/grammar"
          className={`${buttonTextColor} ${buttonHoverColor} ${buttonFocusColor}`}
        >
          Grammatik Spickzettel
        </Link>
      </Button>
      <Button asChild variant="outline" size="default">
        <Link
          to="/profile"
          className={`${buttonTextColor} ${buttonHoverColor} ${buttonFocusColor}`}
        >
          Profil & Freunde
        </Link>
      </Button>
      <Button asChild variant="outline" size="default">
        <Link
          to="/training"
          className={`${buttonTextColor} ${buttonHoverColor} ${buttonFocusColor}`}
        >
          Training
        </Link>
      </Button>
      <Button asChild variant="outline" size="default">
        <Link
          to="/live-exchange"
          className={`${buttonTextColor} ${buttonHoverColor} ${buttonFocusColor}`}
        >
          Live-Austausch
        </Link>
      </Button>
    </motion.div>
  );
}
