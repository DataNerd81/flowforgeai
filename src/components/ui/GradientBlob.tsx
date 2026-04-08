"use client";

import { motion } from "motion/react";

interface GradientBlobProps {
  className?: string;
}

export function GradientBlob({ className = "" }: GradientBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      style={{
        background:
          "radial-gradient(circle, #39FF14 0%, #00E5FF 40%, #7B2FFF 100%)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, -20, 0],
        y: [0, -20, 15, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
