import { useEffect, useRef } from "react";
import portrait from "../assets/portrait.jpg";

/** Where the developed window rests: on the face, a little above centre. */
const FACE = { x: 49, y: 44 };

/* Snappy while the pointer is driving, slow on the way home, so leaving the
   plate reads as the window drifting back rather than snapping. */
const EASE_TRACKING = 0.34;
const EASE_RETURNING = 0.055;
const SETTLED = 0.05;

/**
 * The hero's "Fig. 01" plate. A duotone portrait under a halftone dot grid,
 * with a radial window holding the full-colour image. It rests on the face,
 * follows the pointer across the plate, and floats back when the pointer
 * leaves. Pure CSS masks driven by two custom properties — no canvas.
 */
export const FigurePlate = () => {
  const ref = useRef(null);
  const target = useRef({ ...FACE });
  const pos = useRef({ ...FACE });
  const hovering = useRef(false);
  const frame = useRef(0);

  // Custom properties can't be transitioned without @property, so the easing
  // runs here. The loop parks itself once the window is home and idle.
  const animate = () => {
    const node = ref.current;
    if (!node) return;

    const ease = hovering.current ? EASE_TRACKING : EASE_RETURNING;
    const dx = target.current.x - pos.current.x;
    const dy = target.current.y - pos.current.y;
    pos.current.x += dx * ease;
    pos.current.y += dy * ease;

    node.style.setProperty("--mx", `${pos.current.x.toFixed(2)}%`);
    node.style.setProperty("--my", `${pos.current.y.toFixed(2)}%`);

    if (!hovering.current && Math.abs(dx) < SETTLED && Math.abs(dy) < SETTLED) {
      frame.current = 0;
      return;
    }
    frame.current = requestAnimationFrame(animate);
  };

  const start = () => {
    if (!frame.current) frame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    node.style.setProperty("--mx", `${FACE.x}%`);
    node.style.setProperty("--my", `${FACE.y}%`);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const onPointerMove = (e) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    target.current = {
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    };
    hovering.current = true;
    start();
  };

  const onPointerLeave = () => {
    hovering.current = false;
    target.current = { ...FACE };
    start();
  };

  const mask =
    "radial-gradient(circle at var(--mx, 49%) var(--my, 44%), #000 0, #000 17%, transparent 36%)";

  return (
    <div className="flex h-full w-full flex-col">
      <div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        data-cursor="Develop"
        className="relative aspect-square w-full overflow-hidden rounded-[3px] border border-border bg-muted"
        style={{ "--mx": `${FACE.x}%`, "--my": `${FACE.y}%` }}
      >
        {/* Base plate: flattened, tinted. The source is pre-cropped square and
            framed on the face, so it needs no object-position nudging. */}
        <img
          src={portrait}
          alt="Bilal Tariq"
          className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale contrast-[1.15] transition-opacity duration-500"
        />
        {/* Duotone, and order matters: `color` replaces both hue and saturation,
            so the brand pass has to land first or it wipes out the deeper tone.
            That one then multiplies back in, biting hardest in the midtones. */}
        <div className="absolute inset-0 bg-brand/20 mix-blend-color" />
        <div className="absolute inset-0 bg-accent/12 mix-blend-multiply" />

        {/* Developed window: full-colour image, resting on the face until the
            pointer takes over */}
        <img
          src={portrait}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />

        {/* Halftone grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />

        {/* Registration marks */}
        <span className="absolute left-3 top-3 size-3 border-l border-t border-background/60" />
        <span className="absolute right-3 top-3 size-3 border-r border-t border-background/60" />
        <span className="absolute bottom-3 left-3 size-3 border-b border-l border-background/60" />
        <span className="absolute bottom-3 right-3 size-3 border-b border-r border-background/60" />
      </div>

      <div className="mt-3 flex items-baseline justify-between border-t border-border pt-3">
        <span className="mono-label">Fig. 01 — Signal / Form</span>
        <span className="mono-label hidden sm:inline">Cursor develops. Try it.</span>
      </div>
    </div>
  );
};
