import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";

/* ─────────────────────────────────────────────────────────────
   TO ADD PHOTOS: drop image files into src/assets/photography/.
   They appear automatically, sorted by filename — so prefixing
   them 01-, 02-, 03- is how you control the order.

   Captions are optional. Key them by filename below; anything
   without an entry just shows its frame number.
   ───────────────────────────────────────────────────────────── */
const captions = {
  // "01-washington-square.jpg": { title: "Washington Square", place: "New York", year: "2026" },
};

const modules = import.meta.glob("../assets/photography/*.{jpg,jpeg,JPG,png,webp,avif}", {
  eager: true,
  import: "default",
});

const photos = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const file = path.split("/").pop();
    return { file, src, ...(captions[file] ?? {}) };
  });

const frameNo = (i) => String(i + 1).padStart(2, "0");

/** Empty state doubles as the instructions — it disappears on its own once
 *  the first file lands in the folder. */
const EmptySheet = () => (
  <>
    {Array.from({ length: 4 }).map((_, i) => (
      <div
        key={i}
        className="relative flex aspect-[4/5] items-center justify-center rounded-[3px] border border-dashed border-border bg-muted/40"
      >
        <span className="mono-label absolute left-3 top-3 opacity-40">{frameNo(i)}</span>
        {i === 0 && (
          <p className="mono-label max-w-[80%] text-center leading-relaxed">
            Drop photos in
            <br />
            <span className="!text-brand">src/assets/photography/</span>
          </p>
        )}
      </div>
    ))}
  </>
);

export const Photography = () => {
  const [openAt, setOpenAt] = useState(null);
  const triggersRef = useRef([]);

  const close = useCallback(() => {
    const returnTo = triggersRef.current[openAt];
    setOpenAt(null);
    returnTo?.focus();
  }, [openAt]);

  const step = useCallback(
    (delta) => setOpenAt((i) => (i + delta + photos.length) % photos.length),
    []
  );

  // Lock the page behind the lightbox.
  useEffect(() => {
    if (openAt === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openAt]);

  return (
    <section id="photography" className="container-site pt-24 md:pt-32">
      <div className="section-rule mb-8 md:mb-10">
        <h2 className="eyebrow flex items-baseline gap-3">
          Photography
          {photos.length > 0 && (
            <span className="mono-label">({frameNo(photos.length - 1)})</span>
          )}
        </h2>
        <span className="mono-label">The touch of design, off duty</span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {photos.length === 0 ? (
          <EmptySheet />
        ) : (
          photos.map((photo, i) => (
            <Reveal key={photo.file} delay={(i % 4) * 60}>
              <button
                type="button"
                ref={(el) => (triggersRef.current[i] = el)}
                onClick={() => setOpenAt(i)}
                data-cursor="Open"
                aria-label={`Open photo ${frameNo(i)}${photo.title ? ` — ${photo.title}` : ""}`}
                className="group relative block w-full overflow-hidden rounded-[3px] bg-muted"
              >
                <div className="aspect-[4/5] w-full">
                  <img
                    src={photo.src}
                    alt={photo.title ?? ""}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                {/* Film-edge frame number on a chip — blend modes go muddy over
                    mid-tones, and a photo grid is all mid-tones. */}
                <span className="mono-label absolute left-2 top-2 rounded-[2px] bg-background/85 px-1.5 py-0.5 !text-foreground backdrop-blur-[2px]">
                  {frameNo(i)}
                </span>

                {/* Caption rides in from the bottom on hover */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 text-left opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-medium tracking-tight text-white">
                    {photo.title ?? `Frame ${frameNo(i)}`}
                  </p>
                  {(photo.place || photo.year) && (
                    <p className="mono-label !text-white/70">
                      {[photo.place, photo.year].filter(Boolean).join(" — ")}
                    </p>
                  )}
                </div>
              </button>
            </Reveal>
          ))
        )}
      </div>

      {openAt !== null && (
        <Lightbox
          photo={photos[openAt]}
          index={openAt}
          total={photos.length}
          onClose={close}
          onStep={step}
        />
      )}
    </section>
  );
};
