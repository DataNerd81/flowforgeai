"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";

const FAQS = [
  {
    q: "What does the setup fee cover?",
    a: "The setup fee covers the entire discovery and build phase — process mapping, bottleneck analysis, designing the automation, building and testing your custom AI solution, and deploying it into your workflow. You own everything we build.",
  },
  {
    q: "What's included in the monthly fee?",
    a: "Hosting, monitoring, ongoing optimisation, support, and monthly performance reporting. We don't just build and disappear — we keep your automation running at peak performance and iterate as your needs evolve.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No. The monthly plan is month-to-month. If you decide to cancel, your automations keep running — you just lose access to ongoing support, optimisation, and updates.",
  },
  {
    q: "How long does setup take?",
    a: "Starter projects typically take 2–3 weeks. Growth plans run 4–6 weeks depending on complexity. Scale engagements are scoped individually. We'll give you a clear timeline after the initial consultation.",
  },
  {
    q: "What if my needs don't fit a plan?",
    a: "Book a free consultation and we'll put together a custom proposal. These tiers are starting points — every business is different, and we're happy to tailor scope and pricing.",
  },
  {
    q: "Do I own the code and automations you build?",
    a: "Yes, 100%. Everything we build is yours. If you ever part ways with us, you keep full ownership of all code, automations, and documentation.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-heading font-semibold pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingFAQ() {
  return (
    <section className="py-24 lg:py-32 bg-surface/50">
      <Container className="max-w-3xl">
        <FadeIn>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Straight answers to common questions about working with us."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
