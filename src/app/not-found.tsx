import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-32">
      <Container className="text-center">
        <p className="text-accent font-heading font-bold text-lg">404</p>
        <h1 className="mt-2 text-4xl font-bold font-heading tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">Go Home</Button>
        </div>
      </Container>
    </section>
  );
}
