import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/" className={css.logoLink}>
      <div className={css.logo}>
        <span className={css.logoText}>SprechMit</span>
      </div>
    </NavLink>
  );
}
