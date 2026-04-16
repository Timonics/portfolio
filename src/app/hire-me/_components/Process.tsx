"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We discuss your project requirements, goals, and timeline.",
  },
  {
    number: "2",
    title: "Planning",
    description:
      "I create a detailed project plan and technical architecture.",
  },
  {
    number: "3",
    title: "Development",
    description:
      "I build your project with regular updates and feedback loops.",
  },
  {
    number: "4",
    title: "Delivery",
    description:
      "Final testing, deployment, and handover with documentation.",
  },
];

const Process: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-12 mb-32"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-white">
        My <span className="text-green-400">Process</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center">
              <span className="font-display text-3xl font-bold text-green-400">
                {step.number}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold text-white">
              {step.title}
            </h3>
            <p className="font-sans text-white/60">{step.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Process;