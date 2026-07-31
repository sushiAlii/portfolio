"use client";

import { useRef } from "react";
import Tag from "@/components/shared/Tag";
import Maki from "@/components/motifs/Maki";
import { useChopsticksCursor } from "@/hooks/usePointerFx";
import { beltProjects, type BeltProject } from "@/constants/projects";
import styles from "./Belt.module.css";

function PlateCard({ project, hidden }: { project: BeltProject; hidden?: boolean }) {
  return (
    <a
      data-plate
      className={styles.plate}
      style={{ width: project.width }}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
    >
      <div className={styles.plateHeader}>
        <span className={styles.plateCategory}>{project.category}</span>
        <span
          className={styles.platePill}
          style={{
            background: project.pillAccent === "sage" ? "var(--pg-sage)" : "var(--pg-salmon)",
          }}
        />
      </div>
      <div className={styles.plateTitle}>{project.name}</div>
      <div className={styles.plateDesc}>{project.description}</div>
      <div className={styles.plateTags}>
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </a>
  );
}

export default function Belt() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stick1Ref = useRef<HTMLDivElement>(null);
  const stick2Ref = useRef<HTMLDivElement>(null);
  useChopsticksCursor(scopeRef, wrapRef, [stick1Ref, stick2Ref]);

  return (
    <div ref={scopeRef} data-belt className={styles.wrap}>
      <div className={styles.rail} />
      <div className={styles.base} />
      <div className={styles.track}>
        <div className={`${styles.trackGroup} ${styles.trackGroupFirst}`}>
          {beltProjects.map((project) => (
            <PlateCard key={project.id} project={project} />
          ))}
        </div>
        {/* Duplicated exactly so the -50% translateX loop is seamless. */}
        <div className={styles.trackGroup} aria-hidden="true">
          {beltProjects.map((project) => (
            <PlateCard key={`dup-${project.id}`} project={project} hidden />
          ))}
        </div>
      </div>
      <div className={styles.maki}>
        <Maki variant="sage" />
      </div>
      <div ref={wrapRef} className={styles.chopsticksWrap}>
        <div ref={stick1Ref} className={styles.stick} />
        <div ref={stick2Ref} className={styles.stick} />
      </div>
    </div>
  );
}
