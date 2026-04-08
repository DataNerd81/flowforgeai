"use client";

import Link from "next/link";
import { Brain, Workflow, Lightbulb, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "motion/react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Brain,
  Workflow,
  Lightbulb,
} as const;

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-surface/30">
      <Container>
        <FadeIn>
          <SectionHeading
            title="What We Do"
            subtitle="End-to-end AI automation — from discovery to deployment."
          />
        </FadeIn>

        <StaggerChildren className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.slug} variants={staggerItemVariants}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card className="h-full group">
                    <Icon className="h-8 w-8 text-accent" />
                    <h3 className="mt-4 text-xl font-heading font-bold">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-muted leading-relaxed">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
