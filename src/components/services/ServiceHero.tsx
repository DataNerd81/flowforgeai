"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Brain,
  Workflow,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Workflow,
  Lightbulb,
};

interface ServiceHeroProps {
  icon: string;
  badge: string;
  title: string;
  description: string;
}

export function ServiceHero({
  icon,
  badge,
  title,
  description,
}: ServiceHeroProps) {
  const Icon = iconMap[icon] || Brain;

  return (
    <section className="pt-32 pb-16 lg:pb-24">
      <Container>
        <FadeIn>
          <Badge>{badge}</Badge>
          <div className="mt-6 flex items-start gap-4">
            <Icon className="h-10 w-10 text-accent shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl font-bold font-heading tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
