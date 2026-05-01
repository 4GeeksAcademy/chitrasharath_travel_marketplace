interface FeeBannerProps {
  text: string;
}

export const FeeBanner = ({ text }: FeeBannerProps) => (
  <aside className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-xs font-semibold text-[var(--text-primary)] shadow-[var(--shadow-chip)]">
    <span>●</span>
    <span>{text}</span>
  </aside>
);
