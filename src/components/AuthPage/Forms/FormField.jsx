import { Field, ErrorMessage } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function FormField({ name, label, type = "text", placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  // Чекбокс отдельно
  if (type === "checkbox") {
    return (
      <div className="flex flex-col">
        <label className="inline-flex items-center gap-2 text-foreground">
          <Field
            type="checkbox"
            name={name}
            className="w-5 h-5 rounded-sm border border-lightGray bg-offWhite checked:bg-green checked:text-white focus:ring-2 focus:ring-green cursor-pointer appearance-none"
          />
          {label}
        </label>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-xs mt-1"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col relative">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-foreground mb-1"
        >
          {label}
        </label>
      )}

      <Field
        id={name}
        name={name}
        type={isPassword && !showPassword ? "password" : type}
        placeholder={placeholder}
        className="w-full pr-10 py-2 px-3 rounded-lg border border-lightGray bg-offWhite text-darkGray focus:outline-none focus:ring-2 focus:ring-green transition-colors"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lightGray"
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      )}

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
}
