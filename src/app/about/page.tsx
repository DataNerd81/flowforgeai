import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ExpertiseGrid } from "@/components/about/ExpertiseGrid";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "We combine deep process expertise with cutting-edge AI to build automation that solves real business problems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pb-24">
        <Container>
          <FadeIn>
            <Badge>About Us</Badge>
            <h1 className="mt-6 text-4xl font-bold font-heading tracking-tight sm:text-5xl lg:text-6xl">
              Diagnose First.
              <br />
              Automate Second.
            </h1>
            <div className="mt-8 max-w-3xl space-y-6 text-lg text-muted leading-relaxed">
              <p>
                Most automation fails because it&apos;s applied to the wrong
                problem. Teams rush to implement AI without understanding why
                their processes are broken in the first place.
              </p>
              <p>
                FlowForge AI was built on a different philosophy. We start with
                deep process analysis — mapping workflows, talking to the people
                who do the work, and identifying the real bottlenecks. Only then
                do we design and build the automation to fix them.
              </p>
              <p>
                The result? AI solutions that actually work, get adopted by
                teams, and deliver measurable returns. Not shiny demos that
                collect dust.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <ExpertiseGrid />

      <section className="py-16 lg:py-24">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl">
              Our Approach
            </h2>
            <div className="mt-8 max-w-3xl space-y-6 text-lg text-muted leading-relaxed">
              <p>
                We believe the best automation is invisible. It runs quietly in
                the background, handling the work that used to eat your
                team&apos;s time — so they can focus on the work that actually
                matters.
              </p>
              <p>
                Every engagement starts with understanding. We ask hard
                questions, challenge assumptions, and often discover that the
                real problem isn&apos;t where you thought it was. That&apos;s
                where the magic happens.
              </p>
            </div>
            <div className="mt-10">
              <Button href="/contact" size="lg">
                Work With Us
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
