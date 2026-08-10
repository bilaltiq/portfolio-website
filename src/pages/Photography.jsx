import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { CustomCursor } from "../components/CustomCursor";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Lightbox } from "../components/Lightbox";

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

/** Number of masonry columns, tracked live so the split stays balanced on resize. */
const useColumnCount = () => {
  const [count, setCount] = useState(() =>
    typeof window === "undefined" ? 3 : window.innerWidth >= 768 ? 3 : 2
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const sync = () => setCount(query.matches ? 3 : 2);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return count;
};

const EmptySheet = () => (
  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="relative flex items-center justify-center rounded-[3px] border border-dashed border-border bg-muted/40"
        style={{ aspectRatio: [1, 0.75, 1.4][i % 3] }}
      >
        <span className="mono-label absolute left-3 top-3 opacity-40">{frameNo(i)}</span>
        {i === 0 && (
          <p className="mono-label max-w-[85%] text-center leading-relaxed">
            Drop photos in
            <br />
            <span className="!text-brand">src/assets/photography/</span>
          </p>
        )}
      </div>
    ))}
  </div>
);

const Frame = ({ photo, index, onOpen, registerRef }) => {
  const ref = useRef(null);

  // Glare follows the pointer across the frame.
  const onMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--gx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    node.style.setProperty("--gy", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <button
      type="button"
      ref={(el) => {
        ref.current = el;
        registerRef(el);
      }}
      onClick={onOpen}
      onPointerMove={onMove}
      data-cursor="Open"
      aria-label={`Open photo ${frameNo(index)}${photo.title ? ` — ${photo.title}` : ""}`}
      className="frame group relative block w-full overflow-hidden rounded-[3px] bg-muted"
    >
      <img
        src={photo.src}
        alt={photo.title ?? ""}
        loading="lazy"
        className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
      />

      {/* Glare sweep */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(45% 45% at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.22), transparent 70%)",
        }}
      />

      <span className="mono-label absolute left-2 top-2 rounded-[2px] bg-background/85 px-1.5 py-0.5 !text-foreground backdrop-blur-[2px]">
        {frameNo(index)}
      </span>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/75 to-transparent p-3 pt-10 text-left opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-sm font-medium tracking-tight text-white">
          {photo.title ?? `Frame ${frameNo(index)}`}
        </p>
        {(photo.place || photo.year) && (
          <p className="mono-label !text-white/70">
            {[photo.place, photo.year].filter(Boolean).join(" — ")}
          </p>
        )}
      </div>
    </button>
  );
};

export const Photography = () => {
  const [openAt, setOpenAt] = useState(null);
  const triggersRef = useRef([]);
  const columnCount = useColumnCount();

  const close = useCallback(() => {
    const returnTo = triggersRef.current[openAt];
    setOpenAt(null);
    returnTo?.focus();
  }, [openAt]);

  const step = useCallback(
    (delta) => setOpenAt((i) => (i + delta + photos.length) % photos.length),
    []
  );

  useEffect(() => {
    if (openAt === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openAt]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <CustomCursor />
      <NavBar />

      <main className="flex-1">
        <header className="container-site pb-10 pt-28 md:pb-14 md:pt-36">
          <p className="mono-label mb-6">Off duty — {photos.length || "no"} frames</p>

          <h1 className="text-[clamp(2.8rem,11vw,9rem)] font-black leading-[0.95] tracking-[-0.04em]">
            <span className="line-mask block">
              <span className="line-rise">
                photography<span className="text-brand">.</span>
              </span>
            </span>
          </h1>

          <div className="mt-8 grid gap-6 border-t border-border pt-6 md:grid-cols-12">
            <p className="text-base leading-[1.6] text-muted-foreground md:col-span-6">
              The other half of “touch of design.” Mostly cities, mostly light —
              whatever I notice on the walk between things.
            </p>
            <div className="flex gap-10 md:col-span-6 md:justify-end">
              <div>
                <p className="mono-label mb-1">Frames</p>
                <p className="text-sm">{photos.length || "—"}</p>
              </div>
              <div>
                <p className="mono-label mb-1">Based</p>
                <p className="text-sm">New York, NY</p>
              </div>
            </div>
          </div>
        </header>

        <section className="container-site">
          {photos.length === 0 ? (
            <EmptySheet />
          ) : (
            /* Masonry by round-robin rather than CSS columns: frames keep their
               own aspect ratio, and the top row still reads 01, 02, 03 across
               instead of down, which numbered frames make you expect. */
            <div className="sheet flex items-start gap-3 md:gap-4">
              {Array.from({ length: columnCount }).map((_, col) => (
                <div key={col} className="flex flex-1 flex-col gap-3 md:gap-4">
                  {photos.map((photo, i) =>
                    i % columnCount !== col ? null : (
                      <Reveal key={photo.file} delay={col * 70}>
                        <Frame
                          photo={photo}
                          index={i}
                          onOpen={() => setOpenAt(i)}
                          registerRef={(el) => (triggersRef.current[i] = el)}
                        />
                      </Reveal>
                    )
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 border-t border-border pt-6">
            <Link to="/" className="link-line text-sm font-medium">
              ← Back to the index
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {openAt !== null && (
        <Lightbox
          photo={photos[openAt]}
          index={openAt}
          total={photos.length}
          onClose={close}
          onStep={step}
        />
      )}
    </div>
  );
};
