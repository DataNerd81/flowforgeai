import { Hero } from "@/components/home/Hero";
import { ValueProp } from "@/components/home/ValueProp";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SocialProof } from "@/components/home/SocialProof";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProp />
      <ServicesOverview />
      <ProcessSection />
      <SocialProof />
      <CTASection />
    </>
  );
}
