"use client";

import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  Icon: IconType;
  projectName: string;
  textColor: string;
  fontSize?: string;
  backgroundGradient?: string;
  backgroundColor?: string;
  shadowClassName?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  Icon,
  projectName,
  textColor,
  fontSize = "25px",
  backgroundGradient,
  backgroundColor = "bg-gray-800",
  shadowClassName,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center h-[180px] w-[250px] sm:w-[280px] sm:h-[200px] rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl cursor-pointer transition-shadow duration-300",
        backgroundGradient
          ? `bg-gradient-to-br ${backgroundGradient}`
          : backgroundColor,
        shadowClassName
      )}
      style={{ fontSize }}
    >
      <h3 className={cn("font-bold flex items-center gap-2", textColor)}>
        <Icon size={36} className="p-2 bg-black/20 rounded-xl" />
        {projectName}
      </h3>
    </motion.div>
  );
};

export default ProjectCard;