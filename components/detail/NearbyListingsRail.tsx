import { ListingCardCompact } from "@/components/listing/ListingCardCompact";
import type { Listing } from "@/types/listing";

interface NearbyListingsRailProps {
  items: Listing[];
}

export const NearbyListingsRail = ({ items }: NearbyListingsRailProps) => (
  <section className="space-y-3">
    <h2 className="text-lg font-bold text-[var(--text-primary)]">Nearby stays</h2>
    <div className="flex gap-3 overflow-x-auto pb-1">
      {items.map((item) => (
        <ListingCardCompact key={item.id} listing={item} />
      ))}
    </div>
  </section>
);
