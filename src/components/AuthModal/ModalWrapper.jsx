import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalWrapper({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-1"
          >
            <div
              className="relative w-full max-w-md bg-background rounded-2xl shadow-lg p-4 sm:p-8 max-h-[100vh] flex flex-col justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end mb-1">
                <button
                  onClick={onClose}
                  className="text-foreground hover:text-primary transition text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 flex flex-col justify-center space-y-2">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
