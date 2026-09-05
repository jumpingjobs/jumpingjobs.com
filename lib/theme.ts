export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "jj-theme";

/**
 * Runs before first paint to stamp data-theme on <html>, so a returning dark-theme
 * visitor never sees a flash of the paper theme. Kept as a string because it has to
 * be inlined into the document head ahead of hydration.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=d?"dark":"light"}catch(e){}})()`;
