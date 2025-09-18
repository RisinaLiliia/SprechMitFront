import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }) {
  return (
    <label
      className={cn(
        "block text-sm font-medium text-foreground/80 tracking-tight mb-1",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
