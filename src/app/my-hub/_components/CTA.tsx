"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const CTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-400/5 via-pink-400/5 to-rose-400/5 border border-purple-400/20 p-10 text-center"
    >
      <div className="absolute inset-0 bg-purple-400/5 blur-3xl -z-10" />
      <h2 className="font-display text-3xl font-bold text-white mb-4">
        Want to collaborate on an experiment?
      </h2>
      <p className="font-sans text-lg text-white/70 max-w-xl mx-auto mb-8">
        I'm always open to jamming on side projects, hackathons, or just
        geeking out about tech.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" variant="default">
          <Link href="/contact-me">
            <Mail className="w-4 h-4 mr-2" />
            Reach Out
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <BsGithub className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default CTA;