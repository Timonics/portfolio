"use client";

import React from "react";
import { motion } from "framer-motion";

import pic from "@/assets/jpg/About-me.jpg";
import Image from "next/image";


const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6 mb-24"
    >
      <div className="w-32 h-32 bg-linear-to-br from-green-300 to-green-600 rounded-full mx-auto flex items-center justify-center pops">
        {pic ? (
          <Image
            src={pic.src}
            alt="Personal Pic"
            width={100}
            height={100}
            className="w-full h-full rounded-full object-cover object-[50%_20%]"
          />
        ) : (
          <span className="text-4xl font-bold text-black">OM</span>
        )}
      </div>
      <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
        About{" "}
        <span className="bg-linear-to-r from-rose-400 via-amber-400 to-lime-400 bg-clip-text text-transparent">
          Me
        </span>
      </h1>
      <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
        I'm Michael Oderinde — a full‑stack engineer who builds systems that
        scale with intention. Here's a bit about my journey, skills, and what
        drives me.
      </p>
    </motion.div>
  );
};

export default Hero;
