"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/projectsData";
import ProjectSplashCard from "@/components/ui/ProjectSplashCard";
import { cn } from "@/lib/utils";

interface HeroProps {
  project: Project;
}

const Hero: React.FC<HeroProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <div className="flex justify-center mb-8">
        <ProjectSplashCard
          title={project.title}
          iconName={project.iconName!}
          gradient={project.gradient}
          textColor={project.textColor}
          shadowColor={project.shadowClassName}
          size="lg"
          className="!static !rotate-0 !translate-x-0 !translate-y-0"
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">
        <span
          className={`bg-clip-text text-transparent bg-gradient-to-r ${project.headerColor}`}
        >
          {project.title}
        </span>{" "}
        Case Study
      </h1>

      <p className="text-xl text-white/70 max-w-2xl mx-auto">
        {project.subtitle}
      </p>

      <div className="flex items-center justify-center gap-4 my-4">
        {project.collaboration && (
          <span
            className={cn(
              "px-3 py-1 text-sm font-mono rounded-full border",
              project.collaboration === "solo"
                ? "bg-blue-400/10 text-blue-400 border-blue-400/30"
                : "bg-purple-400/10 text-purple-400 border-purple-400/30",
            )}
          >
            {project.collaboration === "solo" ? "Solo Project" : "Team Project"}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 text-sm font-mono bg-white/10 rounded-full border border-white/20 text-white/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
