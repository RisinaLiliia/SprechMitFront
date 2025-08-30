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
    <header className="flex justify-between items-center px-6 py-4 bg-offWhite dark:bg-darkGray transition-colors font-main">
      <Link
        to={user ? "/dashboard" : "/"}
        className="text-2xl font-extrabold uppercase tracking-tight text-green dark:text-yellow"
      >
        SprechMit
      </Link>

      <div className="flex items-center gap-4">
        {user && (
          <span className="font-bold text-darkGray dark:text-offWhite">
            Hi, {user.name}
          </span>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red text-offWhite rounded-none font-bold uppercase tracking-wide hover:bg-yellow hover:text-darkGray transition-colors duration-200"
          >
            Logout
          </button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
