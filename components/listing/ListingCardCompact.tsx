import { ListingCard } from "@/components/listing/ListingCard";
import type { Listing } from "@/types/listing";

interface ListingCardCompactProps {
  listing: Listing;
  source?: "home" | "catalog";
}

export const ListingCardCompact = ({ listing, source }: ListingCardCompactProps) => (
  <ListingCard listing={listing} compact source={source} />
);
