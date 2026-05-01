interface TrustHighlightItem {
  title: string;
  description: string;
}

interface TrustHighlightsProps {
  items: TrustHighlightItem[];
}

export const TrustHighlights = ({ items }: TrustHighlightsProps) => (
  <section className="space-y-3 border-b border-[var(--border-soft)] pb-6">
    {items.map((item) => (
      <article key={item.title}>
        <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
        <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
      </article>
    ))}
  </section>
);
