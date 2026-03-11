"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden bg-background ${className}`}>
            {/* Subtle Grid */}
            <div className="absolute inset-0 bg-grid-slate-900/[0.02] dark:bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,var(--background),transparent)]" />

            {/* Animated Beams */}
            <svg
                className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                        <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                </defs>

                <motion.rect
                    initial={{ x: "0%", y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0,
                    }}
                    x="10%"
                    width="1"
                    height="100%"
                    fill="url(#beam-gradient)"
                />
                <motion.rect
                    initial={{ x: "0%", y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                    }}
                    x="30%"
                    width="1"
                    height="100%"
                    fill="url(#beam-gradient)"
                />
                <motion.rect
                    initial={{ x: "0%", y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 5,
                    }}
                    x="60%"
                    width="1"
                    height="100%"
                    fill="url(#beam-gradient)"
                />
                <motion.rect
                    initial={{ x: "0%", y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                    }}
                    x="85%"
                    width="1"
                    height="100%"
                    fill="url(#beam-gradient)"
                />
            </svg>

            {/* Radial soft glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

            {/* Drifting blobs for organic feel */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 30, 60, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl opacity-20"
            />
            <motion.div
                animate={{
                    x: [0, -40, 40, 0],
                    y: [0, 60, -30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl opacity-20"
            />
        </div>
    );
};
