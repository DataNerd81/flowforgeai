import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-background"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <span className="font-heading text-lg font-bold tracking-tight">
        {SITE_NAME}
      </span>
    </Link>
  );
}
