import { Link } from "react-router-dom";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6 px-4 bg-background transition-colors">
      <h1 className="text-5xl font-bold text-primary">SprechMit</h1>
      <p className="text-lg text-foreground">
        Welcome to the app! Please log in or register to continue.
      </p>
      <div className="flex gap-4">
        <Link
          to="/auth/login"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-200"
        >
          Login
        </Link>
        <Link
          to="/auth/register"
          className="px-6 py-3 bg-secondary text-secondary-foreground rounded-xl shadow-lg hover:bg-secondary/90 transition-all duration-200"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
