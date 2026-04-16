"use client";

import React from "react";
import { motion } from "framer-motion";

interface ImplementationProps {
  data: {
    title: string;
    description: string;
    architecture?: string[];
    decisions?: { title: string; description: string }[];
  };
}

const Implementation: React.FC<ImplementationProps> = ({ data }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="my-16"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
        {data.title}
      </h2>
      <p className="text-lg text-white/70 leading-relaxed mb-6">
        {data.description}
      </p>

      {data.architecture && (
        <div className="mb-8">
          <h3 className="text-xl font-medium text-white mb-4">Tech Stack & Architecture</h3>
          <div className="flex flex-wrap gap-3">
            {data.architecture.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 font-mono text-sm bg-linear-to-br from-gray-800 to-gray-900 rounded-lg border border-white/20 text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {data.decisions && (
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white mb-4">Key Technical Decisions</h3>
          {data.decisions.map((decision, i) => (
            <div key={i} className="glass p-5 rounded-xl border border-white/10">
              <h4 className="text-lg font-medium text-rose-400 mb-2">
                {decision.title}
              </h4>
              <p className="text-white/60">{decision.description}</p>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default Implementation;