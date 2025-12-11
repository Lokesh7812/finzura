import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        {/* Logo Container - Elegant Fade In & Subtle Scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-32 md:w-40 mb-8"
        >
          <img 
            src="/logo.jpg" 
            alt="Finzura Logo" 
            className="w-full h-auto object-contain drop-shadow-sm" 
          />
        </motion.div>

        {/* Professional Gradient Progress Bar */}
        <div className="w-48 h-1 bg-secondary/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-brand"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>

        {/* Minimal Text */}
        <motion.div
          className="mt-4 text-xs font-semibold text-muted-foreground tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Initializing
        </motion.div>
      </div>
    </motion.div>
  );
}
