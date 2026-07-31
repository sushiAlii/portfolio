import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import Pill from "@/components/shared/Pill";
import styles from "./About.module.css";

const sideDishes = [
  "Coding",
  "Coffee",
  "Swimming",
  "Photography",
  "Badminton",
  "Gaming",
  "Music",
  "Travel",
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader kicker="01" title="The chef" />
        <div className={styles.grid}>
          <div data-rv data-d=".1" className={styles.portraitWrap}>
            <div className={styles.ringOuter} />
            <div className={styles.ringInner} />
            <Image
              src="/me.jpg"
              alt="Ali Asgar Laut"
              width={206}
              height={206}
              className={`washed ${styles.portrait}`}
            />
          </div>
          <div>
            <p data-rv data-d=".15" className={styles.p1}>
              I&apos;m a full-stack developer who likes the whole plate — the API, the schema, the
              interaction, the pixel. Most of my work is turning tangled problems into interfaces
              that feel obvious.
            </p>
            <p data-rv data-d=".22" className={styles.p2}>
              Right now that means experimental R&amp;D work in Rust and Dioxus by day, and
              keeping Torogan running by night. Outside the editor I&apos;ve been swimming,
              shooting photos, and losing at badminton.
            </p>
            <div data-rv data-d=".3" className={styles.sideDishes}>
              <div className={styles.sideDishesLabel}>Side dishes</div>
              <div className={styles.pillRow}>
                {sideDishes.map((dish) => (
                  <Pill key={dish}>{dish}</Pill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
