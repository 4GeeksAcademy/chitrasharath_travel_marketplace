import { totalAvailableNights } from "@/lib/format";
import type { Listing } from "@/types/listing";
import Image from "next/image";
import Link from "next/link";

interface ListingCardProps {
  listing: Listing;
  compact?: boolean;
  source?: "home" | "catalog";
}

export const ListingCard = ({ listing, compact, source }: ListingCardProps) => {
  const href = source ? `/rooms/${listing.id}?from=${source}` : `/rooms/${listing.id}`;
  const nightsAvailable = totalAvailableNights(listing.availableDateRanges);

  return (
    <article className={`group rise-in ${compact ? "w-[250px] shrink-0" : "w-full"}`}>
      <Link href={href} className="block">
        <div className="relative overflow-hidden rounded-[22px] border border-[var(--border-soft)] shadow-[var(--shadow-primary)] md:transition md:duration-200 md:group-hover:-translate-y-0.5">
          <Image src={listing.photos[0].url} alt={listing.photos[0].alt} width={800} height={600} className="h-52 w-full object-cover transition duration-200 group-hover:scale-[1.03]" unoptimized />
          {listing.badges.length ? (
            <div className="absolute top-3 left-3 flex max-w-[75%] flex-wrap gap-1.5">
              {listing.badges.slice(0, 2).map((badge) => (
                <span
                  key={badge.label}
                  className={`rounded-full px-2 py-1 text-[10px] font-semibold leading-none ${
                    badge.tone === "accent"
                      ? "bg-[var(--accent-primary)] text-white"
                      : "bg-white/90 text-[var(--text-primary)]"
                  }`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          ) : null}
          <button type="button" className="absolute top-3 right-3 rounded-full bg-white/85 p-2">
            <span className="text-xs">♡</span>
          </button>
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-sm font-semibold text-[var(--text-primary)]">{listing.title}</p>
          <p className="text-xs text-[var(--text-secondary)]">{compact ? listing.locationLabel : listing.summary}</p>
          <p className="text-xs text-[var(--text-secondary)]">{nightsAvailable} night{nightsAvailable === 1 ? "" : "s"} available</p>
          <p className="text-sm font-semibold text-[var(--text-primary)]">${listing.price.total} total</p>
          <p className="text-xs text-[var(--text-muted)]">★ {listing.rating} · {listing.reviewCount} reviews</p>
        </div>
      </Link>
    </article>
  );
};
