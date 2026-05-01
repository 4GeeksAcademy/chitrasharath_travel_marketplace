export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <span className={className} aria-label="Travel Marketplace logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="12" fill="#2563eb"/>
        <path d="M24 12c-5.52 0-10 4.48-10 10 0 4.2 2.6 7.8 6.3 9.4l-1.3 4.6a1 1 0 0 0 1.3 1.2l5.7-2.3c.7.1 1.4.1 2.1.1 5.5 0 10-4.5 10-10s-4.5-10-10-10zm-7 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0z" fill="#fff"/>
      </svg>
    </span>
  );
}
