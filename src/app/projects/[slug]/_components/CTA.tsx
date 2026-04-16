"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

interface CTAProps {
  liveUrl?: string;
  repoUrl: string;
}

const CTA: React.FC<CTAProps> = ({ liveUrl, repoUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-4 my-2"
    >
      {liveUrl && (
        <Button asChild size="lg" variant="default">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-4 h-4 w-4" />
            View Live Project
          </a>
        </Button>
      )}
      <Button asChild size="lg" variant="outline">
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          <BsGithub className="mr-4 h-4 w-4" />
          View Source Code
        </a>
      </Button>
    </motion.div>
  );
};

export default CTA;