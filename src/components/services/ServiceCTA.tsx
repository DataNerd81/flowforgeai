import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ServiceCTAProps {
  title?: string;
  description?: string;
}

export function ServiceCTA({
  title = "Ready to get started?",
  description = "Let's discuss how we can help automate your business processes.",
}: ServiceCTAProps) {
  return (
    <section className="py-16 lg:py-24">
      <Container className="text-center">
        <h2 className="text-2xl font-bold font-heading sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-muted max-w-lg mx-auto">{description}</p>
        <div className="mt-8">
          <Button href="/contact" size="lg">
            Book a Free Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
