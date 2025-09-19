import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export default function ThemeToggle({ isDark, toggleDark }) {
  return (
    <Button
      onClick={toggleDark}
      variant="outline"
      size="sm"
      className="inline-flex items-center gap-2"
      aria-label="Theme umschalten"
      title="Тема"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? "Hell" : "Dunkel"}</span>
    </Button>
  );
}
