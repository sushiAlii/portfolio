"use client";

import { useEffect } from "react";

// Combines three mechanisms because an IntersectionObserver alone drops
// elements when the user jumps in (anchor nav, fast scroll, restored scroll
// position) and they stay invisible forever:
//   1. the observer itself, for the common case
//   2. a sweep() that also reveals anything already above the fold, run on
//      mount and on every scroll (rAF-throttled)
//   3. a data-shown guard so nothing re-animates once revealed
export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-rv]"));
    if (elements.length === 0) return;

    const reveal = (el: HTMLElement) => {
      if (el.dataset.shown) return;
      el.dataset.shown = "1";
      const delay = el.dataset.d || "0";
      el.style.animation = `riseIn .85s cubic-bezier(.2,.8,.3,1) ${delay}s both`;
      observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
            reveal(entry.target as HTMLElement);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const sweep = () => {
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
          reveal(el);
        }
      });
    };

    elements.forEach((el) => observer.observe(el));
    sweep();

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        sweep();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
