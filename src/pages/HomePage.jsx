import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import ProgressBar from "../components/ProgressBar/ProgressBar.jsx";
import BadgeNotification from "../components/HomePage/BadgeNotification/BadgeNotification.jsx";
import OnboardingTips from "../components/HomePage/OnboardingTips/OnboardingTips.jsx";

export default function HomePage() {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col gap-6 p-8 bg-offWhite dark:bg-darkGray min-h-screen transition-colors rounded-none shadow-none font-main">
      <h2 className="text-4xl font-extrabold uppercase tracking-tight text-darkGray dark:text-offWhite">
        Willkommen auf deinem Dashboard!
      </h2>

      {user && (
        <p className="text-lg text-darkGray dark:text-offWhite mt-2">
          Hallo,{" "}
          <span className="font-bold text-green dark:text-yellow">
            {user.name}
          </span>
          !
        </p>
      )}

      <div className="mt-6 border-t border-darkGray pt-4 flex gap-4">
        <span className="w-8 h-1 bg-red" />
        <span className="w-8 h-1 bg-yellow" />
        <span className="w-8 h-1 bg-darkGray" />
      </div>

      <ProgressBar step={1} total={3} />
      <BadgeNotification badge="Neuling" />
      <OnboardingTips />
    </div>
  );
}
