import { Field, ErrorMessage, useFormikContext } from "formik";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function FormField({
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { touched, errors, values } = useFormikContext();
  const isPassword = type === "password";

  const isValid = touched[name] && !errors[name] && values[name] !== "";

  if (type === "checkbox") {
    return (
      <div className="flex flex-col">
        <Field name={name}>
          {({ field }) => (
            <label className="inline-flex items-center gap-2 text-darkGray font-main text-xs uppercase tracking-wide cursor-pointer">
              <input
                type="checkbox"
                {...field}
                checked={field.value}
                className="w-5 h-5 border border-darkGray bg-offWhite appearance-none checked:bg-green"
                aria-checked={field.value}
              />
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
              aria-invalid={!!errors[name]}
              className={`w-full pr-10 py-3 px-3 border ${
                errors[name] && touched[name]
                  ? "border-red"
                  : isValid
                  ? "border-green"
                  : "border-darkGray"
              } bg-offWhite text-darkGray text-sm font-main rounded-none focus:outline-none focus:ring-2 focus:ring-green transition-colors`}
            />

            {isPassword && (
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center justify-center text-darkGray hover:text-green"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            )}

            {isValid && !isPassword && (
              <CheckCircle
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green"
              />
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
