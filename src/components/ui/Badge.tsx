interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent-muted px-4 py-1.5 text-xs font-semibold tracking-wider text-accent uppercase">
      {children}
    </span>
  );
}
