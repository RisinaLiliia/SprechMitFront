import { motion } from "framer-motion";

// --- Logo Component ---
export function IchBinLogo() {
  /**
   * Idee:
   * - Minimalistisch, modern, leicht, „luftig"
   * - Natürliche Farben: Waldgrün + Sandfarben
   * - Kombiniert Text + Icon (Buch/Blatt/Wellenlinien) für Sprache & Lernen
   * - Animierte kleine Elemente (leichtes Aufpoppen/Schweben)
   */

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2 select-none"
    >
      {/* Icon: stilisiertes Blatt/Buch */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-8 h-8 bg-forest rounded-md flex items-center justify-center"
      >
        <span className="text-linen font-bold">IB</span>
      </motion.div>

      {/* Text Logo */}
      <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
        <span className="text-forest">Ich</span>
        <span className="text-sand">BIN</span>
      </span>
    </motion.div>
  );
}
