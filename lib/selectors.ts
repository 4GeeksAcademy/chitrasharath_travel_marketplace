import { destinations } from "@/data/destinations";
import { homeSections } from "@/data/home-sections";
import { listings } from "@/data/listings";
import type { Listing } from "@/types/listing";

export const listingById = (id: string) => listings.find((listing) => listing.id === id);

export const listingsForDestination = (slug?: string) =>
  slug ? listings.filter((listing) => listing.destinationSlug === slug) : listings;

export const listingSections = () =>
  homeSections.map((section) => {
    const items = section.listingIds
      .map((id) => listingById(id))
      .filter((item): item is Listing => Boolean(item));

    if (section.id === "featured-hotels-miami") {
      items.sort((a, b) => {
        if (b.rating !== a.rating) return b.rating - a.rating;
        return b.reviewCount - a.reviewCount;
      });
    }

    return {
      ...section,
      items,
    };
  });

export const resolveDestinationSlug = (query: string) => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return "";
  const destination = destinations.find(
    (item) =>
      item.slug.includes(normalized) ||
      item.searchLabel.toLowerCase().includes(normalized) ||
      item.searchKeywords.some((keyword) => keyword.includes(normalized))
  );
  return destination?.slug ?? "";
};
