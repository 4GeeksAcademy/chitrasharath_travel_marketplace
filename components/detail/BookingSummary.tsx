import { currency } from "@/lib/format";
import { totalAvailableNights } from "@/lib/format";
import type { Listing } from "@/types/listing";

interface BookingSummaryProps {
  listing: Listing;
  selectedNights?: number;
}

export const BookingSummary = ({ listing, selectedNights }: BookingSummaryProps) => {
  const nights = Math.max(1, selectedNights ?? listing.price.totalNights);
  const nightsAvailable = totalAvailableNights(listing.availableDateRanges);
  const total = (listing.price.nightlyRate * nights) + listing.price.cleaningFee + listing.price.serviceFee + listing.price.taxes;
  return (
    <section className="rounded-[18px] border border-[var(--border-soft)] bg-white p-4 shadow-[var(--shadow-primary)] md:sticky md:top-6">
      <p className="text-sm text-[var(--text-secondary)]">{currency(listing.price.nightlyRate)} night</p>
      <p className="text-xs text-[var(--text-muted)]">{nightsAvailable} night{nightsAvailable === 1 ? "" : "s"} available</p>
      <p className="text-xs text-[var(--text-muted)]">{nights} night{nights === 1 ? "" : "s"}</p>
      <p className="text-xl font-bold text-[var(--text-primary)]">{currency(total)} total</p>
      <p className="mt-2 text-xs text-[var(--text-muted)]">Free cancellation for 48 hours</p>
      <button type="button" className="mt-4 h-11 w-full rounded-xl bg-[var(--accent-primary)] text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]">
        Reserve
      </button>
      <p className="mt-2 text-center text-xs text-[var(--text-muted)]">You won&apos;t be charged yet.</p>
    </section>
  );
};
