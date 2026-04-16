"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6 mb-12"
    >
      <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
        Let's{" "}
        <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-lime-400 bg-clip-text text-transparent">
          Connect
        </span>
      </h1>
      <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
        Have a project in mind or just want to say hello? I'd love to hear from you.
        Fill out the form or reach out directly.
      </p>
    </motion.div>
  );
};

export default Hero;