import React from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "../ui/button";

export default function AudioControls({ isPlaying, togglePlay }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={togglePlay}
        variant="outline"
        size="sm"
        className="inline-flex items-center gap-2 bg-forest text-white hover:bg-forest/90 focus:ring-2 focus:ring-forest sm:text-sm sm:px-3 sm:py-2 md:text-base md:px-5 md:py-3" // Для мобильных — меньшие отступы
        aria-label={isPlaying ? "Musik pausieren" : "Musik abspielen"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">Harmonie</span>
      </Button>
    </div>
  );
}
