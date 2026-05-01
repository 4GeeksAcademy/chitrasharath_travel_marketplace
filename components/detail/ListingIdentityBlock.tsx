import { stayMeta } from "@/lib/format";
import type { Listing } from "@/types/listing";

interface ListingIdentityBlockProps {
  listing: Listing;
  hostName: string;
}

export const ListingIdentityBlock = ({ listing, hostName }: ListingIdentityBlockProps) => (
  <section className="space-y-1 border-b border-[var(--border-soft)] pb-6">
    <h1 className="text-[26px] leading-8 font-bold text-[var(--text-primary)]">{listing.title}</h1>
    <p className="text-sm text-[var(--text-secondary)]">{listing.propertyType} · {listing.locationLabel}</p>
    <p className="text-sm text-[var(--text-secondary)]">{stayMeta(listing.guestCount, listing.bedroomCount, listing.bedCount, listing.bathCount)}</p>
    <p className="text-sm font-semibold text-[var(--text-primary)]">Hosted by {hostName}</p>
  </section>
);
