import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProcessingWorkflow({ onComplete, showPercent }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 600);
          return 100;
        }
        return prev + 3;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* ===== Pentagon Loader ===== */}
      <div className="relative w-40 h-40 mb-8">
        {/* outer rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />

        {/* middle rotating ring */}
        <motion.div
          className="absolute inset-3 rounded-full border border-emerald-400/40"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />

        {/* scanning sweep */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(16,185,129,0.25), transparent)",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
        />

        {/* inner pulse core */}
        <motion.div
          className="absolute inset-[38%] rounded-full bg-emerald-400"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        />
      </div>

      {/* ===== Text ===== */}
      <p className="text-lg font-semibold tracking-wide mb-1">
        Secure Processing
      </p>

      <p className="text-xs text-gray-400 mb-3">
        Pentagon-grade verification in progress…
      </p>

      {showPercent && (
        <p className="text-sm text-emerald-300 font-medium">{progress}%</p>
      )}
    </div>
  );
}
