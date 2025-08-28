import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6 px-4 bg-darkGray transition-colors">
      <h1 className="text-3xl font-light text-yellow">SprechMit</h1>

      <p className="text-lg text-offWhite">
        Welcome to the app! Please log in or register to continue.
      </p>

      <div className="flex gap-4 w-full max-w-xs">
        <Button
          asChild
          variant="outline"
          className="flex-1 border-green text-green"
        >
          <Link
            to="/auth/login"
            className="flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 hover:bg-green-700 hover:text-white transition-colors duration-200"
          >
            Login
          </Link>
        </Button>

        <Button
          asChild
          variant="default"
          className="flex-1 bg-green text-offWhite"
        >
          <Link
            to="/auth/register"
            className="flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 hover:bg-green-700 transition-colors duration-200"
          >
            Register
          </Link>
        </Button>
      </div>
    </div>
  );
}
