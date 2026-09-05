import { GITHUB_REPO, NPM_PACKAGE } from "@/lib/content";
import { Wordmark } from "./Wordmark";

const GROUPS = [
  {
    title: "Product",
    links: [
      { href: "#skills", label: "Commands" },
      { href: "#how", label: "How it works" },
      { href: "#install", label: "Install" },
    ],
  },
  {
    title: "Docs",
    links: [
      { href: `${GITHUB_REPO}#readme`, label: "Readme" },
      { href: `${GITHUB_REPO}/blob/main/docs/DEVELOP.md`, label: "Develop" },
      { href: `${GITHUB_REPO}/tree/main/templates`, label: "Templates" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: GITHUB_REPO, label: "GitHub" },
      { href: NPM_PACKAGE, label: "npm" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-subtle pb-10 pt-16">
      <div className="shell flex flex-wrap items-start justify-between gap-8">
        <div className="flex max-w-[300px] flex-col gap-3">
          <Wordmark size={20} />
          <p className="text-muted">A job-search and resume toolkit for AI coding agents.</p>
          <p className="type-small text-faint">
            © {new Date().getFullYear()} Jumping Jobs · MIT licence
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          {GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-2.5">
              <p className="type-label text-faint">{group.title}</p>
              {group.links.map((link) => (
                <a key={link.href} href={link.href} className="text-body no-underline hover:text-heading">
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
