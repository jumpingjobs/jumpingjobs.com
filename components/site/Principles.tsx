import { Icon } from "@/components/ds/Icon";
import { PRINCIPLES } from "@/lib/content";

export function Principles() {
  return (
    <section className="pb-24">
      <ul className="shell grid list-none grid-cols-1 gap-10 p-0 px-6 min-[861px]:grid-cols-3">
        {PRINCIPLES.map((principle) => (
          <li key={principle.title} className="flex flex-col gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-accent-soft text-accent-text">
              <Icon name={principle.icon} size={22} />
            </span>
            <h3 className="type-h3 text-heading">{principle.title}</h3>
            <p className="text-muted">{principle.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
