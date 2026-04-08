"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "motion/react";
import {
  Brain,
  BarChart3,
  Bot,
  Database,
  Layers,
  Cpu,
  Repeat,
  Zap,
  FileCheck,
  Plug,
  Timer,
  Workflow,
  Search,
  Map,
  Target,
  LineChart,
  FileText,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  BarChart3,
  Bot,
  Database,
  Layers,
  Cpu,
  Repeat,
  Zap,
  FileCheck,
  Plug,
  Timer,
  Workflow,
  Search,
  Map,
  Target,
  LineChart,
  FileText,
  Lightbulb,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  heading: string;
  subtitle?: string;
  features: Feature[];
}

export function FeatureGrid({ heading, subtitle, features }: FeatureGridProps) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <FadeIn>
          <SectionHeading title={heading} subtitle={subtitle} />
        </FadeIn>

        <StaggerChildren className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Brain;
            return (
              <motion.div key={feature.title} variants={staggerItemVariants}>
                <Card className="h-full" hover={false}>
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 text-lg font-heading font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
