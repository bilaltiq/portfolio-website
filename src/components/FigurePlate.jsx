import { useRef, useState } from "react";
import avatar from "../assets/avatar.png";

/**
 * The hero's "Fig. 01" plate. A duotone portrait under a halftone dot grid,
 * with a radial window that follows the pointer and restores the full image —
 * the cursor develops the print. Pure CSS masks, no canvas.
 */
export const FigurePlate = () => {
  const ref = useRef(null);
  const [lit, setLit] = useState(false);

  const onPointerMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    node.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const mask = `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), #000 0, #000 ${
    lit ? "16%" : "0%"
  }, transparent ${lit ? "34%" : "0%"})`;

  return (
    <div className="flex h-full w-full flex-col">
      <div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerEnter={() => setLit(true)}
        onPointerLeave={() => setLit(false)}
        data-cursor="Develop"
        className="relative aspect-square w-full overflow-hidden rounded-[3px] border border-border bg-muted"
        style={{ "--mx": "50%", "--my": "50%" }}
      >
        {/* Base plate: flattened, brand-tinted */}
        <img
          src={avatar}
          alt="Bilal Tariq"
          className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale contrast-[1.15] transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-brand/30 mix-blend-color" />

        {/* Developed window: full-contrast image revealed under the pointer */}
        <img
          src={avatar}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-[mask-image] duration-300 ease-out"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />

        {/* Halftone grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
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
