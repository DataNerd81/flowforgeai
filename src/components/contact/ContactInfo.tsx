import { Mail, Clock, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-heading font-bold">Let&apos;s Talk</h2>
        <p className="mt-3 text-muted leading-relaxed">
          Whether you have a specific automation challenge or just want to
          explore what&apos;s possible, we&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-semibold">Email Us</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-semibold">Response Time</p>
            <p className="text-sm text-muted">
              We reply within 24 hours, usually sooner.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-muted">
            <MessageSquare className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="font-semibold">What to Expect</p>
            <p className="text-sm text-muted">
              A no-pressure conversation about your processes, pain points, and
              how automation could help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
