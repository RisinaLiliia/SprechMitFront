import { Field, ErrorMessage } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function FormField({
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  if (type === "checkbox") {
    return (
      <div className="flex flex-col">
        <Field name={name}>
          {({ field }) => (
            <label className="relative inline-flex items-center gap-2 text-darkGray font-main text-xs uppercase tracking-wide cursor-pointer">
              <input
                type="checkbox"
                {...field}
                checked={field.value}
                className="w-5 h-5 border border-darkGray bg-offWhite appearance-none"
              />
              {field.value && (
                <span className="absolute left-0 top-0 w-5 h-5 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-3 h-3 text-green"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
              {label}
            </label>
          )}
        </Field>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red text-xs mt-1"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col relative">
      {label && (
        <label
          htmlFor={name}
          className="text-xs font-bold uppercase text-darkGray mb-1 tracking-wide"
        >
          {label}
        </label>
      )}

      <Field name={name}>
        {({ field }) => (
          <div className="relative w-full">
            <input
              {...field}
              id={name}
              type={isPassword ? (showPassword ? "text" : "password") : type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className="w-full pr-10 py-3 px-3 border border-darkGray bg-offWhite text-darkGray text-sm font-main rounded-none focus:outline-none focus:ring-2 focus:ring-green focus:border-green transition-colors"
            />
            {isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center justify-center text-darkGray hover:text-green"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            )}
          </div>
        )}
      </Field>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red text-xs mt-1"
      />
    </div>
  );
}
