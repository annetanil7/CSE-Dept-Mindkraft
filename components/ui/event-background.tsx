"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Particle = ({ delay = 0 }) => {
  const randomX = useMemo(() => Math.random() * 100, []);
  const randomY = useMemo(() => Math.random() * 100, []);
  const size = useMemo(() => 2 + Math.random() * 4, []);
  const particleColors = useMemo(() => ["#A79E9C", "#D3C3B9", "#B58863", "#3D4D55"], []);
  const color = useMemo(
    () => particleColors[Math.floor(Math.random() * particleColors.length)],
    [particleColors]
  );

  return (
    <motion.div
      className="absolute rounded-full shadow-[0_0_20px_rgba(181,136,99,0.2)]"
      initial={{ x: `${randomX}%`, y: `${randomY}%`, opacity: 0 }}
      animate={{
        y: [`${randomY}%`, `${randomY - 10}%`, `${randomY}%`],
        opacity: [0.08, 0.34, 0.08],
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{ width: size, height: size, backgroundColor: color }}
    />
  );
};

export const EventBackground = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-[#161616]", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#161616_0%,#10202A_34%,#3D4D55_72%,#A79E9C_100%)] opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(211,195,185,0.38),transparent_38%),radial-gradient(circle_at_20%_75%,rgba(61,77,85,0.4),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(181,136,99,0.32),transparent_38%)]" />
      <div className="soft-grid absolute inset-0 opacity-12" />
      <div className="noise-overlay opacity-30" />

      <div className="absolute inset-0 opacity-90">
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            rotate: [0, 35, 0],
            x: ["-16%", "10%", "-16%"],
            y: ["-6%", "6%", "-6%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] left-[-10%] h-[50rem] w-[50rem] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(16,32,42,0.58)" }}
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            rotate: [0, -20, 0],
            x: ["12%", "-8%", "12%"],
            y: ["8%", "-8%", "8%"],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-12%] right-[-10%] h-[42rem] w-[42rem] rounded-full blur-[140px]"
          style={{ backgroundColor: "rgba(181,136,99,0.34)" }}
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.32, 0.2],
            scale: [0.82, 1.08, 0.82],
            x: ["-6%", "6%", "-6%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[25%] top-[12%] h-[24rem] w-[24rem] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(211,195,185,0.34)" }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <Particle key={i} delay={i * 0.6} />
        ))}
      </div>

      <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.25]">
        <motion.path
          d="M-50 300 C 150 200 350 400 1200 300"
          stroke="rgba(211,195,185,0.34)"
          strokeWidth="0.8"
          fill="none"
          strokeDasharray="20 40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M1200 700 C 900 800 600 600 -50 700"
          stroke="rgba(61,77,85,0.38)"
          strokeWidth="0.8"
          fill="none"
          strokeDasharray="20 40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/60 via-transparent to-[#161616]/80 pointer-events-none" />
    </div>
  );
};
