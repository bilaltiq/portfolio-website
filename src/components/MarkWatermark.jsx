import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { MARK_VIEWBOX, MARK_PATH, MARK_DOT } from "./markPath";

/**
 * The loop mark, blown up and dropped behind a section at low opacity. It
 * drifts against the scroll and rotates a degree or two, which is enough to
 * read as depth without competing with anything on top of it.
 *
 * Parallax is measured from the parent section, so drop this inside whatever
 * it should track and give that element `relative`.
 */
export const MarkWatermark = ({
  side = "right",
  size = "68vmin",
  top = "8%",
  offset = "-9%",
  opacity,
  drift = 90,
  /* "fill" sits behind the section. "outline" draws a hairline contour over the
     top of it, for sections whose content is opaque edge to edge and would
     otherwise swallow the mark entirely. */
  variant = "fill",
  strokeWidth = 0.3,
  className,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const section = node?.parentElement?.parentElement;
    if (!node || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const apply = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 while the section sits below the fold, +1 once it's gone past
      const progress =
        (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1.2, Math.min(1.2, progress));
      node.style.transform = `translate3d(0, ${(clamped * drift).toFixed(1)}px, 0) rotate(${(
        clamped * 6
      ).toFixed(2)}deg)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [drift]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        variant === "outline" ? "z-10" : "-z-10",
        className
      )}
    >
      <svg
        ref={ref}
        viewBox={MARK_VIEWBOX}
        className={cn(
          "absolute text-brand will-change-transform",
          opacity ?? "opacity-[0.11] dark:opacity-[0.15]"
        )}
        style={{ width: size, height: size, [side]: offset, top }}
      >
        {variant === "outline" ? (
          <>
            <path
              d={MARK_PATH}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <circle
              cx={MARK_DOT.cx}
              cy={MARK_DOT.cy}
              r={MARK_DOT.r}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
          </>
        ) : (
          <>
            <path d={MARK_PATH} fill="currentColor" />
            <circle cx={MARK_DOT.cx} cy={MARK_DOT.cy} r={MARK_DOT.r} fill="currentColor" />
          </>
        )}
      </svg>
    </div>
  );
};
