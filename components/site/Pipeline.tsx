import { Card } from "@/components/ds/Card";
import { Icon } from "@/components/ds/Icon";
import { STEPS } from "@/lib/content";

export function Pipeline() {
  return (
    <section className="pb-24">
      <div className="shell grid grid-cols-1 items-start gap-14 min-[861px]:grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="eyebrow">The pipeline</p>
          <h2 className="type-h2 text-heading">One profile. Every resume is a projection of it.</h2>
          <p className="text-muted">
            Keep real metrics, stories and constraints in <code className="code-inline">profile.md</code>.
            Each tuned resume trims two pages from it, and anything new you say gets folded back so the
            profile never goes stale.
          </p>

          <ol className="mt-2 flex list-none flex-col p-0">
            {STEPS.map((step) => (
              <li
                key={step.cmd}
                className="grid grid-cols-[36px_minmax(0,1fr)] gap-3.5 border-t border-subtle py-3"
              >
                <span className="grid size-9 place-items-center rounded-full bg-accent-soft text-accent-text">
                  <Icon name={step.icon} size={18} />
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold text-heading">
                    <code className="type-code text-accent-text">/{step.cmd}</code> · {step.title}
                  </p>
                  <p className="type-small text-muted">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Card className="p-0">
          <p className="flex items-center gap-2 border-b border-subtle px-5 py-3.5 type-small text-muted">
            <Icon name="folder-tree" size={16} />
            Your workspace
          </p>
          <pre className="m-0 overflow-auto px-6 py-5 type-code leading-[1.75] text-body">
            {`resume/<your-slug>/
  `}
            <span className="font-medium text-accent-text">profile.md</span>
            {`               `}
            <span className="text-faint"># source of truth</span>
            {`
  <your-slug>-resume.html  `}
            <span className="text-faint"># layout skeleton</span>
            {`
  job-boards.md            `}
            <span className="text-faint"># boards + search config</span>
            {`
  job-postings/
    applied/  interview/  lost/  archived/`}
          </pre>
        </Card>
      </div>
    </section>
  );
}
