import { currency } from "@/lib/format";
import type { Listing } from "@/types/listing";

interface BookingSummaryProps {
  listing: Listing;
}

export const BookingSummary = ({ listing }: BookingSummaryProps) => (
  <section className="rounded-[18px] border border-[var(--border-soft)] bg-white p-4 shadow-[var(--shadow-primary)] md:sticky md:top-6">
    <p className="text-sm text-[var(--text-secondary)]">{currency(listing.price.nightlyRate)} night</p>
    <p className="text-xl font-bold text-[var(--text-primary)]">{currency(listing.price.total)} total</p>
    <p className="mt-2 text-xs text-[var(--text-muted)]">Free cancellation for 48 hours</p>
    <button type="button" className="mt-4 h-11 w-full rounded-xl bg-[var(--accent-primary)] text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]">
      Reserve
    </button>
    <p className="mt-2 text-center text-xs text-[var(--text-muted)]">You won&apos;t be charged yet.</p>
  </section>
);
