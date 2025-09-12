import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";

export default function HomePage() {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col gap-6 p-8 bg-offWhite dark:bg-darkGray min-h-screen transition-colors rounded-none shadow-none font-main">
      {user && (
        <p className="text-lg text-darkGray dark:text-offWhite mt-2">
          Hallo,{" "}
          <span className="font-bold text-green dark:text-yellow">
            {user.name}
          </span>
          !
        </p>
      )}
      <h2 className="text-4xl font-extrabold uppercase tracking-tight text-darkGray dark:text-offWhite">
        Entschuldigung, aber diese Seite befindet sich noch im Aufbau.
      </h2>
    </div>
  );
}
