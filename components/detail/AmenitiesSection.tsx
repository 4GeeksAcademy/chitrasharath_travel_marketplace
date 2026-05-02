"use client";

import type { Amenity } from "@/types/amenity";
import { useState } from "react";

interface AmenitiesSectionProps {
  items: Amenity[];
}

export const AmenitiesSection = ({ items }: AmenitiesSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const collapsedCount = 4;
  const canToggle = items.length > collapsedCount;
  const visible = showAll || !canToggle ? items : items.slice(0, collapsedCount);
  return (
    <section className="space-y-3 border-b border-[var(--border-soft)] pb-6">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">Amenities</h2>
      <ul className="grid gap-2 text-sm text-[var(--text-secondary)] md:grid-cols-2">
        {visible.map((item) => (
          <li key={item.id}>• {item.label}</li>
        ))}
      </ul>
      {canToggle ? (
        <button type="button" onClick={() => setShowAll((state) => !state)} className="text-sm font-semibold text-[var(--accent-hover)]">
          {showAll ? "Show fewer amenities" : "Show all amenities"}
        </button>
      ) : null}
    </section>
  );
};
