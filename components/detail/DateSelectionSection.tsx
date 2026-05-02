"use client";

import { nightsInRange, totalAvailableNights } from "@/lib/format";
import type { AvailabilityRange } from "@/types/listing";
import { useEffect, useMemo, useState } from "react";

interface DateSelectionSectionProps {
  range: AvailabilityRange;
  ranges?: AvailabilityRange[];
  onNightsChange?: (nights: number) => void;
}

const toUtcDate = (value: string) => new Date(`${value}T00:00:00Z`);

const addDays = (value: string, days: number) => {
  const date = toUtcDate(value);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

const shortDate = (value: string) =>
  toUtcDate(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

export const DateSelectionSection = ({ range, ranges, onNightsChange }: DateSelectionSectionProps) => {
  const availableRanges = useMemo(() => {
    if (ranges && ranges.length > 0) return ranges;
    return [range];
  }, [range, ranges]);
  const [activeRangeIndex, setActiveRangeIndex] = useState(0);
  const activeRange = availableRanges[activeRangeIndex] ?? availableRanges[0];
  const [startDate, setStartDate] = useState(activeRange.startDate);
  const [endDate, setEndDate] = useState(activeRange.endDate);
  const availableNights = useMemo(() => {
    if (ranges && ranges.length > 0) return totalAvailableNights(ranges);
    return nightsInRange(range);
  }, [range, ranges]);

  useEffect(() => {
    setActiveRangeIndex(0);
    setStartDate(availableRanges[0].startDate);
    setEndDate(availableRanges[0].endDate);
  }, [availableRanges]);

  useEffect(() => {
    setStartDate(activeRange.startDate);
    setEndDate(activeRange.endDate);
  }, [activeRange.startDate, activeRange.endDate]);

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
  const maxStartDate = useMemo(() => addDays(activeRange.endDate, -1), [activeRange.endDate]);

  return (
    <section className="space-y-3 border-b border-[var(--border-soft)] pb-6">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">Availability</h2>
      <p className="text-sm text-[var(--text-secondary)]">{activeRange.startDate} to {activeRange.endDate}</p>
      <p className="text-xs text-[var(--text-muted)]">{availableNights} night{availableNights === 1 ? "" : "s"} available</p>
      {availableRanges.length > 1 ? (
        <label className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Available windows</span>
          <select
            value={activeRangeIndex}
            onChange={(event) => setActiveRangeIndex(Number(event.target.value))}
            className="h-10 w-full rounded-lg border border-[var(--border-soft)] bg-white px-3 text-sm text-[var(--text-primary)]"
          >
            {availableRanges.map((windowRange, index) => {
              const windowNights = nightsInRange(windowRange);
              return (
                <option key={`${windowRange.startDate}-${windowRange.endDate}`} value={index}>
                  {shortDate(windowRange.startDate)} - {shortDate(windowRange.endDate)} ({windowNights}n)
                </option>
              );
            })}
          </select>
        </label>
      ) : null}
      <div className="grid gap-3 rounded-xl border border-[var(--border-soft)] bg-white p-3 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Start date</span>
          <input
            type="date"
            value={startDate}
            min={activeRange.startDate}
            max={maxStartDate}
            onChange={(event) => {
              const nextStart = event.target.value;
              setStartDate(nextStart);
              const nextMinEnd = addDays(nextStart, 1);
              if (endDate < nextMinEnd) {
                setEndDate(nextMinEnd);
                return;
              }
              if (endDate > activeRange.endDate) {
                setEndDate(activeRange.endDate);
              }
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
            max={activeRange.endDate}
            onChange={(event) => setEndDate(event.target.value)}
            className="h-10 w-full rounded-lg border border-[var(--border-soft)] px-3 text-sm text-[var(--text-primary)]"
          />
        </label>
      </div>
      <p className="text-xs text-[var(--text-muted)]">{nights} night{nights === 1 ? "" : "s"} selected</p>
    </section>
  );
};
