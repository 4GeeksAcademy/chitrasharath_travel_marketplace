import { BottomTabBar } from "@/components/navigation/BottomTabBar";
import { FeeBanner } from "@/components/listing/FeeBanner";
import { ListingFeed } from "@/components/listing/ListingFeed";
import { MapHeader } from "@/components/listing/MapHeader";
import { BackIcon } from "@/components/shared/Icons";
import { listingsForDestination } from "@/lib/selectors";
import Link from "next/link";

interface CatalogPageProps {
  searchParams: Promise<{ destination?: string }>;
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const params = await searchParams;
  const destination = params.destination ?? "";
  const items = listingsForDestination(destination);
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
      <Link
        href="/"
        aria-label="Back"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/90 text-[var(--text-primary)] shadow-[var(--shadow-chip)] transition hover:-translate-y-0.5"
      >
        <BackIcon className="h-4 w-4" />
      </Link>
      <section className="mb-4 w-full md:-mx-6">
        <MapHeader locationLabel={label} points={points} fullWidth />
      </section>
      <FeeBanner text="Prices include all fees" />
      <ListingFeed items={items} />
      <BottomTabBar />
    </main>
  );
}
