import ContactPreview from "@/components/sections/landing/ContactPreview";
import Hero from "@/components/sections/landing/Hero";
import MyHubPreview from "@/components/sections/landing/MyHubPreview";
import ProjectsPreview from "@/components/sections/landing/ProjectPreview";
import TechStackShowcase from "@/components/sections/landing/TechStackShowcase";
import HeroVignettes from "@/components/vignettes/hero-vignette";

export default function Home() {
  return (
    <>
      <HeroVignettes />
      <Hero />
      <MyHubPreview />
      <section className="py-10">
        <ProjectsPreview />
      </section>
      <TechStackShowcase />
      <ContactPreview />
    </>
  );
}
