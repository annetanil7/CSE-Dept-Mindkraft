"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const InteractiveGrid = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const sprX = useSpring(mouseX, springConfig);
  const sprY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 overflow-hidden bg-background pointer-events-none",
        className
      )}
    >
      {/* Premium Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(var(--primary-rgb), 0.06), transparent 80%)`,
        }}
      />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 h-full w-full [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />

      {/* Dynamic Glow */}
      <motion.div
        className="absolute -inset-[100px] z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
          left: sprX,
          top: sprY,
          width: "200px",
          height: "200px",
          opacity: 0.08,
          filter: "blur(60px)",
        }}
      />

      {/* Static soft gradients for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-background via-transparent to-background opacity-50" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-rgb),0.03),transparent_40%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.03),transparent_40%)]" />
    </div>
  );
};
