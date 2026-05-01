import type { InspirationGroup } from "@/types/search";

interface DestinationLinksSectionProps {
  title: string;
  groups: InspirationGroup[];
}

export const DestinationLinksSection = ({ title, groups }: DestinationLinksSectionProps) => (
  <section className="space-y-4">
    <h2 className="text-lg font-bold text-[var(--text-primary)]">{title}</h2>
    <div className="rounded-[18px] border border-[var(--border-soft)] bg-white p-4">
      <div className="flex gap-2 text-xs font-semibold text-[var(--text-secondary)]">
        {groups.map((group) => (
          <span key={group.id} className="rounded-full bg-[var(--surface-muted)] px-3 py-1">
            {group.label}
          </span>
        ))}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {groups.flatMap((group) => group.links).map((link) => (
          <a key={link.name} href="#" className="rounded-xl border border-[var(--border-soft)] p-3">
            <p className="text-sm font-semibold text-[var(--text-primary)]">{link.name}</p>
            <p className="text-xs text-[var(--text-muted)]">{link.subLabel}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
