import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Process Automation",
  description:
    "End-to-end workflow automation that eliminates manual bottlenecks and scales with your operations.",
  path: "/services/automation",
});

const features = [
  {
    icon: "Repeat",
    title: "Repetitive Task Elimination",
    description:
      "Identify and automate the manual, repetitive tasks that drain your team's time and energy.",
  },
  {
    icon: "Zap",
    title: "Event-Driven Workflows",
    description:
      "Trigger automations based on real-world events — new order, support ticket, data threshold breach.",
  },
  {
    icon: "FileCheck",
    title: "Document Processing",
    description:
      "AI-powered extraction and processing of invoices, contracts, forms, and reports at scale.",
  },
  {
    icon: "Plug",
    title: "System Integration",
    description:
      "Connect your tools — CRM, ERP, accounting, support — into one automated, seamless workflow.",
  },
  {
    icon: "Timer",
    title: "Scheduled Operations",
    description:
      "Automate recurring tasks — reports, backups, data syncs, notifications — so nothing falls through the cracks.",
  },
  {
    icon: "Workflow",
    title: "End-to-End Process Design",
    description:
      "We don't just automate steps — we redesign entire processes for maximum efficiency.",
  },
];

export default function AutomationPage() {
  return (
    <>
      <ServiceHero
        icon="Workflow"
        badge="Process Automation"
        title="Automate the Work That Slows You Down"
        description="Manual processes are expensive, error-prone, and don't scale. We build automation that runs reliably so your team can focus on what matters."
      />

      <FeatureGrid
        heading="What We Automate"
        subtitle="From simple task automation to complex multi-system workflows."
        features={features}
      />

      <ServiceCTA
        title="Drowning in manual processes?"
        description="Let's map your workflows and find the automation opportunities."
      />
    </>
  );
}
