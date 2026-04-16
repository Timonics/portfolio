"use client";

import React from "react";
import { motion } from "framer-motion";

interface ResearchProps {
  data?: {
    title: string;
    description: string;
    findings?: string[];
  };
}

const Research: React.FC<ResearchProps> = ({ data }) => {
  if (!data) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="my-16"
    >
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
        {data.title}
      </h2>
      <p className="font-sans text-lg text-white/70 leading-relaxed mb-6">
        {data.description}
      </p>
      {data.findings && (
        <div className="grid sm:grid-cols-2 gap-4">
          {data.findings.map((finding, i) => (
            <div key={i} className="glass p-5 rounded-xl border border-white/10">
              <p className="font-sans text-white/80">{finding}</p>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default Research;