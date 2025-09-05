import { Loader2 } from "lucide-react";

export default function Loader({ text = "Laden..." }) {
  return (
    <div className="flex items-center justify-center gap-2 text-darkGray">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>{text}</span>
    </div>
  );
}
