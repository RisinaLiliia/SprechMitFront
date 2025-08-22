import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { fetchLogoutUser } from "../../redux/auth/operations";
import { Button, Typography, IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(fetchLogoutUser());
  };

  return (
    <div className={css.wrapper}>
      <Typography variant="h6" className={css.username}>
        Welcome, {user.name}
      </Typography>
      <IconButton onClick={handleLogout} aria-label="Logout">
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
}
