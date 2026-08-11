import { cn } from "@/lib/utils";

/**
 * Toggle for a list that starts collapsed. The count of what's hidden goes in
 * the label so the control says what it will do rather than just "show more".
 */
export const ShowMore = ({ expanded, onToggle, controls, hidden, noun, className }) => (
  <div className={cn("mt-8 flex justify-center", className)}>
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={controls}
      className="mono-label group flex items-center gap-2 transition-colors duration-200 hover:!text-brand"
    >
      {expanded ? "show less" : `show ${hidden} more ${noun}`}
      <span
        aria-hidden="true"
        className={cn(
          "transition-transform duration-300 ease-out",
          expanded ? "-translate-y-px rotate-180" : "group-hover:translate-y-0.5"
        )}
      >
        ↓
      </span>
    </button>
  </div>
);
