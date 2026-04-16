"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-400/5 via-amber-400/5 to-lime-400/5 border border-rose-400/20 p-10 text-center"
    >
      <div className="absolute inset-0 bg-rose-400/5 blur-3xl -z-10" />
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Let's Build Something Great
      </h2>
      <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
        Interested in working together? I'm always open to discussing new projects
        and opportunities.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" variant="default">
          <Link href="/contact-me">Get in Touch</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/projects">View My Work</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default CTA;