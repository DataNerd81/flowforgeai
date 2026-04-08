import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "ghost";
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 rounded-button cursor-pointer";

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-hover hover:brightness-110 hover:-translate-y-0.5",
  ghost:
    "border border-border text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "default",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
