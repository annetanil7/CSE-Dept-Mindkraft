"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/ui/animated-hero";

const TOTAL_SECONDS = 7;

export default function HomePage() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const router = useRouter();

  const goToEvents = useCallback(() => {
    router.push("/events");
  }, [router]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          goToEvents();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [goToEvents]);

  const progress = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <div className="soft-grid absolute inset-0 opacity-40" />
      <motion.div
        className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-white/8 blur-[120px]"
        animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[10%] h-64 w-64 rounded-full bg-white/6 blur-[140px]"
        animate={{ scale: [1.12, 1, 1.12], opacity: [0.18, 0.34, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <section className="glass-panel-strong surface-outline relative z-10 w-full max-w-6xl overflow-hidden rounded-[2rem] px-6 py-10 sm:px-8 md:px-12 md:py-14">
        <div className="noise-overlay" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-10">
          <Hero />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex w-full flex-col items-center gap-6"
          >
            <div className="glass-panel w-full max-w-xl rounded-2xl p-5 sm:p-6">
              <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/46">
                <span>Preparing Portal</span>
                <span>{secondsLeft}s</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-white via-zinc-300 to-zinc-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <p className="mt-4 text-center text-sm text-white/52">
                Curating event highlights and registration experiences for you.
              </p>
            </div>

            <motion.button
              onClick={goToEvents}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group glass-chip inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/12"
            >
              Enter Events
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
