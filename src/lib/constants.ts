export const SITE_NAME = "FlowForge AI";
export const SITE_DESCRIPTION =
  "We build custom AI-powered apps and automate processes for businesses of all sizes. We diagnose root problems first, then build the right automation to fix them.";
export const SITE_URL = "https://flowforgeai.dev";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/flowforgeai",
  github: "https://github.com/flowforgeai",
  x: "https://x.com/flowforgeai",
} as const;

export const CONTACT_EMAIL = "hello@flowforgeai.dev";

export const SERVICES = [
  {
    title: "Custom AI Apps",
    slug: "ai-apps",
    description:
      "Bespoke AI applications tailored to your business processes — from intelligent dashboards to predictive tools.",
    icon: "Brain" as const,
  },
  {
    title: "Process Automation",
    slug: "automation",
    description:
      "End-to-end workflow automation that eliminates manual bottlenecks and scales with your operations.",
    icon: "Workflow" as const,
  },
  {
    title: "Consulting",
    slug: "consulting",
    description:
      "Deep-dive process audits that map your workflows, identify inefficiencies, and design the automation roadmap.",
    icon: "Lightbulb" as const,
  },
] as const;
