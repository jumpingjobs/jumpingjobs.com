import { ButtonLink } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { DEMO_LINES, GITHUB_REPO } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how" className="pb-24">
      <div className="shell">
        <Card wash="fjord" variant="sunken" className="rounded-xl p-0">
          <div className="grid grid-cols-1 items-center gap-10 p-12 min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
            <div className="flex flex-col gap-4">
              <p className="eyebrow">How it works</p>
              <h2 className="type-h2 text-heading">
                Say it in a sentence. Approve before anything moves.
              </h2>
              <p className="text-body">
                The skills read <code className="code-inline">profile.md</code> once, run inside the
                agent you already use, and wait for your yes before writing a tuned resume or moving a
                posting.
              </p>
              <div className="flex gap-2">
                <ButtonLink variant="secondary" href={`${GITHUB_REPO}#quick-start`}>
                  Read the quick start
                </ButtonLink>
              </div>
            </div>

            <AgentTranscript />
          </div>
        </Card>
      </div>
    </section>
  );
}

/**
 * A still of an agent session. Decorative rather than a live terminal, so it is
 * exposed to assistive tech as a figure with a plain-language caption.
 */
function AgentTranscript() {
  return (
    <figure className="m-0 flex min-w-0 flex-col gap-2.5 rounded-lg bg-inverse p-[18px_20px] text-on-inverse shadow-3">
      <div className="mb-1.5 flex items-center gap-1.5" aria-hidden="true">
        <span className="size-[9px] rounded-full bg-white/15" />
        <span className="size-[9px] rounded-full bg-white/15" />
        <span className="size-[9px] rounded-full bg-white/15" />
        <span className="ml-auto text-[11px] text-birch-5">claude — ~/work</span>
      </div>

      <div className="flex flex-col gap-2.5 type-code">
        {DEMO_LINES.map((line, index) => (
          <div key={index} className="flex gap-3">
            <span
              aria-hidden="true"
              className={line.tone === "user" ? "w-3.5 flex-none text-ochre-2" : "w-3.5 flex-none text-moss-2"}
            >
              {line.glyph}
            </span>
            <span
              className={line.tone === "user" ? "[overflow-wrap:anywhere] text-on-inverse" : "[overflow-wrap:anywhere] text-birch-4"}
            >
              {line.text}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-1.5 flex flex-wrap gap-2" aria-hidden="true">
        <span className="type-small rounded-pill bg-moss-3 px-3.5 py-1.5 font-sans font-semibold text-night-0">
          Approve changes
        </span>
        <span className="type-small rounded-pill border border-white/20 px-3.5 py-1.5 font-sans font-semibold">
          Adjust wording
        </span>
      </div>

      <figcaption className="sr-only">
        An example session: the user runs /find-jobs and /tune-resume, and the agent reports what it
        found and asks for approval before writing anything.
      </figcaption>
    </figure>
  );
}
