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
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "mono-label transition-colors duration-200 hover:!text-brand",
        className
      )}
    >
      {isDark ? "light" : "dark"}
    </button>
  );
};
