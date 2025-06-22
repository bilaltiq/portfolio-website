import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      // default to dark mode
      storedTheme = "dark";
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(storedTheme === "dark");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add("transition-opacity", "duration-300", "opacity-0");
    setTimeout(() => {
      if (isDarkMode) {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
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