interface MapPoint {
  id: string;
  label: string;
  lat: number;
  lng: number;
  active?: boolean;
}

interface StaticMapProps {
  points: MapPoint[];
  className?: string;
}

const clamp = (value: number) => Math.max(8, Math.min(92, value));
const pad = (value: number) => Number(value.toFixed(5));

export const StaticMap = ({ points, className }: StaticMapProps) => {
  const safePoints = points.length ? points : [{ id: "fallback", label: "Location", lat: 39.5, lng: -78.5 }];
  const lats = safePoints.map((point) => point.lat);
  const lngs = safePoints.map((point) => point.lng);
  const minLat = Math.min(...lats) - 0.08;
  const maxLat = Math.max(...lats) + 0.08;
  const minLng = Math.min(...lngs) - 0.08;
  const maxLng = Math.max(...lngs) + 0.08;
  const centerLat = (minLat + maxLat) / 2;
  const centerLng = (minLng + maxLng) / 2;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${pad(minLng)},${pad(minLat)},${pad(maxLng)},${pad(maxLat)}&layer=mapnik`;
  return (
    <div className={`relative overflow-hidden ${className ?? "h-36"}`}>
      <iframe
        title="Map preview"
        src={src}
        loading="lazy"
        className="h-full w-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {safePoints.map((point) => {
        const x = ((point.lng - minLng) / (maxLng - minLng || 1)) * 100;
        const y = 100 - ((point.lat - minLat) / (maxLat - minLat || 1)) * 100;
        return (
          <span
            key={point.id}
            title={point.label}
            className={`pointer-events-none absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-[var(--shadow-chip)] ${point.active ? "bg-[var(--accent-primary)]" : "bg-[var(--text-primary)]"}`}
            style={{ left: `${x}%`, top: `${y}%` }}
          />
        );
      })}
      <span className="pointer-events-none absolute right-2 bottom-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-[var(--text-secondary)]">
        OpenStreetMap
      </span>
    </div>
  );
};
