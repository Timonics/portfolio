import { Container } from "@/components/ui/Container";
import Hero from "./_components/Hero";
import CurrentlyBrewing from "./_components/CurrentlyBrewing";
import SideProjects from "./_components/SideProjects";
import ToolsExploring from "./_components/ToolsExploring";
import CTA from "./_components/CTA";

export default function MyHubPage() {
  return (
    <Container size="small" className="py-12 md:py-20">
      <Hero />
      <CurrentlyBrewing />
      <SideProjects />
      <ToolsExploring />
      <CTA />
    </Container>
  );
}