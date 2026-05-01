import { ListingCardFeed } from "@/components/listing/ListingCardFeed";
import type { Listing } from "@/types/listing";

interface ListingFeedProps {
  items: Listing[];
}

export const ListingFeed = ({ items }: ListingFeedProps) => (
  <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {items.map((listing) => (
      <ListingCardFeed key={listing.id} listing={listing} />
    ))}
  </section>
);
