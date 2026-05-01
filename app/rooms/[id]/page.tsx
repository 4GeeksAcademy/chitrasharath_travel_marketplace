"use client";
import { amenities } from "@/data/amenities";
import { footerLinkGroups, footerMeta, inspirationGroups } from "@/data/home-sections";
import { hosts } from "@/data/hosts";
import { listings } from "@/data/listings";
import { AmenitiesSection } from "@/components/detail/AmenitiesSection";
import { BookingSummary } from "@/components/detail/BookingSummary";
import { DateSelectionSection } from "@/components/detail/DateSelectionSection";
import { DescriptionSection } from "@/components/detail/DescriptionSection";
import { HeroMediaHeader } from "@/components/detail/HeroMediaHeader";
import { HostSection } from "@/components/detail/HostSection";
import { ListingIdentityBlock } from "@/components/detail/ListingIdentityBlock";
import { LocationSection } from "@/components/detail/LocationSection";
import { NearbyListingsRail } from "@/components/detail/NearbyListingsRail";
import { PolicySection } from "@/components/detail/PolicySection";
import { ReviewPlaceholderSection } from "@/components/detail/ReviewPlaceholderSection";
import { TrustHighlights } from "@/components/detail/TrustHighlights";
import { DestinationLinksSection } from "@/components/shared/DestinationLinksSection";
import { FooterLinkGroups } from "@/components/shared/FooterLinkGroups";
import { LoadingBlock } from "@/components/shared/LoadingBlock";
import { useSearchParams } from "next/navigation";
import { use, useEffect, useMemo, useState } from "react";

export default function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedNights, setSelectedNights] = useState(2);
  const trustItems = [{ title: "Self check-in", description: "Keypad access for smooth arrival." }, { title: "Great communication", description: "" }];
  useEffect(() => { const timer = setTimeout(() => setLoading(false), 700); return () => clearTimeout(timer); }, []);
  const listing = useMemo(() => listings.find((item) => item.id === id) ?? listings[0], [id]);
  useEffect(() => setSelectedNights(listing.price.totalNights), [listing.id, listing.price.totalNights]);
  const host = hosts.find((item) => item.id === listing.hostId) ?? hosts[0];
  trustItems[1].description = `${host.responseRate} response rate and ${host.responseTime}.`;
  const listingAmenities = amenities.filter((item) => listing.amenityIds.includes(item.id));
  const nearby = listings.filter((item) => item.destinationSlug === listing.destinationSlug && item.id !== listing.id);
  const locationPoints = [{ id: listing.id, label: listing.title, lat: listing.coordinates.lat, lng: listing.coordinates.lng, active: true }];
  const next = () => setPhotoIndex((index) => (index + 1) % listing.photos.length);
  const prev = () => setPhotoIndex((index) => (index - 1 + listing.photos.length) % listing.photos.length);
  const from = searchParams.get("from");
  const backHref = from === "home" ? "/" : (listing.destinationSlug ? `/catalog?destination=${encodeURIComponent(listing.destinationSlug)}` : "/");
  if (loading) return <main className="mx-auto max-w-5xl px-4 pt-4 pb-20"><LoadingBlock /></main>;
  return (
    <main className="mx-auto w-full max-w-5xl space-y-6 overflow-x-hidden px-4 pt-4 pb-20 md:px-6">
      <HeroMediaHeader
        photos={listing.photos}
        currentPhotoIndex={photoIndex}
        onNext={next}
        onPrevious={prev}
        onSelectPhoto={setPhotoIndex}
        backHref={backHref}
      />
      <div className="grid gap-6 md:grid-cols-[1fr_320px] md:items-start">
        <div className="min-w-0 space-y-6">
          <ListingIdentityBlock listing={listing} hostName={host.name} />
          <TrustHighlights items={trustItems} />
          <DescriptionSection body={listing.summary} />
          <AmenitiesSection items={listingAmenities} />
          <LocationSection placeLabel={listing.locationLabel} points={locationPoints} />
          <DateSelectionSection range={listing.availableDateRanges[0]} onNightsChange={setSelectedNights} />
          <ReviewPlaceholderSection />
          <HostSection host={host} />
          <PolicySection />
          <NearbyListingsRail items={nearby} />
          <DestinationLinksSection title="Explore nearby neighborhoods" groups={inspirationGroups} />
          <FooterLinkGroups groups={footerLinkGroups} meta={footerMeta} />
        </div>
        <BookingSummary listing={listing} selectedNights={selectedNights} />
      </div>
    </main>
  );
}
