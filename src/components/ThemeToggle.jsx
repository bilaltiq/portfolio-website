import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Light is the default; the choice is persisted and re-applied pre-paint by the
 * inline script in index.html, so this only has to read the class it left behind.
 */
export const ThemeToggle = ({ className }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next ? "#131210" : "#faf9f6");
    setIsDark(next);
  };

  return (
    /* Sits in a pill so it reads as a control rather than another nav link —
       the rest of the header is all plain text at the same weight. */
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "mono-label group flex items-center gap-1.5 rounded-full border border-border",
        "bg-muted/70 py-1 pl-2 pr-2.5 transition-colors duration-200",
        "hover:border-brand/40 hover:!text-brand",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full bg-current opacity-50 transition-opacity duration-200 group-hover:opacity-100"
      />
      {isDark ? "light" : "dark"}
    </button>
  );
};
