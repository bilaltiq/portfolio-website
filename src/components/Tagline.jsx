const parts = ["eng", "product", "touch of design"];

/** The positioning line, in Bilal's own phrasing. Brand-coloured stops do the
 *  separating so the words themselves stay plain. */
export const Tagline = () => (
  <p className="mt-9 flex flex-wrap items-baseline gap-x-2 border-l-2 border-brand pl-4 text-lg tracking-tight sm:text-xl">
    {parts.map((part) => (
      <span key={part}>
        {part}
        <span className="text-brand">.</span>
      </span>
    ))}
  </p>
);
