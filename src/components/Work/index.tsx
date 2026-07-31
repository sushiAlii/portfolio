import SectionHeader from "@/components/shared/SectionHeader";
import Torogan from "./Torogan";
import Belt from "./Belt";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          kicker="03"
          title="What's cooking"
          sub="The one I'm still cooking."
          subMarginBottom={36}
        />
        <Torogan />
      </div>

      <div className={styles.beltSection}>
        <div className={styles.beltHeaderRow}>
          <h3 data-rv data-d="0" className={styles.beltHeading}>
            Also on the belt
          </h3>
          <span data-rv data-d=".05" className={styles.beltHint}>
            hover to stop the belt · click to open
          </span>
        </div>
        <Belt />
      </div>
    </section>
  );
}
