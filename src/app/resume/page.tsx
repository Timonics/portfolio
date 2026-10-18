import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Download, ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume – Michael Oderinde",
  description:
    "Download the resume of Michael Oderinde, a full‑stack engineer specializing in React, Node.js, and scalable web applications.",
  openGraph: {
    title: "Michael Oderinde – Resume",
    description:
      "Full‑stack engineer with experience building performant, user‑centric web applications. Download my resume.",
    type: "website",
    url: "https://michaeloderinde.dev/resume",
  },
};

export default function ResumePage() {
  return (
    <Container size="small" className="py-12 md:py-20">
      <div className="text-center space-y-6">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance">
          Resume
        </h1>
        <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
          Download or view my full resume. Last updated: April 2026.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button asChild size="lg" variant="default" className="min-h-[44px]">
            <a href="/resume.pdf" download="Michael_Oderinde_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-[44px]">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open PDF
            </a>
          </Button>
        </div>

        {/* PDF preview: aspect-ratio so it scales to the viewport on mobile,
            capped at 80vh on desktop. */}
        <div className="mt-8 glass border border-white/10 rounded-2xl overflow-hidden">
          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full aspect-[8.5/11] max-h-[80vh]"
            title="Resume Preview"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  );
}