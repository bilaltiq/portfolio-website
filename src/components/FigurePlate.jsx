import { useEffect, useRef } from "react";
import portrait from "../assets/portrait.jpg";

/* Three lights rather than one, so the whole subject comes up rather than just
   the face: the head, the chest below it, and the shoulder to its south-east.
   The face keeps the largest window. */
const LIGHTS = [
  { home: { x: 49, y: 44 }, inner: 16, outer: 34 },
  { home: { x: 48, y: 78 }, inner: 14, outer: 31 },
  { home: { x: 73, y: 70 }, inner: 13, outer: 29 },
];

/* Snappy while the pointer is driving, slow on the way home, so leaving the
   plate reads as the lights drifting back rather than snapping. */
const EASE_TRACKING = 0.34;
const EASE_RETURNING = 0.055;
const SETTLED = 0.05;

/**
 * The hero's "Fig. 01" plate. A duotone portrait under a halftone dot grid,
 * with three radial windows holding the full-colour image. They rest on the
 * subject, gather onto the pointer while it's over the plate, and scatter back
 * to their own places when it leaves. Pure CSS masks driven by custom
 * properties — no canvas.
 */
export const FigurePlate = () => {
  const ref = useRef(null);
  const targets = useRef(LIGHTS.map((l) => ({ ...l.home })));
  const positions = useRef(LIGHTS.map((l) => ({ ...l.home })));
  const hovering = useRef(false);
  const frame = useRef(0);

  // Custom properties can't be transitioned without @property, so the easing
  // runs here. The loop parks itself once every light is home and idle.
  const animate = () => {
    const node = ref.current;
    if (!node) return;

    const ease = hovering.current ? EASE_TRACKING : EASE_RETURNING;
    let moving = false;

    positions.current.forEach((pos, i) => {
      const dx = targets.current[i].x - pos.x;
      const dy = targets.current[i].y - pos.y;
      pos.x += dx * ease;
      pos.y += dy * ease;
      node.style.setProperty(`--m${i}x`, `${pos.x.toFixed(2)}%`);
      node.style.setProperty(`--m${i}y`, `${pos.y.toFixed(2)}%`);
      if (Math.abs(dx) > SETTLED || Math.abs(dy) > SETTLED) moving = true;
    });

    if (!hovering.current && !moving) {
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

    LIGHTS.forEach((light, i) => {
      node.style.setProperty(`--m${i}x`, `${light.home.x}%`);
      node.style.setProperty(`--m${i}y`, `${light.home.y}%`);
    });

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const onPointerMove = (e) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // All three gather on the pointer, then scatter from it on the way out.
    targets.current = LIGHTS.map(() => ({ x, y }));
    hovering.current = true;
    start();
  };

  const onPointerLeave = () => {
    hovering.current = false;
    targets.current = LIGHTS.map((light) => ({ ...light.home }));
    start();
  };

  /* One masked layer per light. Compositing several gradients into a single
     mask depends on mask-composite, which is uneven across browsers; stacking
     identical images is boringly reliable and the overlaps are invisible
     because every layer draws the same pixels. */
  const maskFor = (i) =>
    `radial-gradient(circle at var(--m${i}x, ${LIGHTS[i].home.x}%) var(--m${i}y, ${LIGHTS[i].home.y}%), #000 0, #000 ${LIGHTS[i].inner}%, transparent ${LIGHTS[i].outer}%)`;

  return (
    <div className="flex h-full w-full flex-col">
      <div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        data-cursor="develop"
        className="relative aspect-square w-full overflow-hidden rounded-[3px] border border-border bg-muted"
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

        {LIGHTS.map((_, i) => (
          <img
            key={i}
            src={portrait}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ maskImage: maskFor(i), WebkitMaskImage: maskFor(i) }}
          />
        ))}

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
        <span className="mono-label">fig. 01 — signal / form</span>
        <span className="mono-label hidden sm:inline">cursor develops. try it.</span>
      </div>
    </div>
  );
};
