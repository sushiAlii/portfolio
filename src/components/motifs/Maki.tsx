interface MakiProps {
  variant: "salmon" | "sage";
}

// Literal hexes, not --pg-* tokens — see Nigiri.tsx.
export default function Maki({ variant }: MakiProps) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: "100%" }}>
      <circle cx="50" cy="50" r="46" fill="#2e2b25" />
      <circle cx="50" cy="50" r="37" fill="#f9f4ed" />
      {variant === "salmon" ? (
        <circle cx="50" cy="50" r="15" fill="#f0925a" />
      ) : (
        <>
          <circle cx="50" cy="50" r="14" fill="#8fa073" />
          <circle cx="50" cy="50" r="6" fill="#aebf92" />
        </>
      )}
    </svg>
  );
}
