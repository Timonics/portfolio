"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col p-4">
      <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
        Resume
      </h2>

      <div className="flex-1 overflow-y-auto flex flex-col items-center">
        {/* Preview Image */}
        <div className="w-full max-w-2xl mb-6 border border-gray-200 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/resume-preview.png"
            alt="Resume Preview"
            width={800}
            height={1000}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <p className="text-gray-600 text-center mb-6 max-w-md">
          Download my full resume to learn more about my experience, skills, and
          projects.
        </p>

        <div className="flex flex-col md:flex-row gap-4 my-4">
          <Button asChild size="lg" variant="default">
            <a href="/resume.pdf" download="Michael_Oderinde_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            onClick={onClose}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in New Tab
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;