"use client";

import { Search, Cpu, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { motion } from "motion/react";

const expertise = [
  {
    icon: Search,
    title: "Process Analysis",
    description:
      "Deep experience mapping complex business workflows and identifying inefficiency patterns.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "From LLMs and NLP to computer vision and predictive models — we choose the right AI for each problem.",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description:
      "We don't just build tech. We design solutions that align with your business goals and deliver ROI.",
  },
  {
    icon: Users,
    title: "Change Management",
    description:
      "New technology only works if people adopt it. We design for humans first, automation second.",
  },
];

export function ExpertiseGrid() {
  return (
    <section className="py-16 lg:py-24 bg-surface/30">
      <Container>
        <FadeIn>
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            A rare combination of process knowledge and technical depth.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {expertise.map((item) => (
            <motion.div key={item.title} variants={staggerItemVariants}>
              <Card className="h-full" hover={false}>
                <item.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 text-lg font-heading font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
