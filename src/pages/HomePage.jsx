import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const HomePage = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col gap-6 p-8 bg-offWhite dark:bg-darkGray min-h-screen transition-colors rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-foreground dark:text-offWhite">
        Welcome to your dashboard!
      </h2>
      {user && (
        <p className="text-lg text-foreground dark:text-offWhite">
          Hello,{" "}
          <span className="font-semibold text-green dark:text-yellow">
            {user.name}
          </span>
          !
        </p>
      )}
    </div>
  );
};

export default HomePage;
