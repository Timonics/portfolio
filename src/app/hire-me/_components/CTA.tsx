"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DollarSign, Clock } from "lucide-react";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-400/5 via-emerald-400/5 to-teal-400/5 border border-green-400/20 p-12 text-center"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-green-400/5 blur-3xl -z-10" />
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Ready to Start Your{" "}
          <span className="text-green-400">Project?</span>
        </h2>
        <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">
          Let's discuss your project and see how I can help bring your vision to
          life. I'm excited to work with you!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="default">
            <Link href="/contact-me">
              <DollarSign className="w-5 h-5 mr-2" />
              Get a Quote
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact-me">
              <Clock className="w-5 h-5 mr-2" />
              Schedule Call
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;