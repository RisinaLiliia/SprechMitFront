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
    "inline-flex items-center justify-center rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-border bg-transparent hover:bg-muted",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
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
