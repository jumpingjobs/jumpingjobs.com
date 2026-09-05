import { ButtonLink } from "@/components/ds/Button";
import { GITHUB_REPO } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#how", label: "How it works" },
  { href: "#install", label: "Install" },
  { href: GITHUB_REPO, label: "GitHub" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center border-b border-subtle bg-[color-mix(in_oklab,var(--surface-page)_72%,transparent)] backdrop-blur-[var(--blur-glass)]">
      <div className="shell flex items-center gap-7">
        <a href="#top" className="no-underline hover:no-underline" aria-label="Jumping Jobs — home">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className="hidden gap-[22px] font-medium min-[861px]:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-muted no-underline hover:text-heading">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="#install">Install</ButtonLink>
        </div>
      </div>
    </header>
  );
}
