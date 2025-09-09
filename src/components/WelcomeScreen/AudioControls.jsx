import React, { useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioControls({ audioRef, isPlaying, togglePlay }) {
  useEffect(() => {
    const el = audioRef?.current;
    if (!el) return;
    const onEnded = () => {};
    el.addEventListener("ended", onEnded);
    return () => el.removeEventListener("ended", onEnded);
  }, [audioRef]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={togglePlay}
        className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-3 py-2 text-sm hover:opacity-90 transition"
        aria-label={isPlaying ? "Musik pausieren" : "Musik abspielen"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">Harmonie</span>
      </button>
    </div>
  );
}
