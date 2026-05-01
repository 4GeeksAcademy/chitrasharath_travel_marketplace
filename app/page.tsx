
"use client";
import { Logo } from "@/components/shared/Logo";

import { BottomTabBar } from "@/components/navigation/BottomTabBar";
import { FeeBanner } from "@/components/listing/FeeBanner";
import { ListingCard } from "@/components/listing/ListingCard";
import { ListingRailSection } from "@/components/listing/ListingRailSection";
import { DestinationSearchInput } from "@/components/search/DestinationSearchInput";
import { PrimaryCategoryTabs } from "@/components/search/PrimaryCategoryTabs";
import { DestinationLinksSection } from "@/components/shared/DestinationLinksSection";
import { FooterLinkGroups } from "@/components/shared/FooterLinkGroups";
import { HomeIcon, SearchIcon, ShareIcon } from "@/components/shared/Icons";
import { LoadingBlock } from "@/components/shared/LoadingBlock";
import { footerLinkGroups, footerMeta, inspirationGroups } from "@/data/home-sections";
import { listings } from "@/data/listings";
import { listingSections, resolveDestinationSlug } from "@/lib/selectors";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 650); return () => clearTimeout(timer); }, []);
  const filtered = useMemo(() => listings.filter((item) => `${item.destinationSlug} ${item.title} ${item.searchKeywords.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const destinationSlug = resolveDestinationSlug(query);
  const goToCatalog = () => router.push(`/catalog${destinationSlug ? `?destination=${destinationSlug}` : ""}`);
  const categoryItems = [{ label: "Homes", icon: <HomeIcon className="h-4 w-4" />, isActive: true }, { label: "Experiences", icon: <ShareIcon className="h-4 w-4" />, badgeLabel: "NEW" }, { label: "Services", icon: <SearchIcon className="h-4 w-4" /> }];
  const sections = destinationSlug ? [] : listingSections();
  return (
    <main className="mx-auto max-w-6xl px-4 pt-5 pb-28 md:px-6 md:pt-7 md:pb-8">
      <div className="space-y-8 md:space-y-9">
        <div className="flex items-center mb-2 md:mb-4 md:justify-start md:gap-6">
          <div className="hidden md:flex items-center gap-2">
            <Logo className="h-10 w-auto" />
            <span className="ml-2 text-2xl font-bold tracking-tight text-[var(--accent-primary)]">Stayvoy</span>
          </div>
          <div className="flex-1">
            <DestinationSearchInput
              placeholder="Enter destination"
              value={query}
              isFocused={focused}
              onChange={setQuery}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onEnter={goToCatalog}
              leftSlot={null}
            />
          </div>
        </div>
        {query ? <button type="button" onClick={goToCatalog} className="w-fit rounded-full bg-[var(--accent-primary)] px-5 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-hover)]">Search</button> : null}
        <PrimaryCategoryTabs items={categoryItems} />
        <FeeBanner text="Prices include all fees" />
        {loading ? <LoadingBlock /> : null}
        {!loading && query ? <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <ListingCard key={item.id} listing={item} source="home" />)}</section> : null}
        {!loading && !query ? sections.map((section) => <ListingRailSection key={section.title} title={section.title} subtitle={section.subtitle} items={section.items} source="home" />) : null}
        <DestinationLinksSection title="Inspiration for future getaways" groups={inspirationGroups} />
        <FooterLinkGroups groups={footerLinkGroups} meta={footerMeta} />
      </div>
      <BottomTabBar />
    </main>
  );
}
