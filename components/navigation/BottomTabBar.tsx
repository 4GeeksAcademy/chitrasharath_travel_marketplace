"use client";

import { HomeIcon, HeartIcon, SearchIcon } from "@/components/shared/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Explore", href: "/", icon: SearchIcon },
  { label: "Wishlists", href: "/catalog", icon: HeartIcon },
  { label: "Log in", href: "/catalog", icon: HomeIcon },
];

export const BottomTabBar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border-soft)] bg-white/95 backdrop-blur md:hidden">
      <ul className="mx-auto grid h-[72px] max-w-xl grid-cols-3">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <Link href={item.href} className="flex h-full flex-col items-center justify-center gap-1">
                <Icon className={`h-5 w-5 ${active ? "text-[var(--accent-primary)]" : "text-[var(--text-secondary)]"}`} />
                <span className={`text-[11px] font-medium ${active ? "text-[var(--accent-primary)]" : "text-[var(--text-secondary)]"}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
