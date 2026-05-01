import type { Host } from "@/types/host";
import Image from "next/image";

interface HostSectionProps {
  host: Host;
}

export const HostSection = ({ host }: HostSectionProps) => (
  <section className="space-y-3 rounded-[18px] bg-[var(--surface-muted)] p-4">
    <div className="flex items-center gap-3">
      <Image src={host.avatarUrl} alt={host.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" unoptimized />
      <div>
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Hosted by {host.name}</h2>
        <p className="text-xs text-[var(--text-secondary)]">Response rate {host.responseRate} · {host.responseTime}</p>
      </div>
    </div>
    <p className="text-sm text-[var(--text-secondary)]">{host.bio}</p>
    <button type="button" className="rounded-xl border border-[var(--border-soft)] bg-white px-4 py-2 text-sm font-semibold text-[var(--text-primary)]">
      Contact host
    </button>
  </section>
);
