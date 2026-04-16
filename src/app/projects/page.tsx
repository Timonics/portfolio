"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/projectsData";
import MobileProjectModal from "@/components/sections/projects/MobileProjectModal";
import ProjectTag from "@/components/sections/projects/ProjectTag";
import ProjectSplashCard from "@/components/ui/ProjectSplashCard";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [showProjectInfo, setShowProjectInfo] = useState<boolean>(false);
  const [showAllTags, setShowAllTags] = useState<boolean>(false);
  const [selectedProjectName, setSelectedProjectName] = useState<string>("");

  const allTags: string[] = useMemo(() => {
    const tagSet: Set<string> = new Set();
    PROJECTS.forEach((project) => {
      project.tags.forEach((tag: string) => tagSet.add(tag));
    });
    return ["All", ...Array.from(tagSet)];
  }, []);

  const filteredProjects =
    activeTag !== "All"
      ? PROJECTS.filter((project) => project.tags.includes(activeTag))
      : PROJECTS;

  const mobileSelectedProject = PROJECTS.find(
    (proj) => proj.name === selectedProjectName,
  );

  return (
    <>
      <Container size="default" className="py-12 md:py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5 mb-12"
        >
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              My{" "}
              <span className="bg-linear-to-r from-rose-400 via-amber-400 to-lime-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
          </div>
          <p className="text-white/70 text-lg lg:w-[70%]">
            A selection of my favorite builds — from experimental playground
            ideas to fully deployed production apps. Every project represents a
            new challenge I tackled and a new skill I honed.
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3 items-center pt-4">
            {(showAllTags ? allTags : allTags.slice(0, 5)).map((tag) => (
              <ProjectTag
                key={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </ProjectTag>
            ))}
            {allTags.length > 5 && (
              <button
                onClick={() => setShowAllTags(!showAllTags)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-rose-400 border border-rose-400/30 hover:bg-rose-400/10 transition"
              >
                {showAllTags ? "Show Less" : `+${allTags.length - 5} More`}
              </button>
            )}
          </div>
        </motion.header>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => {
            const projectTags = project.tags;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col lg:flex-row items-start mx-auto lg:items-center gap-6 p-6 lg:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300"
              >
                {/* Project Card (visual) - clickable on mobile only */}
                <div className="lg:w-1/3 w-full flex justify-center">
                  <ProjectSplashCard
                    title={project.title}
                    iconName={project.iconName!}
                    gradient={project.gradient}
                    textColor={project.textColor}
                    shadowColor={project.shadowClassName}
                    size="md"
                    onClick={() => {
                      // Only trigger modal on mobile (screen < 1024px)
                      if (window.innerWidth < 1024) {
                        setSelectedProjectName(project.name);
                        setShowProjectInfo(true);
                      }
                    }}
                    className={`
                      static! !rotate-0 !translate-x-0 !translate-y-0 
                      w-full max-w-[300px] mx-auto lg:mx-0
                      lg:pointer-events-none cursor-pointer lg:cursor-default
                    `}
                  />
                </div>

                {/* Project Details - hidden on mobile, visible on desktop */}
                <div className="hidden lg:flex lg:w-2/3 flex-col gap-3">
                  <h2
                    className={`text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r ${project.headerColor}`}
                  >
                    {project.title}
                  </h2>
                  {project.collaboration && (
                    <span
                      className={cn(
                        "px-2 py-0.5 text-xs font-mono rounded-full border w-fit",
                        project.collaboration === "solo"
                          ? "bg-blue-400/10 text-blue-400 border-blue-400/30"
                          : "bg-purple-400/10 text-purple-400 border-purple-400/30",
                      )}
                    >
                      {project.collaboration === "solo" ? "👤 Solo" : "👥 Team"}
                    </span>
                  )}
                  <p className="text-white/80 text-lg">{project.subtitle}</p>
                  <p className="text-white/50">{project.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-mono bg-white/5 rounded-full border border-white/10 text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    {project.live && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Repo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="shadow-lg shadow-rose-400/30"
                    >
                      <Link
                        href={`/projects/${project.name}/case-study`}
                        onClick={() =>
                          window.scrollTo({ behavior: "smooth", top: 0 })
                        }
                      >
                        Case Study
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass p-8 rounded-3xl border border-white/20 shadow-xl">
            <h4 className="text-2xl font-bold text-white">
              Like what you see?
            </h4>
            <p className="text-white/60 mt-2">
              Let's build something together.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="default">
                <Link
                  href="/contact-me"
                  onClick={() =>
                    window.scrollTo({ behavior: "smooth", top: 0 })
                  }
                >
                  Contact Me
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Mobile Project Modal */}
      <AnimatePresence>
        {showProjectInfo && mobileSelectedProject && (
          <MobileProjectModal
            isOpen={showProjectInfo}
            onClose={() => setShowProjectInfo(false)}
            project={mobileSelectedProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}
