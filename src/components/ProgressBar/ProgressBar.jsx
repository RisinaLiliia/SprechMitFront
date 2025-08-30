export default function ProgressBar({ step = 1, total = 3 }) {
  const steps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 mt-6">
      {steps.map((s) => (
        <div
          key={s}
          className={`flex-1 h-2 rounded-none transition-colors duration-300 ${
            s <= step ? "bg-green" : "bg-lightGray"
          }`}
        />
      ))}
      <span className="text-sm font-bold text-darkGray">
        Schritt {step}/{total}
      </span>
    </div>
  );
}
