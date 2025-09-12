import React from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ isDark, toggleDark }) {
  return (
    <button
      onClick={toggleDark}
      className="inline-flex items-center gap-2 rounded-xl border border-muted/50 px-3 py-2 text-sm hover:bg-muted/30 transition"
      aria-label="Theme umschalten"
      title="Тема"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? "Hell" : "Dunkel"}</span>
    </button>
  );
}
