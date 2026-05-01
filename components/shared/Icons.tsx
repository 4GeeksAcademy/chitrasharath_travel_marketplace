import type { ReactNode } from "react";

interface IconProps {
  className?: string;
}

const base = "fill-none stroke-current";

export const SearchIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="11" cy="11" r="7" className={base} strokeWidth="1.8" />
    <path d="m20 20-4-4" className={base} strokeWidth="1.8" />
  </svg>
);

export const HeartIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" className={base} strokeWidth="1.8" />
  </svg>
);

export const HomeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M4 10.5 12 4l8 6.5V20H4z" className={base} strokeWidth="1.8" />
  </svg>
);

export const BackIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="m15 18-6-6 6-6" className={base} strokeWidth="1.8" />
  </svg>
);

export const ShareIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="18" cy="5" r="2" className={base} strokeWidth="1.8" />
    <circle cx="6" cy="12" r="2" className={base} strokeWidth="1.8" />
    <circle cx="18" cy="19" r="2" className={base} strokeWidth="1.8" />
    <path d="m8 12 8-6M8 12l8 6" className={base} strokeWidth="1.8" />
  </svg>
);

export const iconWrap = (icon: ReactNode) => (
  <span className="inline-flex h-4 w-4 items-center justify-center">{icon}</span>
);
