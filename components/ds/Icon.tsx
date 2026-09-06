import {
  FileDown,
  FileLock2,
  FolderTree,
  GitBranch,
  Kanban,
  Mic,
  Moon,
  NotebookPen,
  PenLine,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  User,
  type LucideIcon,
} from "lucide-react";

/**
 * Thin wrapper over the Lucide registry so every glyph shares stroke weight.
 *
 * The design references icons by kebab-case Lucide name. Rather than resolving those
 * at runtime off a CDN global (as the canvas prototype does), the set is registered
 * statically here so the bundle stays tree-shaken and the icons render server-side.
 */
const REGISTRY = {
  "file-down": FileDown,
  "file-lock-2": FileLock2,
  "folder-tree": FolderTree,
  "git-branch": GitBranch,
  kanban: Kanban,
  mic: Mic,
  moon: Moon,
  "notebook-pen": NotebookPen,
  "pen-line": PenLine,
  scale: Scale,
  search: Search,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  sun: Sun,
  user: User,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof REGISTRY;

export type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function Icon({ name, size = 18, strokeWidth = 1.75, className }: IconProps) {
  const Glyph = REGISTRY[name];
  return (
    <Glyph
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      className={className}
      style={{ flex: "none", display: "inline-block", verticalAlign: "middle" }}
    />
  );
}
