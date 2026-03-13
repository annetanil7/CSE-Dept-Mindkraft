"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedHeroProps {
  words?: string[];
  className?: string;
}

function Hero({ words, className }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => words ?? ["ideas", "code", "intelligence", "innovation", "the future"],
    [words]
  );
  const longestTitle = useMemo(
    () => titles.reduce((longest, current) => (current.length > longest.length ? current : longest), ""),
    [titles]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 1400);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <motion.div
      className={className ?? "w-full"}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center gap-7 py-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <div className="relative inline-block max-w-4xl px-2">
              <span className="block bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-[11px] font-medium uppercase tracking-[0.38em] text-transparent sm:text-xs md:text-sm lg:text-base">
                Computer Science &amp; Engineering Department
              </span>
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.92)_48%,transparent_52%)] bg-[length:220%_100%] bg-clip-text text-[11px] font-medium uppercase tracking-[0.38em] text-transparent sm:text-xs md:text-sm lg:text-base"
                animate={{ backgroundPosition: ["180% 0%", "-30% 0%"] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              >
                Computer Science &amp; Engineering Department
              </motion.span>
            </div>

            <motion.div
              className="h-px w-32 bg-gradient-to-r from-transparent via-white/70 to-transparent sm:w-40"
              animate={{ opacity: [0.45, 0.9, 0.45], scaleX: [0.92, 1.08, 0.92] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <h1 className="max-w-4xl text-center text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="block"
            >
              Welcome to Computer Science &amp; Engineering Department
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-4 block text-base font-medium leading-tight text-white/72 sm:text-xl md:text-2xl lg:text-[2rem]"
            >
              — engineering{" "}
              <span className="relative ml-1 inline-grid min-w-[8ch] justify-items-start text-left align-baseline leading-none sm:min-w-[10ch] md:min-w-[12ch]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleNumber}
                    className="absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-[1em] font-semibold leading-none tracking-tight text-left text-transparent"
                    initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -28, filter: "blur(10px)" }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {titles[titleNumber]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible whitespace-nowrap text-[1em] font-semibold leading-none tracking-tight">
                  {longestTitle}
                </span>
              </span>
            </motion.span>
          </h1>

        </div>
      </div>
    </motion.div>
  );
}

export { Hero };
