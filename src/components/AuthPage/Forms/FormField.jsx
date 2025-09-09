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
            <label className="inline-flex items-center gap-2 text-foreground/80 font-main text-sm cursor-pointer">
              <input
                type="checkbox"
                {...field}
                checked={field.value}
                className="w-5 h-5 rounded-md border border-stone/40 bg-background appearance-none checked:bg-forest checked:border-forest focus:outline-none"
              />
              {label}
            </label>
          )}
        </Field>
        <ErrorMessage
          name={name}
          component="div"
          className="text-clay text-xs mt-1"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col relative">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-foreground/80 mb-1"
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
              className={`w-full pr-10 py-2 px-2 rounded-xl bg-linen text-foreground text-sm font-main placeholder:text-foreground/40 focus:outline-none transition-colors
                ${
                  errors[name] && touched[name]
                    ? "border border-clay"
                    : isValid
                    ? "border border-forest"
                    : "border border-stone/40"
                }`}
            />

            {isPassword && (
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center justify-center text-foreground/60 hover:text-forest transition-colors"
              >
                {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            )}

            {isValid && !isPassword && (
              <CheckCircle
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-forest"
              />
            )}
          </div>
        )}
      </Field>

      <ErrorMessage
        name={name}
        component="div"
        className="text-clay text-xs mt-1"
      />
    </div>
  );
}
