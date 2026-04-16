"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-8 mb-32"
    >
      <h1 className="font-display text-5xl md:text-6xl font-bold text-white">
        Ready to{" "}
        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          Hire Me?
        </span>
      </h1>
      <p className="font-sans text-xl text-white/70 max-w-3xl mx-auto">
        Let's bring your ideas to life! I specialize in creating scalable,
        modern web applications that deliver exceptional user experiences and
        drive business results.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" variant="default">
          <Link href="/contact-me">Start a Project</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/contact-me">Schedule a Call</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default Hero;
