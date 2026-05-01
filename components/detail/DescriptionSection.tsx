"use client";

import { useState } from "react";

interface DescriptionSectionProps {
  body: string;
}

export const DescriptionSection = ({ body }: DescriptionSectionProps) => {
  const [expanded, setExpanded] = useState(false);
  const text = expanded ? body : `${body.slice(0, 145)}...`;
  return (
    <section className="space-y-2 border-b border-[var(--border-soft)] pb-6">
      <h2 className="text-lg font-bold text-[var(--text-primary)]">About this place</h2>
      <p className="text-sm text-[var(--text-secondary)]">{text}</p>
      <button type="button" onClick={() => setExpanded((state) => !state)} className="text-sm font-semibold text-[var(--accent-hover)]">
        {expanded ? "Show less" : "Show more"}
      </button>
    </section>
  );
};
