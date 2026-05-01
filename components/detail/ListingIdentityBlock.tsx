import { stayMeta } from "@/lib/format";
import type { Listing } from "@/types/listing";

interface ListingIdentityBlockProps {
  listing: Listing;
  hostName: string;
}

export const ListingIdentityBlock = ({ listing, hostName }: ListingIdentityBlockProps) => (
  <section className="space-y-1 border-b border-[var(--border-soft)] pb-6">
    <h1 className="break-words text-[26px] leading-8 font-bold text-[var(--text-primary)]">{listing.title}</h1>
    {listing.badges.length ? (
      <div className="flex flex-wrap gap-2 pt-1">
        {listing.badges.slice(0, 2).map((badge) => (
          <span
            key={badge.label}
            className={`rounded-full px-3 py-1 text-xs font-semibold leading-none ${
              badge.tone === "accent"
                ? "bg-[var(--accent-primary)] text-white"
                : "bg-[var(--surface-muted)] text-[var(--text-primary)]"
            }`}
          >
            {badge.label}
          </span>
        ))}
      </div>
    ) : null}
    <p className="text-sm text-[var(--text-secondary)]">{listing.propertyType} · {listing.locationLabel}</p>
    <p className="text-sm text-[var(--text-secondary)]">{stayMeta(listing.guestCount, listing.bedroomCount, listing.bedCount, listing.bathCount)}</p>
    <p className="text-sm font-semibold text-[var(--text-primary)]">Hosted by {hostName}</p>
  </section>
);
