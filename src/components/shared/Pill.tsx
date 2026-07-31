import styles from "./shared.module.css";

export default function Pill({ children }: { children: React.ReactNode }) {
  return <span className={styles.pill}>{children}</span>;
}
