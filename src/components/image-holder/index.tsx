"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "@/assets/jpg/Portfolio-pic1.jpg";

const MyImage: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute w-[80%] h-[80%] bg-linear-to-br from-rose-400/20 via-transparent to-lime-500/10 blur-3xl rounded-full" />

      {/* Layer 1: Back glass panel - rotated slightly */}
      <motion.div
        initial={{ rotate: -6, y: 10 }}
        animate={{ rotate: -6, y: 10 }}
        whileHover={{ rotate: -4, y: 8 }}
        transition={{ duration: 0.3 }}
        className="absolute w-[65%] max-w-95 h-[85%] max-h-105 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
      />

      {/* Layer 2: Middle glass panel - different rotation */}
      <motion.div
        initial={{ rotate: 2, x: -10 }}
        animate={{ rotate: 2, x: -10 }}
        whileHover={{ rotate: 1, x: -8 }}
        transition={{ duration: 0.3 }}
        className="absolute w-[65%] max-w-95 h-[85%] max-h-105 rounded-3xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
      />

      {/* Layer 3: Main image - sits on top */}
      <motion.div
        initial={{ rotate: -2, y: -5 }}
        animate={{ rotate: -2, y: -5 }}
        whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute w-[65%] max-w-95 h-[85%] max-h-105 rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl"
      >
        <Image
          src={profilePic}
          alt="Oderinde Michael"
          fill
          className="object-cover object-[50%_25%]"
          priority
        />
        {/* Subtle linear overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative elements - subtle lines */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-rose-400/40 to-transparent" />
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-px h-40 bg-linear-to-b from-transparent via-lime-400/30 to-transparent" />
    </div>
  );
};

export default MyImage;