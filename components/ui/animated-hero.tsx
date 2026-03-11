"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedHeroProps {
  words?: string[];
  className?: string;
  onComplete?: () => void;
}

function Hero({ words, className, onComplete }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const titles = useMemo(
    () => words ?? ["ideas", "code", "intelligence", "innovation", "the future"],
    [words]
  );

  useEffect(() => {
    if (hasCompleted && onComplete) return;

    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        if (onComplete) {
          setHasCompleted(true);
          onComplete();
        } else {
          setTitleNumber(0);
        }
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 900);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles, onComplete, hasCompleted]);

  return (
    <motion.div
      className={className ?? "w-full relative"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] h-2 w-2 rounded-full bg-blue-400/40"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] h-3 w-3 rounded-full border border-slate-200/50"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[60%] left-[5%] text-[10px] text-slate-100 font-mono"
        >
          // CSE_CORE
        </motion.div>
      </div>

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 py-16">
          {/* Decorative badge with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-full border bg-muted/50 px-5 py-2 text-xs font-bold tracking-[0.15em] text-primary uppercase backdrop-blur-sm"
          >
            Computer Science & Engineering
          </motion.div>

          {/* Main headline */}
          <h1 className="text-center text-5xl font-black leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block mb-2"
            >
              Mindkraft
              <span className="text-blue-600"> 2026</span>
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-x-4 text-3xl font-semibold text-muted-foreground sm:text-4xl md:text-5xl"
            >
              <span>engineering</span>
              <span className="relative inline-block h-[1.2em] min-w-[10ch] overflow-visible text-start">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={titleNumber}
                    className="absolute left-0 italic font-black text-foreground text-glow"
                    initial={{ opacity: 0, x: 10, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -10, filter: "blur(10px)" }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 18,
                      opacity: { duration: 0.4 }
                    }}
                  >
                    {titles[titleNumber]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible select-none">intelligence...</span>
              </span>
            </motion.div>
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

export { Hero };
