import css from "./WelcomeScreen.module.css";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Logo from "../Logo/Logo.jsx";

const WelcomeScreen = () => {
  return (
    <div className={css.welcomeScreen}>
      <div className={css.logo}>
        <h1>SprechMit</h1>
      </div>
      <div className={css.welcomeText}>
        <p>Welcome to the app! Please log in or register to continue.</p>
      </div>
      <div className={css.authButtons}>
        <AuthNav />
      </div>
    </div>
  );
};

export default WelcomeScreen;
