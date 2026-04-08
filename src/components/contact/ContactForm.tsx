"use client";

import { useActionState } from "react";
import { submitContact } from "@/actions/contact";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

const inputStyles =
  "w-full rounded-button border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, {
    success: false,
    error: null,
  });

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="h-12 w-12 text-accent mb-4" />
        <h3 className="text-xl font-heading font-bold">Message Sent!</h3>
        <p className="mt-2 text-muted">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputStyles}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputStyles}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className={inputStyles}
          placeholder="Your company (optional)"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputStyles} resize-none`}
          placeholder="Tell us about your project or challenge..."
        />
      </div>

      {state.error && (
        <p className="text-red-400 text-sm">{state.error}</p>
      )}

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
