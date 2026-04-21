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
          My journey into web development started with curiosity and a desire to
          build things that matter. What began as tinkering with HTML and CSS
          has evolved into a passion for creating scalable, user-centric
          applications that solve real-world problems.
        </p>
        <p className="text-white/80 leading-relaxed">
          I specialize in full-stack development, with expertise in modern
          JavaScript frameworks, backend technologies, and database design. I
          believe in writing clean, maintainable code and creating intuitive
          user experiences that delight users.
        </p>
        <p className="text-white/80 leading-relaxed">
          When I'm not coding, you'll find me exploring new tech, contributing
          to open source, or enjoying a good cup of coffee. I'm always excited
          about the next challenge and the opportunity to learn something new.
        </p>
      </div>
    </motion.section>
  );
};

export default MyStory;
