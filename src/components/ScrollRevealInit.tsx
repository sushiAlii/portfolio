"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

// Mounted once at page level so every [data-rv] element across all sections
// shares one IntersectionObserver + scroll listener, rather than each
// section re-running its own.
export default function ScrollRevealInit() {
  useScrollReveal();
  return null;
}
