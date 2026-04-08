"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <GradientBlob className="w-[600px] h-[600px] -right-40 top-20" />
      <GradientBlob className="w-[400px] h-[400px] -left-20 bottom-20 opacity-10" />

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl">
          <FadeIn>
            <Badge>AI Automation Agency</Badge>
          </FadeIn>

          <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl font-heading leading-[1.05]">
            <TextReveal text="We Build AI That Works For Your Business" />
          </h1>

          <FadeIn delay={0.4}>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl leading-relaxed">
              We don&apos;t just plug in AI tools. We diagnose your bottlenecks
              first, then build custom automation that saves you time, money, and
              headaches.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="/services" variant="ghost" size="lg">
                See Our Services
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
