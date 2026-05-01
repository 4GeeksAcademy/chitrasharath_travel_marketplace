import { StaticMap } from "@/components/shared/StaticMap";

interface MapPoint {
  id: string;
  label: string;
  lat: number;
  lng: number;
  active?: boolean;
}

interface LocationSectionProps {
  placeLabel: string;
  points: MapPoint[];
}

export const LocationSection = ({ placeLabel, points }: LocationSectionProps) => (
  <section className="space-y-3 border-b border-[var(--border-soft)] pb-6">
    <h2 className="text-lg font-bold text-[var(--text-primary)]">Where you&apos;ll be</h2>
    <p className="text-sm text-[var(--text-secondary)]">{placeLabel}</p>
    <StaticMap points={points} className="h-36 rounded-[18px]" />
    <p className="text-xs text-[var(--text-muted)]">Exact location shared after booking.</p>
  </section>
);
