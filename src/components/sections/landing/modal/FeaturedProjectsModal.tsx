"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import ProjectSplashCard from "@/components/ui/ProjectSplashCard";
import { PROJECTS } from "@/lib/projectsData";
import { ArrowRight } from "lucide-react";

interface FeaturedProjectsModalProps {
  onClose: () => void;
}

const FeaturedProjectsModal: React.FC<FeaturedProjectsModalProps> = ({
  onClose,
}) => {
  // Get first 3 projects or filter by "featured" flag
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="h-full flex flex-col p-4">
      <h2 className="text-3xl font-bold text-gray-300 mb-6">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-y-auto">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <ProjectSplashCard
              title={project.title}
              iconName={project.iconName!}
              gradient={project.gradient}
              textColor={project.textColor}
              shadowColor={project.shadowClassName}
              size="md"
              className="!static !rotate-0 !translate-x-0 !translate-y-0 mb-4"
            />
            <h3 className="font-display text-lg font-semibold text-gray-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
            <Link
              href={`/projects/${project.name}/case-study`}
              onClick={() => {
                onClose();
                window.scrollTo({ behavior: "smooth", top: 0 });
              }}
              className="mt-3 text-rose-500 text-sm font-medium hover:underline flex items-center gap-1"
            >
              View Case Study <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <Button asChild variant="default" onClick={onClose}>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProjectsModal;