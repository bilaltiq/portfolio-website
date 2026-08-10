import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Photos", href: "#photography" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#work");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section currently owns the upper third of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Don't let the page scroll behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="eyebrow">Bilal Tariq</span>
            <span className="mono-label hidden transition-colors group-hover:!text-brand sm:inline">
              (NYC)
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm tracking-wide transition-colors duration-200",
                  active === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {active === item.href && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand" />
                )}
              </a>
            ))}
            <a
              href="/Bilal-Tariq-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              Resume ↗
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
              {isMenuOpen ? "Close" : "Menu"}
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
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-baseline gap-4 border-b border-border pb-4 text-3xl font-medium tracking-tight"
            >
              <span className="mono-label">0{i + 1}</span>
              {item.name}
            </a>
          ))}
          <a
            href="/Bilal-Tariq-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-baseline gap-4 border-b border-border pb-4 text-3xl font-medium tracking-tight"
          >
            <span className="mono-label">
              {String(navItems.length + 1).padStart(2, "0")}
            </span>
            Resume ↗
          </a>
        </nav>
      </div>
    </>
  );
};
