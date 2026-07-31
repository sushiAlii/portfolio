import styles from "./shared.module.css";

interface CtaProps {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export default function Cta({ href, variant, children, className }: CtaProps) {
  const isExternal = href.startsWith("http");
  const variantClass = variant === "primary" ? styles.ctaPrimary : styles.ctaSecondary;

  return (
    <a
      className={[styles.cta, variantClass, className].filter(Boolean).join(" ")}
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
