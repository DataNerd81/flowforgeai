"use client";

import Link from "next/link";
import { ArrowRight, Brain, Workflow, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { motion } from "motion/react";
import { staggerItemVariants } from "@/components/animations/StaggerChildren";

const iconMap = { Brain, Workflow, Lightbulb } as const;

interface ServiceCardProps {
  title: string;
  slug: string;
  description: string;
  icon: keyof typeof iconMap;
}

export function ServiceCard({
  title,
  slug,
  description,
  icon,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div variants={staggerItemVariants}>
      <Link href={`/services/${slug}`} className="block h-full">
        <Card className="h-full group">
          <Icon className="h-8 w-8 text-accent" />
          <h3 className="mt-4 text-xl font-heading font-bold">{title}</h3>
          <p className="mt-3 text-muted leading-relaxed">{description}</p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
            Learn more <ArrowRight size={16} />
          </span>
        </Card>
      </Link>
    </motion.div>
  );
}
