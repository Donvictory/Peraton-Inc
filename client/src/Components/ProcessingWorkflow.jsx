import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProcessingWorkflow({ onComplete, showPercent }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return prev + 4;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <motion.div
        className="w-24 h-24 border-4 border-white/20 border-t-white rounded-full mx-auto mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      <p className="text-lg font-medium mb-2">Secure Processing…</p>

      {showPercent && <p className="text-sm text-gray-400">{progress}%</p>}
    </div>
  );
}
