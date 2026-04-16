"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ProjectTagProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  active = false,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
        active
          ? "bg-white text-black shadow-md"
          : "bg-white/5 text-white/60 border border-white/20 hover:bg-white/10 hover:text-white"
      )}
    >
      {children}
    </button>
  );
};

export default ProjectTag;