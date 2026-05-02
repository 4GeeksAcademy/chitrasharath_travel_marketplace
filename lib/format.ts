import type { AvailabilityRange } from "@/types/listing";

export const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const DAY_IN_MS = 86400000;

const toUtcDate = (value: string) => new Date(`${value}T00:00:00Z`);

export const nightsInRange = (range: AvailabilityRange) => {
  const start = toUtcDate(range.startDate);
  const end = toUtcDate(range.endDate);
  const ms = end.getTime() - start.getTime();
  return Number.isFinite(ms) ? Math.max(1, Math.round(ms / DAY_IN_MS)) : 1;
};

export const totalAvailableNights = (ranges: AvailabilityRange[]) =>
  ranges.reduce((total, range) => total + nightsInRange(range), 0);

export const stayMeta = (
  guestCount: number,
  bedroomCount: number,
  bedCount: number,
  bathCount: number
) => `${guestCount} guests · ${bedroomCount} bedrooms · ${bedCount} beds · ${bathCount} baths`;
