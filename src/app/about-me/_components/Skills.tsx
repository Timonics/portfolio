"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "NestJS", "BullMQ", "Prisma"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Vercel", "Jest"],
  },
];

const Skills: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <h2 className="font-display text-3xl font-semibold text-white mb-6">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="glass border border-white/10 rounded-2xl p-6"
          >
            <h3 className="font-display text-xl font-medium text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-mono bg-white/5 rounded-full border border-white/10 text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
