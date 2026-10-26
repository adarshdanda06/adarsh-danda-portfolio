import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

export const THEME_STORAGE_KEY = "theme";

// Runs in <head> before first paint so a saved dark theme doesn't flash light.
export const themeInitScript = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={toggle}
      className="fixed right-4 top-4 z-50 flex h-8 w-16 items-center justify-between rounded-full border border-foreground/15 bg-foreground/5 px-2 text-muted-foreground transition-colors hover:border-foreground/30"
    >
      <Sun className="h-4 w-4" />
      <Moon className="h-4 w-4" />
      <span
        className={cn(
          "absolute left-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow transition-transform duration-300",
          dark && "translate-x-8",
        )}
      >
        {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  );
}
