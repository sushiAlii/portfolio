import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import Tag from "@/components/shared/Tag";
import { experiences, COMPANY_LINKS } from "@/constants/experiences";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          kicker="02"
          title="Where I've cooked"
          sub="Four kitchens, one order of service — newest first."
        />
        {experiences.map((exp, index) => (
          <a
            key={exp.company}
            data-rv
            data-d={(0.1 + index * 0.04).toFixed(2)}
            className={styles.row}
            href={COMPANY_LINKS[exp.company]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${exp.position} at ${exp.company}`}
          >
            {exp.logo ? (
              <Image
                src={exp.logo}
                alt=""
                width={52}
                height={52}
                className={styles.logo}
              />
            ) : (
              <span />
            )}
            <div>
              <div className={styles.roleRow}>
                <h3 className={styles.role}>{exp.position}</h3>
                <span className={styles.company}>{exp.company}</span>
              </div>
              <p className={styles.blurb}>{exp.description}</p>
              <div className={styles.tags}>
                {exp.technologies?.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
            <div className={styles.when}>{exp.tenure}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
