const items = [
  "machine learning",
  "visual computing",
  "distributed systems",
  "llm tool-calling",
  "computer vision",
  "cryptography",
  "3d graphics",
  "full-stack",
  "research",
];

const Row = ({ hidden }) => (
  <div aria-hidden={hidden} className="flex shrink-0 items-center">
    {[...items, ...items, ...items].map((item, i) => (
      <span key={i} className="flex items-center">
        <span className="mono-label !text-foreground/70 px-6">{item}</span>
        {/* Alternating separators give the strip a two-beat rhythm */}
        <span
          className={`size-1 rounded-full ${i % 2 ? "bg-accent" : "bg-brand"}`}
          aria-hidden="true"
        />
      </span>
    ))}
  </div>
);

/** Infinite marquee of disciplines. Two identical rows scroll -50% and wrap seamlessly. */
export const Ticker = () => (
  <div className="overflow-hidden border-y border-border py-3.5">
    <div className="ticker-track flex">
      <Row hidden={false} />
      <Row hidden={true} />
    </div>
  </div>
);
