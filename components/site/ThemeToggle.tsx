"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ds/Icon";
import { IconButton } from "@/components/ds/IconButton";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  // Starts undefined so the first client render matches the server's markup; the
  // real theme is read in an effect, after the pre-paint script has already applied it.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be blocked; the toggle still works for this page view.
    }
  };

  const dark = theme === "dark";

  return (
    <IconButton
      label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
      onClick={toggle}
    >
      {/* Before hydration resolves the theme, render the moon so the control is never blank. */}
      <Icon name={dark ? "sun" : "moon"} size={18} />
    </IconButton>
  );
}
