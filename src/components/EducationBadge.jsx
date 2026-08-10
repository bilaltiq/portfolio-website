/** Mortarboard, inlined rather than pulled from an icon package for one glyph. */
const Cap = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-[0.875rem] shrink-0"
    aria-hidden="true"
  >
    <path d="M2 8.5 12 4l10 4.5-10 4.5z" />
    <path d="M6 10.7v4.6c0 1.4 2.7 2.7 6 2.7s6-1.3 6-2.7v-4.6" />
    <path d="M21.4 8.9v5.3" />
  </svg>
);

export const EducationBadge = ({ school, detail }) => (
  <div className="flex items-center gap-2.5 rounded-[3px] border border-brand/30 bg-brand/[0.07] px-3 py-2">
    <span className="text-brand">
      <Cap />
    </span>
    <div className="min-w-0">
      <p className="text-[0.8125rem] font-medium leading-tight tracking-tight">{school}</p>
      <p className="mt-0.5 font-serif text-[0.875rem] font-light italic leading-snug text-muted-foreground">
        {detail}
      </p>
    </div>
  </div>
);
