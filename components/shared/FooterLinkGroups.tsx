import type { FooterLinkGroup, FooterMeta } from "@/types/search";

interface FooterLinkGroupsProps {
  groups: FooterLinkGroup[];
  meta: FooterMeta;
}

export const FooterLinkGroups = ({ groups, meta }: FooterLinkGroupsProps) => (
  <footer className="mt-10 border-t border-[var(--border-soft)] pt-8 pb-24 md:pb-10">
    <div className="grid gap-6 md:grid-cols-3">
      {groups.map((group) => (
        <section key={group.title}>
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">{group.title}</h3>
          <ul className="mt-2 space-y-1 text-sm text-[var(--text-secondary)]">
            {group.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
    <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
      <span>{meta.locale}</span>
      <span>{meta.currency}</span>
      {meta.socialLinks.map((item) => (
        <span key={item}>{item}</span>
      ))}
      {meta.legalLinks.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
    <div className="mt-3 text-left text-xs text-[var(--text-muted)] md:text-right">&copy; {new Date().getFullYear()} Stayvoy. All rights reserved.</div>
  </footer>
);
