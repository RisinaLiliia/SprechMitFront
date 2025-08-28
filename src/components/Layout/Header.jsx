import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-background dark:bg-darkGray">
      <Link to="/" className="text-2xl font-bold text-green">
        SprechMit
      </Link>
      <LogOut></LogOut>
    </header>
  );
}
