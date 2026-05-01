import { StaticMap } from "@/components/shared/StaticMap";

interface MapPoint {
  id: string;
  label: string;
  lat: number;
  lng: number;
  active?: boolean;
}

interface MapHeaderProps {
  locationLabel: string;
  points: MapPoint[];
  fullWidth?: boolean;
}

export const MapHeader = ({ locationLabel, points, fullWidth }: MapHeaderProps) => (
  <header className={fullWidth ? "w-full" : "rounded-[18px] border border-[var(--border-soft)] bg-[var(--map-water)] p-4"}>
    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">Map area</p>
    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">{locationLabel}</p>
    <StaticMap points={points} className={fullWidth ? "mt-3 h-56 w-full rounded-none border-0" : "mt-3 h-24"} />
  </header>
);
