"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProblemStatementProps {
  data: {
    title: string;
    description: string;
    challenges?: string[];
  };
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ data }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mt-16 mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
        {data.title}
      </h2>
      <p className="text-lg text-white/70 leading-relaxed mb-6">
        {data.description}
      </p>
      {data.challenges && (
        <div className="glass p-6 rounded-2xl border border-white/20">
          <h3 className="font-display text-xl font-medium text-white mb-4">Key Challenges</h3>
          <ul className="space-y-2">
            {data.challenges.map((challenge, i) => (
              <li key={i} className="text-white/60 flex items-start gap-3">
                <span className="text-rose-400 mt-1">▹</span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.section>
  );
};

export default ProblemStatement;