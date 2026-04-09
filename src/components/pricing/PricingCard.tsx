"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { staggerItemVariants } from "@/components/animations/StaggerChildren";

interface PricingCardProps {
  name: string;
  description: string;
  setup: string;
  monthly: string;
  features: readonly string[];
  cta: string;
  highlighted: boolean;
}

export function PricingCard({
  name,
  description,
  setup,
  monthly,
  features,
  cta,
  highlighted,
}: PricingCardProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={`relative flex flex-col rounded-card p-8 transition-all duration-300 ${
        highlighted
          ? "bg-surface border-2 border-accent shadow-[0_0_40px_oklch(0.7_0.2_140_/_0.12)] lg:scale-105"
          : "bg-surface border border-border hover:border-border-accent"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-background text-xs font-heading font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-heading font-bold">{name}</h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-heading font-bold tracking-tight">
            {monthly}
          </span>
          {monthly !== "Custom" && (
            <span className="text-sm text-muted">/month</span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted">
          {setup} one-time setup
        </p>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${
                highlighted ? "text-accent" : "text-accent/70"
              }`}
            />
            <span className="text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={highlighted ? "primary" : "ghost"}
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  );
}
