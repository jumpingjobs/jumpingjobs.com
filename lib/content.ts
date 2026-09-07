import type { IconName } from "@/components/ds/Icon";

/**
 * Page copy, kept apart from layout so wording can be revised without touching markup.
 * Mirrors the `renderVals()` block of the `Install Page.dc.html` design.
 */

export const GITHUB_REPO = "https://github.com/jumpingjobs/jumpingjobs";
export const NPM_PACKAGE = "https://www.npmjs.com/package/jumpingjobs";

export const HARNESSES = [
  "Claude Code",
  "Cursor",
  "GitHub Copilot",
  "Gemini CLI",
  "Codex CLI",
  "OpenCode",
  "Kiro",
] as const;

/**
 * Pipeline stage folders, in order. Single source for the workspace tree drawn on the
 * page and the one written into /llms.txt — they drifted once when each hardcoded it.
 */
export const PIPELINE_STAGES = [
  "1-scraped",
  "2-applied",
  "3-interview",
  "4-lost",
  "5-archived",
  "6-won",
] as const;

/** Renders the stage folders as the two indented lines both surfaces show. */
export function pipelineStageLines(indent = "    "): string {
  const half = Math.ceil(PIPELINE_STAGES.length / 2);
  const width = Math.max(...PIPELINE_STAGES.map((s) => s.length)) + 3;
  return [PIPELINE_STAGES.slice(0, half), PIPELINE_STAGES.slice(half)]
    .map((row) => indent + row.map((s) => `${s}/`.padEnd(width)).join("").trimEnd())
    .join("\n");
}

export type Skill = {
  cmd: string;
  title: string;
  desc: string;
  icon: IconName;
  badge?: string;
  /** Wide on the 3-column grid. Collapses to one column under 860px. */
  wide?: boolean;
};

export const SKILLS: Skill[] = [
  {
    cmd: "init-resume",
    title: "Start here",
    desc: "Scaffolds your workspace, adds the resume template and builds profile.md by reading your existing resume and interviewing you.",
    icon: "sparkles",
    badge: "Run first",
    wide: true,
  },
  {
    cmd: "find-jobs",
    title: "Sweep your boards",
    desc: "Searches your configured job boards for new, on-profile roles, deduped against everything you have saved. Flags roles that are a step up from your current one, and repairs a board's broken extractor instead of reporting it as empty.",
    icon: "search",
  },
  {
    cmd: "scrape-job",
    title: "Save a posting",
    desc: "Turns a posting URL into structured Markdown, checking the whole tree first so nothing is scraped twice.",
    icon: "file-down",
  },
  {
    cmd: "assess-job",
    title: "Score the fit",
    desc: "Rates a posting against your profile and hard constraints. Pros, cons, dealbreaker check, trajectory — step up, lateral or step down — and an honest verdict.",
    icon: "scale",
  },
  {
    cmd: "tune-resume",
    title: "Tailor the resume",
    desc: "Adjusts your resume to the posting. Two pages, honest, verified by page count before it reports done.",
    icon: "pen-line",
  },
  {
    cmd: "interview-prep",
    title: "Research the company",
    desc: "Deep dossier on company, financials, leadership and competitors, plus a condensed cheat sheet.",
    icon: "notebook-pen",
  },
  {
    cmd: "interview-debrief",
    title: "Capture the round",
    desc: "Run right after each interview: verbatim questions, what landed or stumbled, signals, the promised next step. Stumbles become next-round prep.",
    icon: "mic",
  },
  {
    cmd: "move-job",
    title: "Track the pipeline",
    desc: "Moves a posting through the numbered stages — scraped, applied, interview, lost, archived, won — taking its whole file family (resume, cheat sheet, cover letter) along.",
    icon: "kanban",
  },
  {
    cmd: "assess-offer",
    title: "Evaluate the offer",
    desc: "Extracts every term from the letter, flags what's missing or ambiguous, checks the paper against what was promised verbally, and drafts your negotiation or response.",
    icon: "handshake",
    badge: "When it lands",
    wide: true,
  },
];

export type DemoLine = { glyph: string; tone: "user" | "agent"; text: string };

export const DEMO_LINES: DemoLine[] = [
  { glyph: "›", tone: "user", text: "/find-jobs staff engineer, remote" },
  {
    glyph: "→",
    tone: "agent",
    text: "2 boards swept. 34 roles → 11 on-profile → 4 new, 7 already tracked.",
  },
  {
    glyph: "→",
    tone: "agent",
    text: "Top pick: Staff Engineer · Fjord Labs · Bergen · hybrid — a step up from your current role. One flag: Norwegian listed as required.",
  },
  { glyph: "›", tone: "user", text: "/tune-resume fjord labs" },
  {
    glyph: "→",
    tone: "agent",
    text: "Alignment report ready. 3 strong matches, 1 gap. Proposed 6 wording changes — nothing written yet. Approve?",
  },
];

export type Step = { cmd: string; title: string; desc: string; icon: IconName };

export const STEPS: Step[] = [
  {
    cmd: "init-resume",
    title: "Onboard",
    desc: "Hand it your resume or LinkedIn; it interviews you for the rest.",
    icon: "user",
  },
  {
    cmd: "find-jobs",
    title: "Sweep",
    desc: "New roles from your boards, hard constraints flagged not hidden.",
    icon: "search",
  },
  { cmd: "assess-job", title: "Score", desc: "Fit out of 10 with an honest verdict.", icon: "scale" },
  {
    cmd: "tune-resume",
    title: "Tailor",
    desc: "A two-page resume saved next to the posting.",
    icon: "pen-line",
  },
  {
    cmd: "interview-prep",
    title: "Prepare",
    desc: "Dossier plus cheat sheet the night before.",
    icon: "notebook-pen",
  },
  {
    cmd: "interview-debrief",
    title: "Debrief",
    desc: "Drain the round into a file before it blurs; stumbles become fixes.",
    icon: "mic",
  },
  {
    cmd: "assess-offer",
    title: "Decide",
    desc: "Every term extracted and weighed; the response drafted, never sent.",
    icon: "handshake",
  },
  {
    cmd: "move-job",
    title: "Track",
    desc: "Every stage move takes the posting's whole file family with it.",
    icon: "kanban",
  },
];

export type Principle = { icon: IconName; title: string; desc: string };

export const PRINCIPLES: Principle[] = [
  {
    icon: "shield-check",
    title: "Approval before it writes",
    desc: "Resume changes are proposed as an alignment report first. Nothing is written until you say so.",
  },
  {
    icon: "file-lock-2",
    title: "Your data stays in your repo",
    desc: "profile.md, postings and resumes live in your workspace as plain Markdown and HTML. Nothing is uploaded to us.",
  },
  {
    icon: "git-branch",
    title: "One source, every harness",
    desc: "Skills are written once and built for each tool. CI fails if a harness tree drifts from source.",
  },
];

export type InstallTab = "npx" | "claude" | "explicit";

export const INSTALL_TABS: { value: InstallTab; label: string }[] = [
  { value: "npx", label: "npx" },
  { value: "claude", label: "Claude Code plugin" },
  { value: "explicit", label: "Pick a harness" },
];

export const INSTALL_COMMANDS: Record<
  InstallTab,
  { command: string; prompt: string; label: string }[]
> = {
  npx: [
    {
      command: "npx jumpingjobs install",
      prompt: "$",
      label: "Install · auto-detects your harness",
    },
  ],
  claude: [
    {
      command: "/plugin marketplace add jumpingjobs/jumpingjobs",
      prompt: "›",
      label: "1 · Add the marketplace",
    },
    {
      command: "/plugin install jumpingjobs@jumpingjobs",
      prompt: "›",
      label: "2 · Install the plugin",
    },
  ],
  explicit: [
    {
      command: "npx jumpingjobs install --harness cursor",
      prompt: "$",
      label: "Install · one harness",
    },
  ],
};

export const INSTALL_NOTES: Record<InstallTab, string> = {
  npx: "Recommended for Cursor, Copilot, Gemini CLI, Codex CLI, OpenCode and Kiro. Detects your harness from the current project.",
  claude:
    "Claude Code only. Reload plugins afterwards; commands appear namespaced, e.g. /jumpingjobs:init-resume.",
  explicit:
    "Skip detection and target one harness. Run npx jumpingjobs list to see every supported value.",
};
