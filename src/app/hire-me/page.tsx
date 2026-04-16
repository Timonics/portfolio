import { Container } from "@/components/ui/Container";
import CTA from "./_components/CTA";
import Hero from "./_components/Hero";
import Process from "./_components/Process";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

export default function HireMePage() {
  return (
    <Container size="default" className="py-12 md:py-20">
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </Container>
  );
}
