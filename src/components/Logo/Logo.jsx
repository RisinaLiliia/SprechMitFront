import { NavLink } from "react-router-dom";
import { FaBook, FaComments } from "react-icons/fa";

import css from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/" className={css.logoLink}>
      <div className={css.logo}>
        <div className={css.logoIcon}>
          <FaBook size={30} color="var(--yellow)" />
        </div>
        <span className={css.logoText}>SprechMit</span>
      </div>
    </NavLink>
  );
}
