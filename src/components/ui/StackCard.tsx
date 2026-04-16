"use client";

import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StackCardProps {
  name: string;
  icon: IconType;
  variant?: "light" | "dark";
  className?: string;
}

const StackCard: React.FC<StackCardProps> = ({
  name,
  icon: Icon,
  variant = "dark",
  className,
}) => {
  const variants = {
    light: "bg-white border-gray-200 text-gray-800 shadow-md hover:shadow-lg",
    dark: "bg-gradient-to-br from-gray-800 to-gray-900 text-white/80 border-gray-700 shadow-lg hover:shadow-xl",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "flex items-center justify-center gap-2 sm:gap-3",
        "h-[90px] sm:h-[100px] px-4 rounded-xl border",
        "transition-all duration-200",
        variants[variant],
        className
      )}
    >
      <Icon size={28} className="sm:size-8" />
      <span className="font-sans font-medium text-sm sm:text-base">{name}</span>
    </motion.div>
  );
};

export default StackCard;