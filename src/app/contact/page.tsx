import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch to discuss AI automation for your business. Free consultation, no commitment.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
