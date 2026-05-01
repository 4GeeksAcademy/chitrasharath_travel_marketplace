import type { AvailabilityRange } from "@/types/listing";

interface DateSelectionSectionProps {
  range: AvailabilityRange;
}

export const DateSelectionSection = ({ range }: DateSelectionSectionProps) => (
  <section className="space-y-2 border-b border-[var(--border-soft)] pb-6">
    <h2 className="text-lg font-bold text-[var(--text-primary)]">Availability</h2>
    <p className="text-sm text-[var(--text-secondary)]">{range.startDate} to {range.endDate}</p>
    <div className="rounded-xl border border-[var(--border-soft)] bg-white p-3 text-xs text-[var(--text-muted)]">
      Calendar preview for your selected dates.
    </div>
  </section>
);
