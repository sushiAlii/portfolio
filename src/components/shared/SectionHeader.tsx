import styles from "./shared.module.css";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  sub?: string;
  subMarginBottom?: number;
}

export default function SectionHeader({ kicker, title, sub, subMarginBottom = 30 }: SectionHeaderProps) {
  return (
    <>
      <div
        data-rv
        data-d="0"
        className={`${styles.sectionHeaderRow} ${sub ? styles["sectionHeaderRow--tight"] : styles["sectionHeaderRow--wide"]}`}
      >
        <span className={styles.kicker}>{kicker}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      {sub ? (
        <p data-rv data-d=".06" className={styles.sectionSub} style={{ marginBottom: subMarginBottom }}>
          {sub}
        </p>
      ) : null}
    </>
  );
}
