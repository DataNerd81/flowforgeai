interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-card border border-border bg-surface p-6 ${
        hover
          ? "transition-all duration-300 hover:border-border-accent hover:scale-[1.02]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
