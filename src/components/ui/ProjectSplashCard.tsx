"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/iconMap";

export interface ProjectSplashCardProps {
  title: string;
  iconName: string;
  gradient?: string; // e.g., "from-green-500 to-emerald-600" or full CSS gradient
  textColor?: string;
  shadowColor?: string;
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-[120px] w-[180px] sm:w-[200px] sm:h-[140px]",
  md: "h-[180px] w-[250px] sm:w-[280px] sm:h-[200px] md:w-[300px] md:h-[220px]",
  lg: "h-[220px] w-[300px] sm:w-[340px] sm:h-[240px]",
};

const ProjectSplashCard: React.FC<ProjectSplashCardProps> = ({
  title,
  iconName,
  gradient,
  textColor = "text-white",
  shadowColor = "shadow-black/40",
  rotation = 0,
  className,
  style,
  onClick,
  size = "md",
}) => {
  const backgroundStyle = gradient
    ? gradient.includes("linear-gradient")
      ? { background: gradient }
      : { background: `linear-gradient(145deg, ${gradient})` }
    : { background: "linear-gradient(145deg, #1f2937, #111827)" };

  const Icon = getIcon(iconName);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotation }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        rotate: rotation + (rotation > 0 ? 2 : -2),
        zIndex: 20,
        transition: { duration: 0.2 },
      }}
      onClick={onClick}
      className={cn(
        "absolute pops flex items-center justify-center cursor-pointer",
        sizeClasses[size],
        "rounded-2xl backdrop-blur-sm border border-white/20",
        "shadow-2xl transition-all duration-300",
        shadowColor,
        className,
      )}
      style={{
        ...backgroundStyle,
        ...style,
      }}
    >
      <h2
        className={cn(
          "font-bold flex items-center text-2xl sm:text-3xl gap-2",
          textColor,
        )}
      >
        <Icon
          className="p-2 bg-black/20 rounded-xl backdrop-blur-sm"
          size={36}
        />
        {title}.
      </h2>
    </motion.div>
  );
};

export default ProjectSplashCard;
