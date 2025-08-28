// src/components/shared/Header.jsx
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(fetchLogoutUser());
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-background dark:bg-darkGray transition-colors">
      <Link
        to={user ? "/dashboard" : "/"}
        className="text-2xl font-bold text-green dark:text-yellow"
      >
        SprechMit
      </Link>
      <div className="flex items-center gap-4">
        {user && (
          <span className="font-medium text-foreground dark:text-offWhite">
            Hi, {user.name}
          </span>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all duration-200"
          >
            Logout
          </button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
