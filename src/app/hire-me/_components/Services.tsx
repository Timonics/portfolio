"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/servicesData"; // adjust path

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-12 mb-32"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-white">
        My <span className="text-green-400">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="glass border border-white/10 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-green-400/30 hover:shadow-lg hover:shadow-green-400/10"
          >
            <div className="space-y-2 mb-6">
              <h3 className="font-display text-2xl text-green-400">
                {service.title}
              </h3>
              <p className="font-sans text-white/70">{service.description}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-white/60">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-green-400/30 text-green-400 hover:bg-green-400/10">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;