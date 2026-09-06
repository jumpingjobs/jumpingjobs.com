import { Badge } from "@/components/ds/Badge";
import { Card } from "@/components/ds/Card";
import { Icon } from "@/components/ds/Icon";
import { SKILLS } from "@/lib/content";
import { cx } from "@/lib/cx";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="shell flex flex-col gap-10">
        <div className="flex max-w-[600px] flex-col gap-3.5">
          <p className="eyebrow">The commands</p>
          <h2 className="type-h2 text-heading">One onboarding command. Seven for the pipeline.</h2>
          <p className="text-muted">
            Each names one job. Start with <code className="code-inline">/init-resume</code>;
            everything else reads the profile it builds.
          </p>
        </div>

        <ul className="grid list-none grid-cols-1 gap-3.5 p-0 min-[861px]:grid-cols-3">
          {SKILLS.map((skill) => (
            <li key={skill.cmd} className={cx("flex min-w-0", skill.wide && "min-[861px]:col-span-2")}>
              <Card interactive className="flex flex-1 p-6">
                <div className="flex h-full flex-col gap-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <code className="type-code rounded-pill bg-accent-soft px-2.5 py-1 font-medium text-accent-text">
                      /{skill.cmd}
                    </code>
                    <Icon name={skill.icon} size={20} className="text-faint" />
                  </div>
                  <h3 className="type-h3 text-heading">{skill.title}</h3>
                  <p className="text-muted">{skill.desc}</p>
                  {skill.badge && (
                    <div className="mt-auto pt-1">
                      <Badge tone="accent">{skill.badge}</Badge>
                    </div>
                  )}
                </div>
              </Card>
            </li>
          ))}
        </ul>

        <p className="type-small text-muted">
          Two supporting skills run underneath: <code className="code-inline">applicant-profile</code>{" "}
          keeps <code className="code-inline">profile.md</code> current, and{" "}
          <code className="code-inline">interview-cheatsheet</code> writes the in-the-room sheet.
        </p>
      </div>
    </section>
  );
}
