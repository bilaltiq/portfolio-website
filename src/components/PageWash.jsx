/**
 * Two very faint radial washes fixed behind everything — plum top-right, the
 * terracotta answering it bottom-left. Low enough alpha to read as paper tone
 * rather than colour, which is the only way an accent this saturated stays
 * quiet under a minimal layout.
 */
export const PageWash = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
    <div
      className="absolute inset-0 opacity-[0.85] dark:opacity-[0.55]"
      style={{
        backgroundImage:
          "radial-gradient(72% 58% at 90% -4%, color-mix(in srgb, var(--accent) 32%, transparent), transparent 70%)",
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.4] dark:opacity-[0.3]"
      style={{
        backgroundImage:
          "radial-gradient(60% 50% at 0% 100%, color-mix(in srgb, var(--brand) 16%, transparent), transparent 70%)",
      }}
    />
  </div>
);
