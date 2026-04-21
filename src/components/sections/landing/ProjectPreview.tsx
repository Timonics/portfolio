"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import ProjectSplashCard from "@/components/ui/ProjectSplashCard";
import { splashProjects } from "@/lib/splashProjectsData";

const ProjectsPreview: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1023.5);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  console.log(isMobile);
  return (
    <section className="relative bg-gray-100 rounded-t-[1rem] pt-15 lg:pt-30 pb-50 lg:pb-60 -mt-10 overflow-visible">
      {/* Subtle top shadow for depth */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/5 to-transparent" />

      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Left Column – Glassy Panel with Vignette */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col gap-5 p-8 md:p-12 rounded-3xl lg:w-1/2 bg-black backdrop-blur-xl border border-white/40 shadow-2xl shadow-black/80 overflow-hidden"
          >
            {/* Colored vignette/glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl -z-10" />

            <p className="font-mono text-xs font-medium uppercase tracking-wider text-rose-500 border-b border-rose-200 pb-2 w-fit">
              My Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-thin leading-tight">
              🚀 Build. Break.{" "}
              <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-lime-500 bg-clip-text text-transparent">
                Innovate.
              </span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              From sleek web apps to powerful backends, here's a glimpse into
              the projects I've poured my passion into. Each one is a story of
              late-night debugging, "Aha!" moments, and pushing limits.
            </p>

            <Button
              asChild
              size="lg"
              variant="default"
              className="mt-4 w-fit shadow-lg shadow-rose-200 hover:shadow-rose-300"
            >
              <Link
                href="/projects"
                onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
              >
                View All Projects
              </Link>
            </Button>
          </motion.div>

          {/* Right Column – Staggered, Overlapping Cards */}
          {/* Right Column – Staggered, Overlapping Cards */}
          <div className="lg:w-1/2 w-full min-h-[500px] md:min-h-[550px] relative flex items-center justify-center">
            {splashProjects.map((project, index) => {
              // Spread them out more with different positions
              const positions = [
                { top: "5%", left: "10%", mobileLeft: "", rotation: -6 },
                { top: "30%", left: "25%", mobileLeft: "", rotation: 4 },
                { top: "58%", left: "10%", mobileLeft: "", rotation: -2 },
                { top: "90%", left: "20%", mobileLeft: "", rotation: 8 },
              ];
              const pos = positions[index] || {
                top: "50%",
                left: "50%",
                mobileLeft: "50%",
                rotation: 0,
              };

              return (
                <ProjectSplashCard
                  key={project.id}
                  title={project.title}
                  iconName={project.icon}
                  gradient={project.gradient}
                  textColor={project.textColor}
                  shadowColor={project.shadowColor}
                  rotation={project.rotation}
                  className="shadow-2xl"
                  style={{
                    top: pos.top,
                    left: isMobile ? pos.mobileLeft : pos.left,
                    transform: `translate(-50%, -50%) rotate(${pos.rotation}deg)`,
                    zIndex: index + 1,
                  }}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsPreview;
