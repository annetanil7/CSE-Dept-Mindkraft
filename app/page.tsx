"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Hero } from "@/components/ui/animated-hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ModeToggle } from "@/components/ui/mode-toggle";

const TOTAL_SECONDS = 6;

export default function HomePage() {
  const [redirectStarted, setRedirectStarted] = useState(false);
  const router = useRouter();

  const handleHeroComplete = useCallback(() => {
    setRedirectStarted(true);
    setTimeout(() => {
      router.push("/events");
    }, 800); // 0.8 second delay after "the future"
  }, [router]);

  const progress = redirectStarted ? 100 : 0; // Simplified for now, or could keep it dynamic

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background selection:bg-blue-500/30 selection:text-blue-200">
      <BackgroundBeams />
      <ModeToggle />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl px-6"
      >
        <Hero onComplete={handleHeroComplete} />

        {/* Progress section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-10"
        >
          {/* Tech Countdown Section */}
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                <Clock className="size-3" />
                <span>{redirectStarted ? "Ready" : "System Initializing"}</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-primary">
                {redirectStarted ? "100%" : "Syncing..."}
              </span>
            </div>

            <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: redirectStarted ? "100%" : "30%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <p className="text-center text-[11px] font-medium text-muted-foreground tracking-[0.1em] uppercase">
              {redirectStarted
                ? "Entering the future..."
                : "Awaiting final sequence..."}
            </p>
          </div>

          {/* Interactive Button */}
          <motion.button
            onClick={() => router.push("/events")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-primary px-10 py-4 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 hover:shadow-2xl hover:shadow-primary/20"
          >
            <span className="relative z-10 flex items-center gap-3">
              Proceed to Events
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 text-center"
      >
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">
          Mindkraft · CSE · 2026
        </p>
      </motion.div>
    </main>
  );
}
