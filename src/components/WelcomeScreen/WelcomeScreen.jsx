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
          className="flex-1 border-green text-green focus:outline-none focus:ring-2 focus:ring-green-700"
        >
          <Link to="/auth/login">Login</Link>
        </Button>

        <Button
          asChild
          variant="default"
          className="flex-1 bg-green text-offWhite focus:outline-none focus:ring-2 focus:ring-green-700"
        >
          <Link to="/auth/register">Register</Link>
        </Button>
      </div>
    </div>
  );
}
