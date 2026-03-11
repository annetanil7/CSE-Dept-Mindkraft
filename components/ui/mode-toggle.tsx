"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="size-10 rounded-full bg-slate-100/10 animate-pulse" />
        );
    }

    const isDark = theme === "dark";

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="fixed top-8 right-8 z-[100] flex size-12 items-center justify-center rounded-full bg-slate-900 shadow-2xl transition-colors hover:bg-black focus:outline-none dark:bg-white dark:hover:bg-slate-100"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait">
                {isDark ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="size-5 text-slate-900" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="size-5 text-white" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
