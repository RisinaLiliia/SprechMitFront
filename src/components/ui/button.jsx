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
    "inline-flex items-center justify-center font-medium transition-all duration-150 ease-in-out rounded-xl disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  const variantClasses = {
    default:
      "bg-primary text-primary-foreground hover:brightness-95 active:brightness-90 active:scale-95 shadow-sm",
    outline:
      "border border-foreground/20 text-foreground bg-transparent hover:bg-foreground/5 active:scale-95",
    secondary:
      "bg-secondary text-secondary-foreground hover:brightness-95 active:scale-95",
    destructive:
      "bg-clay text-linen hover:brightness-95 active:brightness-90 active:scale-95",
    ghost: "bg-transparent text-foreground hover:bg-muted/20 active:scale-95",
    link: "text-primary underline-offset-4 hover:underline active:scale-95",
    tag: "border border-foreground/15 dark:border-foreground/30 bg-background/60 backdrop-blur-sm text-foreground shadow-sm hover:shadow active:scale-95",
  };

  const sizeClasses = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-6 text-base",
  };

  return (
    <Comp
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}

export { Button };
