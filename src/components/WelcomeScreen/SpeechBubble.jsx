import React from "react";
import { motion } from "framer-motion";

export function SpeechBubble({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay }}
      className={`absolute max-w-[12rem] sm:max-w-[14rem] 
        bg-background/90 backdrop-blur-sm border border-muted/60 
        shadow rounded-2xl px-4 py-3 text-sm leading-snug text-foreground/90 
        ${className}`}
      role="note"
    >
      <div className="relative">
        <span className="block">{children}</span>

        <span
          className="absolute -bottom-3 left-6 h-3 w-3 rotate-45 
            bg-background/90 border-b border-r border-muted/60"
          aria-hidden
        />
      </div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
      />
    </motion.div>
  );
}
