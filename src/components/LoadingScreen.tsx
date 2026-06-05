import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phases = [
  "Initializing Portfolio",
  "Gathering Experience",
  "Loading Projects",
  "Forming Logo",
  "Finalizing",
  "Ready",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 6 + 2;
        if (next >= 100) {
          clearInterval(id);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onDone, 700);
          }, 450);
          return 100;
        }
        return next;
      });
    }, 90);
    return () => clearInterval(id);
  }, [onDone]);

  const phaseIdx = Math.min(phases.length - 1, Math.floor((progress / 100) * phases.length));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          style={{ position: "fixed" }}
        >
          {/* Noise overlay */}
          <div className="pointer-events-none absolute inset-0 noise opacity-100" />
          {/* Particles ring */}
          <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, oklch(0.58 0.22 25 / 0.8), transparent 40%)",
                filter: "blur(2px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-3 rounded-full border border-primary/30"
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-8 rounded-full border border-primary/20"
              animate={{ scale: [1.05, 1, 1.05], opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <div className="absolute inset-10 rounded-full bg-onyx/80 backdrop-blur-xl" />

            {/* Particles */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i / 24) * Math.PI * 2;
              const r = 120;
              return (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-primary"
                  style={{
                    left: "50%",
                    top: "50%",
                    boxShadow: "0 0 8px oklch(0.58 0.22 25)",
                  }}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos(angle) * r,
                    y: Math.sin(angle) * r,
                    opacity: [0, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.6,
                    delay: 0.6 + i * 0.04,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                  }}
                />
              );
            })}

            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 font-display text-[88px] sm:text-[110px] font-bold leading-none tracking-tight"
            >
              <span className="text-foreground">G</span>
              <span className="text-gradient-red ml-[-6px]" style={{ filter: "drop-shadow(0 0 24px oklch(0.58 0.22 25 / 0.6))" }}>
                D
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="font-display text-2xl tracking-[0.4em] uppercase">
              <span>Gourab</span>{" "}
              <span className="text-primary">Deb</span>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              {phases[phaseIdx]}…
            </div>

            <div className="mt-2 h-[2px] w-[280px] sm:w-[360px] overflow-hidden bg-white/5">
              <motion.div
                className="h-full bg-gradient-red shadow-soft-glow"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="font-mono text-xs text-primary">{Math.floor(progress)}%</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
