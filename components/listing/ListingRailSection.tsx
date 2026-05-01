import { ListingCardCompact } from "@/components/listing/ListingCardCompact";
import type { Listing } from "@/types/listing";

interface ListingRailSectionProps {
  title: string;
  subtitle?: string;
  items: Listing[];
  source?: "home" | "catalog";
}

export const ListingRailSection = ({ title, subtitle, items, source }: ListingRailSectionProps) => (
  <section className="space-y-3">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold text-[var(--text-primary)]">{title}</h2>
        {subtitle ? <p className="text-xs text-[var(--text-secondary)]">{subtitle}</p> : null}
      </div>
      <button type="button" className="h-8 w-8 rounded-full border border-[var(--border-soft)] text-[var(--text-secondary)]">
        +
      </button>
    </div>
    <div className="flex snap-x gap-3 overflow-x-auto pb-1">
      {items.map((listing) => (
        <div key={listing.id} className="snap-start">
          <ListingCardCompact listing={listing} source={source} />
        </div>
      ))}
    </div>
  </section>
);
