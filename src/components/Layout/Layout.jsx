import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export default function Layout() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(fetchLogoutUser());
  };

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-darkGray transition-colors">
      <header className="flex justify-between items-center p-4 shadow-md bg-green/10 dark:bg-darkGray transition-colors">
        <Link
          to={user ? "/user" : "/"}
          className="text-2xl font-bold text-green dark:text-yellow"
        >
          SprechMit
        </Link>
        {user && (
          <div className="flex items-center gap-4">
            <span className="font-medium text-foreground dark:text-offWhite">
              Hi, {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all duration-200"
            >
              Logout
            </button>
          </div>
        )}
      </header>
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}
