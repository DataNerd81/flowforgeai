import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES } from "@/lib/constants";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Custom AI app development, process automation, and consulting services to transform your business operations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pb-24">
        <Container>
          <FadeIn>
            <SectionHeading
              title="Our Services"
              subtitle="From process audits to fully deployed AI automation — we cover the full stack."
            />
          </FadeIn>

          <StaggerChildren className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                slug={service.slug}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <ServiceCTA />
    </>
  );
}
