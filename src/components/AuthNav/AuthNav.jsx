import { NavLink } from "react-router-dom";

export default function AuthNav() {
  const baseClasses =
    "px-4 py-2 rounded-lg transition font-medium hover:bg-green/10";
  const activeClasses = "text-green font-semibold border-b-2 border-green";

  return (
    <nav className="flex gap-4 justify-center">
      <NavLink
        to="/auth/login"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive ? activeClasses : "text-gray-600 dark:text-gray-300"
          }`
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/auth/register"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive ? activeClasses : "text-gray-600 dark:text-gray-300"
          }`
        }
      >
        Register
      </NavLink>
    </nav>
  );
}
