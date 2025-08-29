import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-6 text-center font-main">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Заголовок в строгом стиле */}
        <h1 className="text-5xl font-extrabold uppercase tracking-tight text-darkGray mb-6 font-heading">
          SprechMit
        </h1>

        {/* Акцентные линии Bauhaus-style */}
        <div className="flex justify-center gap-2 mb-8">
          <span className="w-12 h-1 bg-red" />
          <span className="w-12 h-1 bg-yellow" />
          <span className="w-12 h-1 bg-darkGray" />
        </div>

        {/* Лаконичный текст на немецком */}
        <p className="text-lg text-darkGray mb-10 leading-relaxed">
          Willkommen. Lerne Deutsch klar, direkt und modern. Bitte anmelden oder
          registrieren.
        </p>

        {/* Кнопки */}
        <div className="flex gap-4">
          <Button
            asChild
            variant="outline"
            className="flex-1 border-darkGray text-darkGray hover:bg-darkGray hover:text-offWhite transition-all duration-200"
          >
            <Link
              to="/auth/login"
              className="flex-1 py-2 uppercase font-bold tracking-wide"
            >
              Anmelden
            </Link>
          </Button>
          <Button
            asChild
            variant="default"
            className="flex-1 bg-green text-offWhite hover:bg-yellow hover:text-darkGray transition-all duration-200"
          >
            <Link
              to="/auth/register"
              className="flex-1 py-2 uppercase font-bold tracking-wide"
            >
              Registrieren
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
