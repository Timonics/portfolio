import { Container } from "@/components/ui/Container";
import Hero from "./_components/Hero";
import ContactForm from "./_components/ContactForm";
import ContactInfo from "./_components/ContactInfo";


export default function ContactPage() {
  return (
    <Container size="default" className="py-12 md:py-20">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </Container>
  );
}