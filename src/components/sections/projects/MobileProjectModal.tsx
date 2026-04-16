"use client";

import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Project } from "@/lib/projectsData";
import ProjectSplashCard from "@/components/ui/ProjectSplashCard";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | undefined;
};

const MobileProjectModal: React.FC<Props> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const container: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          {/* Modal Content - slides from bottom */}
          <motion.div
            className="relative w-full max-w-md glass border border-white/30 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl mx-0 sm:mx-4"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition z-10"
            >
              <X size={20} />
            </button>

            {/* Splash Card Preview */}
            <motion.div variants={item} className="flex justify-center mb-6">
              <ProjectSplashCard
                title={project.title}
                iconName={project.iconName!}
                gradient={project.gradient!}
                textColor={project.textColor}
                shadowColor={project.shadowClassName}
                size="lg"
                className="!static !rotate-0 !translate-x-0 !translate-y-0 mx-auto"
              />
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={item}
              className={`font-display text-2xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r ${project.headerColor}`}
            >
              {project.title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p variants={item} className="font-sans text-white/80 text-center mb-2">
              {project.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p variants={item} className="font-sans text-white/60 text-sm text-center mb-4">
              {project.desc}
            </motion.p>

            {/* Tags */}
            <motion.div variants={item} className="flex flex-wrap gap-2 justify-center mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-mono bg-white/10 rounded-full border border-white/20 text-white/70"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={item} className="flex flex-col gap-3">
              {project.live && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                  </a>
                </Button>
              )}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>
              </Button>
              <Button asChild variant="default" size="lg" className="w-full">
                <Link
                  href={`/projects/${project.name}/case-study`}
                  onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
                >
                  Read Case Study
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileProjectModal;