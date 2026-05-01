import { ListingCard } from "@/components/listing/ListingCard";
import type { Listing } from "@/types/listing";

interface ListingCardFeedProps {
  listing: Listing;
}

export const ListingCardFeed = ({ listing }: ListingCardFeedProps) => (
  <ListingCard listing={listing} source="catalog" />
);
