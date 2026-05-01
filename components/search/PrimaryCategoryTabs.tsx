import type { ReactNode } from "react";

interface TabItem {
  label: string;
  icon: ReactNode;
  isActive?: boolean;
  badgeLabel?: string;
}

interface PrimaryCategoryTabsProps {
  items: TabItem[];
}

export const PrimaryCategoryTabs = ({ items }: PrimaryCategoryTabsProps) => (
  <nav
    className="mx-auto grid w-full max-w-[375px] gap-1.5 pb-1"
    style={{ gridTemplateColumns: `repeat(${Math.max(items.length, 1)}, minmax(0, 1fr))` }}
  >
    {items.map((item) => (
      <button
        key={item.label}
        type="button"
        className={`relative inline-flex min-w-0 w-full flex-col items-center justify-center gap-1 rounded-2xl border px-1.5 py-2 text-[10px] font-semibold leading-tight transition ${
          item.isActive
            ? "border-red-500 bg-[var(--accent-soft)] text-[var(--accent-hover)]"
            : "border-[var(--border-soft)] bg-white text-[var(--text-secondary)]"
        }`}
      >
        {item.badgeLabel ? <span className="absolute top-1 right-1 rounded-full bg-white px-1 py-0.5 text-[8px] leading-none">{item.badgeLabel}</span> : null}
        <span className="h-4 w-4">{item.icon}</span>
        <span className="max-w-full truncate">{item.label}</span>
      </button>
    ))}
  </nav>
);
