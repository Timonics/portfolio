"use client";

import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0  overflow-hidden">
      <motion.div
        className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-neon-cyan/20 blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-20 h-96 w-96 rounded-full bg-neon-magenta/20 blur-[120px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-2/3 h-64 w-64 rounded-full bg-neon-lime/15 blur-[90px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}