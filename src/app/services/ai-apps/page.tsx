import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Custom AI Apps",
  description:
    "Bespoke AI-powered applications tailored to your business — from intelligent dashboards to predictive tools.",
  path: "/services/ai-apps",
});

const features = [
  {
    icon: "BarChart3",
    title: "Intelligent Dashboards",
    description:
      "Real-time analytics powered by AI that surface the insights you actually need, not just more charts.",
  },
  {
    icon: "Bot",
    title: "AI Assistants & Chatbots",
    description:
      "Customer-facing or internal bots that understand context and solve problems — not just FAQ finders.",
  },
  {
    icon: "Database",
    title: "Data Processing Pipelines",
    description:
      "Automated data ingestion, cleaning, and enrichment that turns raw data into actionable intelligence.",
  },
  {
    icon: "Layers",
    title: "Workflow Orchestration",
    description:
      "Multi-step AI workflows that coordinate across systems, APIs, and teams seamlessly.",
  },
  {
    icon: "Cpu",
    title: "Predictive Models",
    description:
      "Machine learning models trained on your data to forecast demand, detect anomalies, or optimise pricing.",
  },
  {
    icon: "Brain",
    title: "Custom Integrations",
    description:
      "AI-powered connectors that bridge your existing tools — CRM, ERP, support desk — into one intelligent system.",
  },
];

export default function AIAppsPage() {
  return (
    <>
      <ServiceHero
        icon="Brain"
        badge="Custom AI Apps"
        title="AI Applications Built for Your Business"
        description="Off-the-shelf tools can't solve your specific problems. We build custom AI apps that integrate with your existing systems and deliver measurable ROI."
      />

      <FeatureGrid
        heading="What We Build"
        subtitle="Every app is engineered from scratch to solve your unique challenges."
        features={features}
      />

      <ServiceCTA
        title="Have a project in mind?"
        description="Tell us about your challenge and we'll show you what's possible."
      />
    </>
  );
}
