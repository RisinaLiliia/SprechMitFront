import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

function Button({
  asChild = false,
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-150 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700";

  const variantClasses = {
    default:
      "bg-green text-offWhite hover:brightness-90 active:brightness-75 active:scale-95",
    outline:
      "border border-green text-green bg-transparent hover:bg-green hover:text-offWhite hover:brightness-95 active:brightness-75 active:scale-95",
    destructive:
      "bg-red text-offWhite hover:brightness-95 active:brightness-75 active:scale-95",
    secondary:
      "bg-yellow text-darkGray hover:brightness-95 active:brightness-75",
    ghost: "bg-transparent hover:bg-lightGray hover:text-darkGray",
    link: "text-green underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-9 px-4 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-10 px-6 text-base",
  };

  return (
    <Comp
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export { Button };
