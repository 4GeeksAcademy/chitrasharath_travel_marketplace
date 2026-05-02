"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface HistoryBackButtonProps {
  fallbackHref: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}

export const HistoryBackButton = ({
  fallbackHref,
  className,
  ariaLabel = "Back",
  children,
}: HistoryBackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={handleBack}
      className={className}
    >
      {children}
    </button>
  );
};
