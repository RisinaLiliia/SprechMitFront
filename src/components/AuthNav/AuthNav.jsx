import { NavLink } from "react-router-dom";
import { getNavLinkClass } from "../../utils/getNavLinkClass";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <nav className={css.nav}>
      <NavLink to="/auth/login" className={getNavLinkClass(css)}>
        Login
      </NavLink>
      <NavLink to="/auth/register" className={getNavLinkClass(css)}>
        Register
      </NavLink>
    </nav>
  );
}
