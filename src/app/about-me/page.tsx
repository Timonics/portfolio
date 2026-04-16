import { Container } from "@/components/ui/Container";
import Hero from "./_components/Hero";
import PersonalInfo from "./_components/PersonalInfo";
import MyStory from "./_components/MyStory";
import Skills from "./_components/Skills";
import CTA from "./_components/CTA";
import Values from "./_components/Values";

export default function AboutMePage() {
  return (
    <Container size="small" className="py-12 md:py-20">
      <Hero />
      <PersonalInfo />
      <MyStory />
      <Skills />
      <Values />
      <CTA />
    </Container>
  );
}