import {
  GITHUB_REPO,
  HARNESSES,
  INSTALL_COMMANDS,
  NPM_PACKAGE,
  PRINCIPLES,
  SKILLS,
  STEPS,
} from "@/lib/content";
import { SITE_URL } from "@/lib/site";

/**
 * /llms.txt — the llmstxt.org convention: a single Markdown file describing the product
 * for language models, so an agent can answer "how do I install Jumping Jobs" without
 * scraping the rendered page.
 *
 * Generated from lib/content.ts rather than hand-written, so the command list here cannot
 * drift from the command grid on the page. Served from a folder named `llms.txt` so the
 * URL keeps its extension and GitHub Pages returns text/plain — see app/og.png/route.tsx
 * for the same reasoning.
 */
export const dynamic = "force-static";

function body() {
  const commands = SKILLS.map((s) => `- \`/${s.cmd}\` — **${s.title}.** ${s.desc}`).join("\n");
  const pipeline = STEPS.map((s, i) => `${i + 1}. \`/${s.cmd}\` (${s.title}) — ${s.desc}`).join("\n");
  const principles = PRINCIPLES.map((p) => `- **${p.title}.** ${p.desc}`).join("\n");
  const install = Object.values(INSTALL_COMMANDS)
    .flat()
    .map((c) => `- ${c.label}: \`${c.command}\``)
    .join("\n");

  return `# Jumping Jobs

> A job-search and resume toolkit that runs inside AI coding agents. Install it once and
> your agent gains seven commands for finding roles, scoring fit, tailoring your resume
> and preparing for interviews.

Jumping Jobs is a skills collection, not a hosted service. It installs into the agent you
already use and keeps everything it produces in your own repository as plain Markdown and
HTML. Free and open source under the MIT licence. Requires Node 18 or newer.

## Install

${install}

Then run \`/init-resume\` in your agent chat to build your profile. Run
\`npx jumpingjobs list\` to see every supported harness, and \`npx jumpingjobs update\` to
refresh the skills later.

## Supported harnesses

${HARNESSES.map((h) => `- ${h}`).join("\n")}

## Commands

${commands}

Two supporting skills run underneath: \`applicant-profile\` keeps \`profile.md\` current,
and \`interview-cheatsheet\` writes the in-the-room sheet.

## Typical pipeline

${pipeline}

## How it works

Everything reads one file, \`profile.md\`, which holds your real metrics, stories and
constraints. Each tailored resume is a two-page projection of that profile, saved next to
the posting it was written for. Anything new you tell the agent is folded back into the
profile so it does not go stale.

Your workspace looks like this:

\`\`\`
resume/<your-slug>/
  profile.md               # source of truth
  <your-slug>-resume.html  # layout skeleton
  job-boards.md            # boards + search config
  job-postings/            # numbered = pipeline order
    1-scraped/  2-applied/  3-interview/
    4-lost/     5-archived/
\`\`\`

A workspace holds as many applicants as you like — each gets their own folder, profile and
pipeline, so one repository can serve a whole household.

## Principles

${principles}

## Links

- [Website](${SITE_URL}/)
- [Source and readme](${GITHUB_REPO})
- [Quick start](${GITHUB_REPO}#quick-start)
- [Adding a harness](${GITHUB_REPO}/blob/main/docs/DEVELOP.md)
- [Resume templates](${GITHUB_REPO}/tree/main/templates)
- [npm package](${NPM_PACKAGE})
`;
}

export function GET() {
  return new Response(body(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
