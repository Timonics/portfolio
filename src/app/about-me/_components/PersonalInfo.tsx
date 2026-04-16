"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
  { icon: Calendar, label: "Experience", value: "5+ Years" },
  { icon: Briefcase, label: "Availability", value: "Freelance / Full‑time" },
];

const PersonalInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="glass p-6 md:p-8 mb-24"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {infoItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-rose-400" />
              </div>
              <p className="text-sm text-white/50">{item.label}</p>
              <p className="text-lg font-medium text-white">{item.value}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PersonalInfo;