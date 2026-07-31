// Literal hexes, not --pg-* tokens: the rice/nori contrast is what makes
// this read as sushi, and it's identical in both light and dark mode.
export default function Nigiri() {
  return (
    <svg viewBox="0 0 140 100" style={{ width: "100%", overflow: "visible" }}>
      <ellipse cx="70" cy="92" rx="58" ry="7" fill="#201e1d" opacity=".14" />
      <rect x="12" y="48" width="116" height="40" rx="20" fill="#fbf6ee" stroke="#dcd3c4" />
      <circle cx="34" cy="64" r="2.4" fill="#eee7db" />
      <circle cx="52" cy="74" r="2.4" fill="#eee7db" />
      <circle cx="96" cy="62" r="2.4" fill="#eee7db" />
      <circle cx="112" cy="74" r="2.4" fill="#eee7db" />
      <path d="M8 50C22 29 58 18 96 22c24 2 40 12 38 25-14 8-112 10-126 3Z" fill="#f0925a" />
      <path d="M20 44C34 29 60 23 84 24" stroke="#ffe1d0" strokeWidth="4.4" fill="none" strokeLinecap="round" />
      <path d="M40 50C54 37 78 31 104 33" stroke="#ffe1d0" strokeWidth="4.4" fill="none" strokeLinecap="round" />
      <rect x="58" y="22" width="22" height="66" rx="3" fill="#2e2b25" />
      <circle cx="120" cy="32" r="6.5" fill="#8fa073" />
    </svg>
  );
}
