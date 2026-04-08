"use client";

import { Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "motion/react";

const values = [
  {
    icon: Zap,
    title: "Speed to Value",
    description:
      "From discovery to deployed automation in weeks, not months. We move fast without cutting corners.",
  },
  {
    icon: ShieldCheck,
    title: "Battle-Tested Solutions",
    description:
      "Every automation is stress-tested against edge cases before it touches your production systems.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "We track the metrics that matter — hours saved, errors eliminated, revenue unlocked.",
  },
];

export function ValueProp() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Why FlowForge AI?"
            subtitle="We combine deep process expertise with cutting-edge AI to deliver automation that actually works."
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItemVariants}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-muted">
                <item.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-heading font-bold">
                {item.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
