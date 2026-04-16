"use client";

import React from "react";
import { motion } from "framer-motion";

const MyStory: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <h2 className="font-display text-3xl font-semibold text-white mb-6">
        My Story
      </h2>
      <div className="glass p-6 md:p-8 space-y-4">
        <p className="text-white/80 leading-relaxed">
          I started coding by tinkering with HTML and CSS, building small websites for friends.
          That curiosity evolved into a career building full‑stack applications that solve real problems.
        </p>
        <p className="text-white/80 leading-relaxed">
          Over the years, I've worked with startups and agencies, delivering scalable web apps
          using React, Node.js, and cloud platforms. I thrive on turning complex requirements into
          clean, maintainable code.
        </p>
        <p className="text-white/80 leading-relaxed">
          When I'm not coding, you'll find me exploring new tech, contributing to open source,
          or enjoying a good cup of coffee.
        </p>
      </div>
    </motion.section>
  );
};

export default MyStory;