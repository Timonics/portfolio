"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

const exploringTools = [
  "tRPC",
  "Prisma",
  "Bun",
  "Zustand",
  "Vitest",
  "Astro",
  "Solid.js",
  "Drizzle ORM",
];

const ToolsExploring: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-30"
    >
      <div className="flex items-center gap-3 mb-6">
        <Wrench className="w-6 h-6 text-amber-400" />
        <h2 className="font-display text-3xl font-semibold text-white">
          Tools I'm Exploring
        </h2>
      </div>
      <div className="glass border border-white/10 rounded-2xl p-6">
        <div className="flex flex-wrap gap-3">
          {exploringTools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 font-mono text-sm bg-amber-400/5 rounded-full border border-amber-400/30 text-amber-400"
            >
              {tool}
            </span>
          ))}
        </div>
        <p className="font-sans text-white/50 text-sm mt-4">
          Always learning. These are technologies I'm currently tinkering with
          for future projects.
        </p>
      </div>
    </motion.section>
  );
};

export default ToolsExploring;