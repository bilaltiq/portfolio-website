import { Reveal } from "./Reveal";

/* Every line here is something that actually happened at Finosu or Layout —
   the shadow-mode A/B, the agent tool layer reading live account state, the
   lender-side metrics. Stated as practice rather than as claims. */
const notes = [
  {
    title: "ship into their stack",
    body: "a demo that works on my laptop proves nothing. the twelve lenders each had their own portal, their own data, their own idea of what a customer record looks like.",
  },
  {
    title: "shadow mode first",
    body: "run the new system beside the old one on live traffic, compare, then switch. that's how the conversation memory got to 70% better call quality without anyone finding out the hard way.",
  },
  {
    title: "measure in their numbers",
    body: "on-time repayments, analyst hours, call quality. nobody on the customer side cares about latency graphs if the loan still doesn't get paid.",
  },
  {
    title: "the integration is the product",
    body: "grounding replies in a borrower's real account state was most of the work, and the whole reason the thing was trusted in front of 151.6k customers.",
  },
];

export const FieldNotes = () => (
  <div className="mt-20 md:mt-28">
    <div className="section-rule mb-8">
      <h3 className="eyebrow flex items-baseline gap-3">
        how i work
        <span className="mono-label">({String(notes.length).padStart(2, "0")})</span>
      </h3>
      <span className="mono-label">field notes</span>
    </div>

    {/* Single-hairline grid, same construction as the stack table */}
    <div className="grid border-l border-t border-border sm:grid-cols-2">
      {notes.map((note, i) => (
        <Reveal
          key={note.title}
          delay={(i % 2) * 70}
          className="border-b border-r border-border p-5 md:p-6"
        >
          <span className="mono-label !text-brand">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-2 text-base font-medium tracking-tight">{note.title}</p>
          <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">{note.body}</p>
        </Reveal>
      ))}
    </div>
  </div>
);
