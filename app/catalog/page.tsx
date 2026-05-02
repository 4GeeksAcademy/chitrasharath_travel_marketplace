import { BottomTabBar } from "@/components/navigation/BottomTabBar";
import { FeeBanner } from "@/components/listing/FeeBanner";
import { ListingFeed } from "@/components/listing/ListingFeed";
import { MapHeader } from "@/components/listing/MapHeader";
import { FooterLinkGroups } from "@/components/shared/FooterLinkGroups";
import { HistoryBackButton } from "@/components/shared/HistoryBackButton";
import { BackIcon } from "@/components/shared/Icons";
import { footerLinkGroups, footerMeta } from "@/data/home-sections";
import { listingsForDestination } from "@/lib/selectors";

interface CatalogPageProps {
  searchParams: Promise<{ destination?: string }>;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const destination = params.destination ?? "";
  const items = listingsForDestination(destination);
  const destinationName = destination
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  const resultsLabel = destinationName
    ? `${items.length} propert${items.length === 1 ? "y" : "ies"} in ${destinationName}`
    : `${items.length} propert${items.length === 1 ? "y" : "ies"}`;
  const label = destination ? `Results in ${destination}` : "Browse all destinations";
  const points = items.map((item, index) => ({
    id: item.id,
    label: item.title,
    lat: item.coordinates.lat,
    lng: item.coordinates.lng,
    active: index === 0,
  }));
  return (
    <main className="mx-auto max-w-6xl space-y-4 px-4 pt-4 pb-28 md:px-6 md:space-y-6 md:pb-8">
      <HistoryBackButton
        fallbackHref="/"
        ariaLabel="Back"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/90 text-[var(--text-primary)] shadow-[var(--shadow-chip)] transition hover:-translate-y-0.5"
      >
        <BackIcon className="h-4 w-4" />
      </HistoryBackButton>
      <section className="mb-4 w-full md:-mx-6">
        <MapHeader locationLabel={label} points={points} fullWidth />
      </section>
      <section className="flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="text-center text-base font-semibold text-[var(--text-primary)] md:text-left">{resultsLabel}</h2>
        <div className="flex justify-center md:ml-auto md:justify-end">
          <FeeBanner text="Prices include all fees" />
        </div>
      </section>
      <ListingFeed items={items} />
      <div className="hidden md:block">
        <FooterLinkGroups groups={footerLinkGroups} meta={footerMeta} />
      </div>
      <BottomTabBar />
    </main>
  );
}
