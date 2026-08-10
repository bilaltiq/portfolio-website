import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { name: "about", hash: "#about" },
  { name: "work", hash: "#work" },
  { name: "stack", hash: "#stack" },
  { name: "contact", hash: "#contact" },
];

const PHOTOS = { name: "photos", to: "/photography" };

export const NavBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy only means anything on the page that owns those sections.
  useEffect(() => {
    if (!isHome) return;

    const nodes = sections
      .map((item) => document.querySelector(item.hash))
      .filter(Boolean);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Off the home page these become real navigations, so the browser handles the
  // hash scroll itself rather than us re-implementing it after a route change.
  const sectionHref = (hash) => (isHome ? hash : `/${hash}`);
  const isActive = (hash) => isHome && active === hash;

  const close = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          isScrolled
            ? "border-border bg-background/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="container-site flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="eyebrow">bilal tariq</span>
            <span className="mono-label hidden transition-colors group-hover:!text-brand sm:inline">
              (nyc)
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {sections.map((item) => (
              <a
                key={item.hash}
                href={sectionHref(item.hash)}
                className={cn(
                  "relative text-sm tracking-wide transition-colors duration-200",
                  isActive(item.hash)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {isActive(item.hash) && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand" />
                )}
              </a>
            ))}

            <Link
              to={PHOTOS.to}
              className={cn(
                "relative text-sm tracking-wide transition-colors duration-200",
                !isHome ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {PHOTOS.name}
              {!isHome && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand" />
              )}
            </Link>

            <a
              href="/Bilal-Tariq-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              resume ↗
            </a>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-5 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="mono-label !text-foreground"
            >
              {isMenuOpen ? "close" : "menu"}
            </button>
          </div>
        </div>
      </header>

      {/* `inert` keeps the closed sheet out of the tab order and the a11y tree —
          opacity-0 alone would still leave its links focusable. */}
      <div
        inert={!isMenuOpen}
        className={cn(
          "fixed inset-0 z-30 flex flex-col justify-center bg-background transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav id="mobile-menu" className="container-site flex flex-col gap-6">
          {sections.map((item, i) => (
            <a
              key={item.hash}
              href={sectionHref(item.hash)}
              onClick={close}
              className="flex items-baseline gap-4 border-b border-border pb-4 text-3xl font-medium tracking-tight"
            >
              <span className="mono-label">{String(i + 1).padStart(2, "0")}</span>
              {item.name}
            </a>
          ))}

          <Link
            to={PHOTOS.to}
            onClick={close}
            className="flex items-baseline gap-4 border-b border-border pb-4 text-3xl font-medium tracking-tight"
          >
            <span className="mono-label">
              {String(sections.length + 1).padStart(2, "0")}
            </span>
            {PHOTOS.name}
          </Link>

          <a
            href="/Bilal-Tariq-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-baseline gap-4 border-b border-border pb-4 text-3xl font-medium tracking-tight"
          >
            <span className="mono-label">
              {String(sections.length + 2).padStart(2, "0")}
            </span>
            resume ↗
          </a>
        </nav>
      </div>
    </>
  );
};
