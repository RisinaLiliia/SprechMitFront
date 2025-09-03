import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useSelector, useDispatch } from "react-redux";
import { fetchLogoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(fetchLogoutUser());
  };

  return (
    <header className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 bg-offWhite dark:bg-darkGray transition-colors font-main shadow-md">
      <Link
        to={user ? "/dashboard" : "/"}
        className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-green dark:text-yellow"
      >
        SprechMit
      </Link>

      <div className="flex items-center gap-3 md:gap-4">
        {user && (
          <>
            <span className="hidden md:inline font-bold text-darkGray dark:text-offWhite">
              Hallo, {user.name}
            </span>

            <Link
              to="/profile"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              title="Profil"
            >
              <FiUser className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </Link>

            <button
              onClick={handleLogout}
              title="Abmelden"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-red text-offWhite hover:bg-yellow hover:text-darkGray transition-colors"
            >
              <FiLogOut className="w-6 h-6" />
            </button>
          </>
        )}

        <ThemeToggle />
      </div>
    </header>
  );
}
