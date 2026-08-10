/**
 * Typographic stand-in for projects with no screenshot — a systems/crypto
 * protocol has nothing to photograph. Keeps the 4:3 work grid uniform by
 * filling the slot with an outlined wordmark over a hairline lattice.
 */
export const ProjectPlate = ({ glyph, caption }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-muted">
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage:
          "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }}
    />
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
      }}
    />

    <span
      className="relative font-mono text-[clamp(2rem,7vw,3.75rem)] font-medium tracking-[-0.02em] text-transparent"
      style={{
        WebkitTextStroke:
          "1.25px color-mix(in srgb, var(--foreground) 60%, transparent)",
      }}
    >
      {glyph}
    </span>
    {caption && <span className="mono-label relative mt-3">{caption}</span>}
  </div>
);
