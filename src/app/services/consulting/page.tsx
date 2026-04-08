import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Consulting",
  description:
    "Deep-dive process audits that map your workflows, identify inefficiencies, and design the automation roadmap.",
  path: "/services/consulting",
});

const features = [
  {
    icon: "Search",
    title: "Process Discovery",
    description:
      "We interview your team, shadow workflows, and map every step to understand how work actually gets done.",
  },
  {
    icon: "Map",
    title: "Bottleneck Identification",
    description:
      "Pinpoint exactly where time, money, and quality are being lost in your operations.",
  },
  {
    icon: "Target",
    title: "Opportunity Assessment",
    description:
      "Score and prioritise automation opportunities by impact, feasibility, and ROI.",
  },
  {
    icon: "LineChart",
    title: "ROI Modelling",
    description:
      "Build a clear business case with projected time savings, cost reduction, and efficiency gains.",
  },
  {
    icon: "FileText",
    title: "Automation Roadmap",
    description:
      "A phased implementation plan that shows exactly what to automate, in what order, and why.",
  },
  {
    icon: "Lightbulb",
    title: "Technology Recommendations",
    description:
      "Honest, vendor-agnostic advice on the right tools and platforms for your specific needs.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <ServiceHero
        icon="Lightbulb"
        badge="Consulting"
        title="Diagnose Before You Automate"
        description="Automation without understanding is just moving problems faster. We start with a deep process audit so every solution is targeted and effective."
      />

      <FeatureGrid
        heading="What You Get"
        subtitle="A clear picture of your operations and a roadmap to transform them."
        features={features}
      />

      <ServiceCTA
        title="Not sure where to start?"
        description="Book a free process audit and we'll show you the biggest opportunities."
      />
    </>
  );
}
