import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "w-5 h-5 rounded-md border border-stone/40 bg-background data-[state=checked]:bg-forest data-[state=checked]:border-forest focus:outline-none focus:ring-2 focus:ring-forest/40 transition-colors",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        <Check className="w-3 h-3 text-linen" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
