"use client";

import { useRef } from "react";
import Cta from "@/components/shared/Cta";
import Nigiri from "@/components/motifs/Nigiri";
import { useHeroTilt } from "@/hooks/usePointerFx";
import styles from "./Hero.module.css";

export default function Hero() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const pieceRef = useRef<HTMLDivElement>(null);
  useHeroTilt(scopeRef, pieceRef);

  return (
    <header id="top" className={styles.hero}>
      <div className={styles.gradient} />
      <div className={styles.ring} />
      <div ref={scopeRef} className={styles.grid}>
        <div>
          <div className={styles.kicker}>
            Makati, Philippines&#8202;—&#8202;Full-stack engineer
          </div>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>
              Ali Asgar
              <br />
              Laut
            </h1>
            <div className={styles.noriBand} />
          </div>
          <div className={styles.alias}>
            <span className={styles.aliasText}>
              &lt;<span className={styles.aliasName}>sushi-ali</span> /&gt;
            </span>
            <span className={styles.caret} />
          </div>
          <p className={styles.lede}>
            Six years of building things end to end with experience working on
            travel platforms, iGaming, web3, and now bleeding-edge R&amp;D at
            HCL Software. On the side I build and maintain{" "}
            <strong>Torogan</strong>, a simple rental platform.
          </p>
          <div className={styles.ctaRow}>
            <Cta href="#work" variant="primary">
              See the counter <span>→</span>
            </Cta>
            <Cta href="mailto:aliasgar.laut@gmail.com" variant="secondary">
              aliasgar.laut@gmail.com
            </Cta>
          </div>
        </div>
        <div className={styles.art}>
          <div className={`${styles.steam} ${styles.steam1}`} />
          <div className={`${styles.steam} ${styles.steam2}`} />
          <div ref={pieceRef} className={styles.artPiece}>
            <Nigiri />
          </div>
        </div>
      </div>
      <div className={styles.scrollHint}>scroll ↓</div>
    </header>
  );
}
