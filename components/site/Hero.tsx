import { CommandBlock } from "@/components/ds/CommandBlock";
import { Tag } from "@/components/ds/Tag";
import { HARNESSES } from "@/lib/content";

export function Hero() {
  return (
    <section className="jj-wash jj-grain overflow-hidden">
      <div className="shell relative z-[1] flex flex-col items-center gap-7 px-6 pb-20 pt-24 text-center">
        <h1 className="type-display max-w-[820px] text-[clamp(40px,6vw,68px)] text-heading">
          Your job search, run from your agent’s chat.
        </h1>

        <p className="type-lead max-w-[600px] text-body">
          Jumping Jobs is a skills collection for Claude Code, Cursor, Copilot and friends. Build one
          durable profile, find and assess roles, tailor your resume to each posting and prep for
          interviews.
        </p>

        <div className="flex w-full max-w-[520px] flex-col items-center gap-3.5">
          <CommandBlock command="npx jumpingjobs install" size="lg" className="w-full" />
          <p className="type-small text-muted">
            Free and open source · MIT · Node 18+ · <a href="#install">Other install methods</a>
          </p>
        </div>

        <ul className="mt-3 flex list-none flex-wrap justify-center gap-2.5 p-0">
          {HARNESSES.map((harness) => (
            <li key={harness}>
              <Tag size="sm">{harness}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
