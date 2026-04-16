import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PROJECTS } from "@/lib/projectsData";
import CTA from "../_components/CTA";
import Design from "../_components/Design";
import Hero from "../_components/Hero";
import Implementation from "../_components/Implementation";
import NextSteps from "../_components/NextSteps";
import ProblemStatement from "../_components/ProblemStatement";
import Research from "../_components/Research";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.name === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${project.title} – Case Study | Michael Oderinde`,
    description: `Deep dive into ${project.title}: ${project.subtitle}. Learn about the problem, approach, architecture, and results.`,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.name === slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <main className="py-20">
      <Container size="small" className=" flex flex-col gap-15">
        <Hero project={project} />
        <CTA liveUrl={project.live} repoUrl={project.repo} />
        <ProblemStatement data={caseStudy.problemStatement} />
        {/* <Research data={caseStudy.researchPlanning} /> */}
        <Implementation data={caseStudy.engineering} />
        <Design data={caseStudy.designUX} />
        <NextSteps data={caseStudy.nextSteps} />
        <CTA liveUrl={project.live} repoUrl={project.repo} />
      </Container>
    </main>
  );
}
