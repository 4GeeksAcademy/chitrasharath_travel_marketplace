"use client";

import { ListingCardCompact } from "@/components/listing/ListingCardCompact";
import { BackIcon } from "@/components/shared/Icons";
import type { Listing } from "@/types/listing";
import { useRef } from "react";

interface ListingRailSectionProps {
  title: string;
  subtitle?: string;
  items: Listing[];
  source?: "home" | "catalog";
}

export const ListingRailSection = ({ title, subtitle, items, source }: ListingRailSectionProps) => (
  <ListingRailSectionInner title={title} subtitle={subtitle} items={items} source={source} />
);

const ListingRailSectionInner = ({ title, subtitle, items, source }: ListingRailSectionProps) => {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.max(rail.clientWidth * 0.85, 260);
    rail.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[var(--text-primary)]">{title}</h2>
          {subtitle ? <p className="text-xs text-[var(--text-secondary)]">{subtitle}</p> : null}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Scroll listings left"
            onClick={() => scrollByCards("left")}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          >
            <BackIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll listings right"
            onClick={() => scrollByCards("right")}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          >
            <BackIcon className="h-4 w-4 rotate-180" />
          </button>
        </div>
      </div>
      <div ref={railRef} className="flex snap-x gap-3 overflow-x-auto pb-1">
        {items.map((listing) => (
          <div key={listing.id} className="snap-start">
            <ListingCardCompact listing={listing} source={source} />
          </div>
        ))}
      </div>
    </section>
  );
};
