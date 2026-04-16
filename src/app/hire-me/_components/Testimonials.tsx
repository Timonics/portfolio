"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonialsData"; // adjust path

const Testimonials: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-12 mb-32"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-white">
        What Clients <span className="text-green-400">Say</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="glass border border-white/10 rounded-2xl p-6"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-green-400 text-green-400"
                />
              ))}
            </div>
            <p className="font-sans text-white/70 italic mb-6">
              "{testimonial.content}"
            </p>
            <div>
              <p className="font-display font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="font-sans text-sm text-white/50">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;