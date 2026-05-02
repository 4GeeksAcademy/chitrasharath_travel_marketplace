"use client";

import { nightsInRange } from "@/lib/format";
import type { AvailabilityRange } from "@/types/listing";
import { useEffect, useMemo, useState } from "react";

interface DateSelectionSectionProps {
  range: AvailabilityRange;
  onNightsChange?: (nights: number) => void;
}

const toUtcDate = (value: string) => new Date(`${value}T00:00:00Z`);

const addDays = (value: string, days: number) => {
  const date = toUtcDate(value);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

export const DateSelectionSection = ({ range, onNightsChange }: DateSelectionSectionProps) => {
  const [startDate, setStartDate] = useState(range.startDate);
  const [endDate, setEndDate] = useState(range.endDate);
  const rangeNights = useMemo(() => nightsInRange(range), [range]);

  useEffect(() => {
    setStartDate(range.startDate);
    setEndDate(range.endDate);
  }, [range.startDate, range.endDate]);

  const nights = useMemo(() => {
    const start = toUtcDate(startDate);
    const end = toUtcDate(endDate);
    const ms = end.getTime() - start.getTime();
    return Number.isFinite(ms) ? Math.max(1, Math.round(ms / 86400000)) : 1;
  }, [startDate, endDate]);

  useEffect(() => {
    onNightsChange?.(nights);
  }, [nights, onNightsChange]);

  const minEndDate = useMemo(() => addDays(startDate, 1), [startDate]);

  return (
    <section className="space-y-3 border-b border-[var(--border-soft)] pb-6">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">Availability</h2>
      <p className="text-sm text-[var(--text-secondary)]">{range.startDate} to {range.endDate}</p>
      <p className="text-xs text-[var(--text-muted)]">{rangeNights} night{rangeNights === 1 ? "" : "s"} available in this date range</p>
      <div className="grid gap-3 rounded-xl border border-[var(--border-soft)] bg-white p-3 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Start date</span>
          <input
            type="date"
            value={startDate}
            min={range.startDate}
            max={range.endDate}
            onChange={(event) => {
              const nextStart = event.target.value;
              setStartDate(nextStart);
              const nextMinEnd = addDays(nextStart, 1);
              if (endDate < nextMinEnd) setEndDate(nextMinEnd);
            }}
            className="h-10 w-full rounded-lg border border-[var(--border-soft)] px-3 text-sm text-[var(--text-primary)]"
          />
        </label>
        <label className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">End date</span>
          <input
            type="date"
            value={endDate}
            min={minEndDate}
            max={range.endDate}
            onChange={(event) => setEndDate(event.target.value)}
            className="h-10 w-full rounded-lg border border-[var(--border-soft)] px-3 text-sm text-[var(--text-primary)]"
          />
        </label>
      </div>
      <p className="text-xs text-[var(--text-muted)]">{nights} night{nights === 1 ? "" : "s"} selected</p>
    </section>
  );
};
