import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren } from "@/components/animations/StaggerChildren";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent pricing for AI automation services. From single workflow automation to full-scale enterprise transformation.",
  path: "/pricing",
});

const TIERS = [
  {
    name: "Starter",
    description: "Perfect for automating a single painful workflow.",
    setup: "$1,500",
    monthly: "$500",
    features: [
      "1 workflow or process automated",
      "Process mapping & bottleneck audit",
      "Custom AI app or integration",
      "2 revision rounds",
      "Email support",
      "Monthly performance report",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    description:
      "For teams ready to automate multiple processes and scale fast.",
    setup: "$3,500",
    monthly: "$500",
    features: [
      "Up to 3 workflows automated",
      "Full process audit & roadmap",
      "Custom AI apps & integrations",
      "Priority support (48h response)",
      "Unlimited revisions during build",
      "Monthly optimisation & reporting",
      "Dedicated Slack channel",
    ],
    cta: "Book a Call",
    highlighted: true,
  },
  {
    name: "Scale",
    description:
      "End-to-end AI transformation for operations-heavy businesses.",
    setup: "$5,000+",
    monthly: "Custom",
    features: [
      "Unlimited workflows & processes",
      "Enterprise process audit",
      "Custom AI apps, agents & pipelines",
      "Priority support (24h response)",
      "Dedicated account manager",
      "Weekly optimisation sprints",
      "On-call automation engineering",
      "Custom integrations & API work",
    ],
    cta: "Talk to Us",
    highlighted: false,
  },
] as const;

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pb-24">
        <Container>
          <FadeIn>
            <SectionHeading
              title="Simple, Transparent Pricing"
              subtitle="One-time setup to build your automation. Flat monthly fee to keep it running, optimised, and supported."
            />
          </FadeIn>

          <StaggerChildren className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
            {TIERS.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </StaggerChildren>

          <FadeIn delay={0.4}>
            <p className="mt-12 text-center text-sm text-muted">
              All plans include a free initial consultation. No lock-in
              contracts — cancel the monthly anytime.
            </p>
          </FadeIn>
        </Container>
      </section>

      <PricingFAQ />

      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.7_0.2_140_/_0.08),_transparent_70%)]" />

        <Container className="relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl">
              Not sure which plan fits?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted">
              Book a free 30-minute process audit. We&apos;ll map your
              bottlenecks and recommend the right plan — no pressure, no
              commitment.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Book a Free Consultation
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
