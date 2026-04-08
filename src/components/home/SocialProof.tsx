"use client";

import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/animations/CountUp";
import { FadeIn } from "@/components/animations/FadeIn";

const stats = [
  { value: 50, suffix: "+", label: "Automations Built" },
  { value: 10, suffix: "x", label: "Average Time Saved" },
  { value: 100, suffix: "%", label: "Client Retention" },
  { value: 24, suffix: "hr", label: "Response Time" },
];

export function SocialProof() {
  return (
    <section className="py-24 lg:py-32 bg-surface/30">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-heading font-bold text-accent sm:text-5xl">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
