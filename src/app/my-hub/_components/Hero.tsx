"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Code, FlaskConical } from "lucide-react";

const  Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6 mb-24"
    >
      <div className="flex justify-center gap-3 mb-4">
        <span className="px-3 py-1 text-xs font-mono bg-amber-400/10 rounded-full border border-amber-400/30 text-rose-400">
          🧪 LAB
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Mickey's{" "}
        <span className="bg-linear-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
          Hub
        </span>
      </h1>
      <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
        Welcome to my digital laboratory. Here you'll find experiments,
        half‑baked ideas, and things I'm currently tinkering with.
        No promises, just curiosity.
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <div className="flex items-center gap-2 text-white/50">
          <Coffee className="w-4 h-4" />
          <span className="text-sm font-mono">Fueled by coffee</span>
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <FlaskConical className="w-4 h-4" />
          <span className="text-sm font-mono">Experiments ahead</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;