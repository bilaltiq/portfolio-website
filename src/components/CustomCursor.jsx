import { useEffect, useRef, useState } from "react";

const RING_IDLE = 26;
const RING_ACTIVE = 64;

/**
 * Two-part cursor: a solid brand dot that tracks the pointer exactly, and a
 * lagging ring that swells and shows a label over anything with `data-cursor`.
 * Desktop pointers only — touch and reduced-motion users keep the native cursor.
 */
export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let visible = false;
    let frame;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;

      if (!visible) {
        visible = true;
        ring.x = target.x;
        ring.y = target.y;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }

      const hit = e.target instanceof Element ? e.target.closest("[data-cursor]") : null;
      const interactive =
        e.target instanceof Element ? e.target.closest("a, button, input, textarea") : null;

      setLabel(hit ? hit.getAttribute("data-cursor") : interactive ? " " : "");
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const tick = () => {
      // Ring eases toward the dot, which gives the trailing-lag feel.
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  const active = label !== "";
  const size = active ? RING_ACTIVE : RING_IDLE;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[95] opacity-0"
      >
        <div className="-ml-[3px] -mt-[3px] size-1.5 rounded-full bg-brand" />
      </div>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[94] opacity-0"
      >
        <div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand/60 bg-brand/5 backdrop-blur-[1px] transition-[width,height] duration-300 ease-out"
          style={{ width: size, height: size }}
        >
          {label.trim() && (
            <span className="mono-label !text-brand !text-[9px] whitespace-nowrap">{label}</span>
          )}
        </div>
      </div>
    </>
  );
};
