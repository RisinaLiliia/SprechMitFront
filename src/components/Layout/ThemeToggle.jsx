import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="p-2 rounded-full bg-offWhite dark:bg-darkGray border border-darkGray dark:border-offWhite hover:bg-green dark:hover:bg-yellow focus:ring-2 focus:ring-green transition-colors duration-200 flex items-center justify-center"
    >
      {dark ? (
        <Sun className="w-5 h-5 text-yellow dark:text-green hover:text-white focus:text-white transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-green dark:text-yellow hover:text-white focus:text-white transition-colors" />
      )}
    </button>
  );
}
