export default function BadgeNotification({ badge = "Anfänger" }) {
  return (
    <div className="mt-6 p-4 border border-darkGray bg-offWhite dark:bg-darkGray flex flex-col items-center rounded-none shadow-none font-main">
      <p className="text-darkGray dark:text-offWhite font-bold text-sm mb-2">
        🎉 Glückwunsch!
      </p>
      <p className="text-darkGray dark:text-offWhite text-sm">
        Du hast dein erstes Abzeichen erhalten:{" "}
        <span className="font-bold text-green dark:text-yellow">{badge}</span>
      </p>
    </div>
  );
}
