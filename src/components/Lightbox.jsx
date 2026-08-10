import { useEffect, useRef } from "react";

const frameNo = (i) => String(i + 1).padStart(2, "0");

/**
 * Full-bleed photo viewer. Esc closes, arrows step, and focus is parked on the
 * close button while open so keyboard users aren't stranded behind the overlay.
 */
export const Lightbox = ({ photo, index, total, onClose, onStep }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onStep(1);
      else if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);

  const caption = [photo.place, photo.year].filter(Boolean).join(" — ");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title ?? `Photo ${frameNo(index)}`}
      onClick={onClose}
      className="fixed inset-0 z-[90] flex flex-col bg-background/97 backdrop-blur-sm"
      style={{ animation: "fade-up 0.25s ease-out" }}
    >
      <div className="container-site flex shrink-0 items-center justify-between py-5">
        <span className="mono-label">
          Frame {frameNo(index)} / {frameNo(total - 1)}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="mono-label !text-foreground transition-colors hover:!text-brand"
        >
          Close ✕
        </button>
      </div>

      {/* Stop propagation so clicks on the photo itself don't dismiss */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="container-site flex min-h-0 flex-1 items-center justify-center pb-4"
      >
        <img
          src={photo.src}
          alt={photo.title ?? ""}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="container-site flex shrink-0 items-baseline justify-between gap-6 border-t border-border py-5"
      >
        <div>
          <p className="text-sm font-medium tracking-tight">
            {photo.title ?? `Frame ${frameNo(index)}`}
          </p>
          {caption && <p className="mono-label mt-1">{caption}</p>}
        </div>

        {total > 1 && (
          <div className="flex shrink-0 items-center gap-6">
            <button
              type="button"
              onClick={() => onStep(-1)}
              aria-label="Previous photo"
              className="mono-label !text-foreground transition-colors hover:!text-brand"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => onStep(1)}
              aria-label="Next photo"
              className="mono-label !text-foreground transition-colors hover:!text-brand"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
