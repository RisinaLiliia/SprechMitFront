import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/">
      <div className={css.logo}>
        <div className={css.iconBox}>
          <Icon name="logo" classname={css.logoIcon} />
        </div>
        <span className={css.logoText}>SprechMit</span>
      </div>
    </NavLink>
  );
}
