"use client";

import React from "react";
import { motion } from "framer-motion";

interface NextStepsProps {
  data?: {
    title: string;
    description: string;
    items?: string[];
  };
}

const NextSteps: React.FC<NextStepsProps> = ({ data }) => {
  if (!data) return null;

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
      {data.items && (
        <ul className="space-y-3">
          {data.items.map((item, i) => (
            <li
              key={i}
              className="text-white/60 flex items-start gap-3"
            >
              <span className="text-lime-400 mt-1">→</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  );
};

export default NextSteps;
