"use client";

import { RefObject, useEffect } from "react";

const finePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Cursor-reactive nigiri: mousemove over the whole hero grid tilts just the
// art piece. Imperative (direct style writes), not React state — this runs
// at pointer frequency.
export function useHeroTilt(
  scopeRef: RefObject<HTMLElement | null>,
  pieceRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const scope = scopeRef.current;
    const piece = pieceRef.current;
    if (!scope || !piece || !finePointer()) return;

    const onMove = (e: MouseEvent) => {
      const r = scope.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      piece.style.transform = `translate(${dx * 30}px, ${dy * 20}px) rotate(${dx * 11}deg)`;
    };
    const onLeave = () => {
      piece.style.transform = "";
    };

    scope.addEventListener("mousemove", onMove);
    scope.addEventListener("mouseleave", onLeave);
    return () => {
      scope.removeEventListener("mousemove", onMove);
      scope.removeEventListener("mouseleave", onLeave);
    };
  }, [scopeRef, pieceRef]);
}

// Chopsticks cursor over the belt: a pair of sticks follows the pointer and
// pinches when it's over a plate card. Gated on fine-pointer devices so
// touch never gets a `cursor: none` dead zone.
export function useChopsticksCursor(
  scopeRef: RefObject<HTMLElement | null>,
  wrapRef: RefObject<HTMLElement | null>,
  stickRefs: [RefObject<HTMLElement | null>, RefObject<HTMLElement | null>],
) {
  useEffect(() => {
    const scope = scopeRef.current;
    const wrap = wrapRef.current;
    const [s1Ref, s2Ref] = stickRefs;
    const s1 = s1Ref.current;
    const s2 = s2Ref.current;
    if (!scope || !wrap || !s1 || !s2 || !finePointer()) return;

    scope.style.cursor = "none";
    let pinched: boolean | null = null;
    const setAngle = (v: boolean) => {
      const a = v ? 3 : 11;
      s1.style.transform = `rotate(${-a}deg)`;
      s2.style.transform = `rotate(${a}deg)`;
    };
    setAngle(false);

    const onMove = (e: MouseEvent) => {
      const r = scope.getBoundingClientRect();
      wrap.style.opacity = "1";
      wrap.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px)`;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const next = !!(el && el.closest("[data-plate]"));
      if (next !== pinched) {
        pinched = next;
        setAngle(next);
      }
    };
    const onLeave = () => {
      wrap.style.opacity = "0";
    };

    scope.addEventListener("mousemove", onMove);
    scope.addEventListener("mouseleave", onLeave);
    return () => {
      scope.style.cursor = "";
      scope.removeEventListener("mousemove", onMove);
      scope.removeEventListener("mouseleave", onLeave);
    };
  }, [scopeRef, wrapRef, stickRefs]);
}
