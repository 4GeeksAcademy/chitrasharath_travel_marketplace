import type { ReactNode } from "react";

interface CircleIconButtonProps {
  label: string;
  onClick?: () => void;
  children: ReactNode;
}

export const CircleIconButton = ({ label, onClick, children }: CircleIconButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/90 text-[var(--text-primary)] shadow-[var(--shadow-chip)] transition hover:-translate-y-0.5"
  >
    {children}
  </button>
);
