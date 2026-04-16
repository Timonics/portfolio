"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "I write maintainable, well‑documented code that scales.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great products are built by great teams communicating openly.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "I stay curious and constantly explore new technologies.",
  },
  {
    icon: Target,
    title: "User‑Centric",
    description: "I build with the end‑user in mind, focusing on real value.",
  },
];

const Values: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-30"
    >
      <h2 className="font-display text-3xl font-semibold text-white mb-6">
        My Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className="glass border border-white/10 rounded-2xl p-6 flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-1">
                  {value.title}
                </h3>
                <p className="text-sm text-white/60">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Values;