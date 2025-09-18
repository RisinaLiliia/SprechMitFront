import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-xl border border-stone/40 bg-linen px-1 py-2 text-sm text-foreground placeholder:text-muted transition-colors",
        "focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest",
        "aria-[invalid=true]:border-clay aria-[invalid=true]:focus:border-clay aria-[invalid=true]:focus:ring-clay",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
