import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Wähle dein Niveau",
  "Aktiviere Benachrichtigungen",
  "Starte deine erste Lektion",
];

export default function OnboardingTips() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="mt-6 p-4 border border-darkGray bg-offWhite dark:bg-darkGray rounded-none shadow-none font-main flex flex-col items-center">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-darkGray dark:text-offWhite font-bold text-sm mb-4"
      >
        {steps[currentStep]}
      </motion.div>

      <div className="flex gap-2 mb-4">
        {steps.map((_, i) => (
          <span
            key={i}
            className={`w-4 h-1 rounded-none transition-colors duration-300 ${
              i <= currentStep ? "bg-green" : "bg-lightGray"
            }`}
          />
        ))}
      </div>

      {currentStep < steps.length - 1 && (
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-green text-offWhite rounded-none font-bold uppercase tracking-wide hover:bg-yellow hover:text-darkGray transition-colors duration-200"
        >
          Weiter
        </button>
      )}
      {currentStep === steps.length - 1 && (
        <button className="px-4 py-2 bg-yellow text-darkGray rounded-none font-bold uppercase tracking-wide hover:bg-green hover:text-offWhite transition-colors duration-200">
          Lektionen starten
        </button>
      )}
    </div>
  );
}
