import Image from "next/image";
import Cta from "@/components/shared/Cta";
import Tag from "@/components/shared/Tag";
import Maki from "@/components/motifs/Maki";
import { featuredProject } from "@/constants/projects";
import styles from "./Work.module.css";

export default function Torogan() {
  return (
    <div data-rv data-d=".12" className={styles.toroganGrid}>
      <div className={styles.toroganImageWrap}>
        <Image
          src={featuredProject.image}
          alt="Torogan"
          width={3022}
          height={1498}
          className={`washed ${styles.toroganImage}`}
        />
        <div className={styles.toroganMaki}>
          <Maki variant="salmon" />
        </div>
      </div>
      <div>
        <div className={styles.toroganKickerRow}>
          <span className={styles.toroganKicker}>{featuredProject.kicker}</span>
          <span className={styles.toroganPill} />
        </div>
        <h3 className={styles.toroganTitle}>{featuredProject.name}</h3>
        <p className={styles.toroganBody}>{featuredProject.description}</p>
        <div className={styles.toroganTags}>
          {featuredProject.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <div className={styles.toroganCtas}>
          <Cta href={featuredProject.liveLink} variant="primary">
            {featuredProject.liveLabel}
          </Cta>
          <Cta href={featuredProject.githubLink} variant="secondary">
            Source
          </Cta>
        </div>
      </div>
    </div>
  );
}
