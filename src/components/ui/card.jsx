import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-background text-foreground flex flex-col gap-4 rounded-2xl border border-stone/30 shadow-sm hover:shadow-md transition-shadow ease-in-out",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn("px-4 pt-4", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return (
    <h2
      className={cn("text-xl font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm text-muted leading-relaxed", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center px-6 pt-4 border-t border-stone/20",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
