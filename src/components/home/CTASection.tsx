"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.7_0.2_140_/_0.08),_transparent_70%)]" />

      <Container className="relative z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Automate?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted">
            Book a free consultation and discover what AI can do for your
            business. No commitment, no jargon — just honest advice.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
