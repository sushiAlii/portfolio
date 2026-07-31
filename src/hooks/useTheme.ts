"use client";

import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

// The inline script in layout.tsx already sets html[data-mode] before first
// paint (to avoid a flash of the wrong theme). This hook starts at "light"
// to match the server-rendered markup, then syncs to whatever the script
// actually chose in an effect — that one-time correction happens before the
// user can perceive it, without triggering a hydration mismatch.
export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-mode");
    if (current === "dark" || current === "light") {
      setMode(current);
    }
  }, []);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-mode", next);
      try {
        localStorage.setItem("mode", next);
      } catch {
        // private browsing / quota — theme just won't persist
      }
      return next;
    });
  }, []);

  return { mode, toggle };
}
