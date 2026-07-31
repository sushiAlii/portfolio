"use client";

import { useTheme } from "@/hooks/useTheme";
import styles from "./Nav.module.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { mode, toggle } = useTheme();

  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.brand}>
        <span className={styles.brandMark} aria-hidden="true">
          <span className={styles.brandMarkInner} />
        </span>
        sushi
      </a>
      <div className={styles.navLinks}>
        {links.map((link) => (
          <a key={link.href} className={styles.navLink} href={link.href}>
            {link.label}
          </a>
        ))}
        <button
          type="button"
          className={styles.toggle}
          onClick={toggle}
          aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        >
          <span aria-hidden="true">{mode === "dark" ? "☀" : "☾"}</span>
        </button>
      </div>
    </nav>
  );
}
