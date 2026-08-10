import { useEffect, useState } from "react";

const roles = [
  { tag: "SWE", line: "writing the code that still works on Monday" },
  { tag: "AI/ML", line: "teaching models to be less confidently wrong" },
  { tag: "PM", line: "saying no to good ideas so the great one ships" },
  { tag: "TPM", line: "pointing seven engineers in one direction" },
];

const INTERVAL = 3200;

/**
 * Cycles the four hats under the hero headline. The animated copy is hidden
 * from assistive tech — a rotating live region is noise — and the full list is
 * exposed statically instead.
 */
export const RoleRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((n) => (n + 1) % roles.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const role = roles[index];

  return (
    <>
      <ul className="sr-only">
        {roles.map((r) => (
          <li key={r.tag}>
            {r.tag} — {r.line}
          </li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="mt-7 flex items-baseline gap-4 border-l-2 border-brand pl-4"
      >
        <span className="mono-label !text-brand w-11 shrink-0">{role.tag}</span>
        {/* Fixed height so the swap doesn't shove the rest of the hero around */}
        <span className="line-mask block h-[1.5em] flex-1">
          <span
            key={index}
            className="block text-sm leading-[1.5] text-muted-foreground sm:text-base"
            style={{ animation: "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {role.line}
          </span>
        </span>
      </div>
    </>
  );
};
