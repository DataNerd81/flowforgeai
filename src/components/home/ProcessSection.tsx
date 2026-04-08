"use client";

import { Search, PenTool, Code, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const steps = [
  {
    icon: Search,
    title: "Discovery & Audit",
    description:
      "We map your existing processes, talk to your team, and identify where time and money are being wasted.",
  },
  {
    icon: PenTool,
    title: "Solution Design",
    description:
      "We architect the right mix of AI and automation to solve your specific problems — no one-size-fits-all.",
  },
  {
    icon: Code,
    title: "Build & Iterate",
    description:
      "Rapid development cycles with your feedback baked in. You see working software early and often.",
  },
  {
    icon: Rocket,
    title: "Deploy & Optimise",
    description:
      "Launch with confidence, then continuously monitor and improve performance based on real data.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            title="How We Work"
            subtitle="A proven four-step process from chaos to clarity."
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.15}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-background">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-heading font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
