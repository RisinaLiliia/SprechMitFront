import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border shadow-sm transition-colors",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn("px-6 pt-6", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return (
    <h2
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm text-darkGray", className)} {...props} />;
}

function CardContent({ className, ...props }) {
  return <div className={cn("px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center px-6 pt-6 border-t border-border",
        className,
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
