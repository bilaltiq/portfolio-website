import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    root.classList.add("transition-opacity", "duration-300", "opacity-0");

    // fading transition
    setTimeout(() => {
      if (isDarkMode) {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }

      // Fade back in
      setTimeout(() => {
        root.classList.remove("opacity-0");
      }, 50);

      setIsDarkMode(!isDarkMode);
    }, 100);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full",
        "transition-colors duration-300 focus:outline-hidden"
      )}
    >
      {/* {isDarkMode ? (
        <Sun className="h-6 w-6 text-white-300" />
      ) : (
        <Moon className="h-6 w-6 text-purple-800" />
      )} */}
    </button>
  );
};
