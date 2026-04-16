"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

interface SideProjects {
  title: string;
  description: string;
  tags: string[];
  live: string | null;
  repo: string;
  status: string;
}

const sideProjects: SideProjects[] = [
  {
    title: "ThriftEase",
    description:
      "Marketplace for thrifted fashion with seller dashboards and image uploads.",
    tags: ["React", "TypeScript", "LocalStorage"],
    live: "https://thrift-ease.vercel.app/",
    repo: "https://github.com/Timonics/Thrift-Ease",
    status: "in-progress",
  },
  {
    title: "TicketTrail",
    description:
      "APIs for movie reservations, seat booking and allocations, and payment.",
    tags: ["Express", "Node.js", "Postgres", "JavaScript"],
    repo: "https://github.com/Timonics/TicketTrail",
    live: null,
    status: "complete",
  },
  {
    title: "Portfolio v1",
    description:
      "The previous version of this portfolio (archived for nostalgia).",
    tags: ["React", "Vite", "Tailwind"],
    repo: "https://github.com/Timonics/mickeys-portfolio",
    live: "https://mickeys-portfolio.vercel.app/",
    status: "archived",
  },
  {
    title: "Payhook",
    description:
      "A lightweight NestJS application that listens for Stripe webhook events, verifies their signatures, and processes them accordingly.",
    tags: ["NestJS", "Node.js", "Postgres"],
    repo: "https://github.com/Timonics/payhook",
    live: null,
    status: "in-progress",
  },
];

const statusColors = {
  "in-progress": "bg-yellow-400/10 text-yellow-400 border-yellow-400/30",
  complete: "bg-green-400/10 text-green-400 border-green-400/30",
  archived: "bg-gray-400/10 text-gray-400 border-gray-400/30",
};

const SideProjects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <h2 className="font-display text-3xl font-semibold text-white mb-6">
        Side Projects & Experiments
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sideProjects.map((project) => (
          <div
            key={project.title}
            className="glass border border-white/10 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-xl font-medium text-white">
                {project.title}
              </h3>
              <span
                className={`px-2 py-0.5 text-xs font-mono rounded-full border ${statusColors[project.status as keyof typeof statusColors]}`}
              >
                {project.status}
              </span>
            </div>
            <p className="font-sans text-white/60 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-white/5 rounded-md border border-white/10 text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition"
              >
                <BsGithub className="w-4 h-4" />
                Repo
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white/50 hover:text-white transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SideProjects;
