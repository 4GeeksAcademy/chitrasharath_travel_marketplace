export interface PriceBreakdown {
  nightlyRate: number;
  totalNights: number;
  cleaningFee: number;
  serviceFee: number;
  taxes: number;
  total: number;
}

export interface ListingBadge {
  label: string;
  tone: "neutral" | "accent";
}

export interface ListingPhoto {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface AvailabilityRange {
  startDate: string;
  endDate: string;
}

export interface Listing {
  id: string;
  slug: string;
  destinationSlug: string;
  title: string;
  propertyType: string;
  locationLabel: string;
  summary: string;
  searchKeywords: string[];
  guestCount: number;
  bedroomCount: number;
  bedCount: number;
  bathCount: number;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  isSuperhost: boolean;
  isWishlistedDefault: boolean;
  photos: ListingPhoto[];
  badges: ListingBadge[];
  hostId: string;
  amenityIds: string[];
  price: PriceBreakdown;
  availableDateRanges: AvailabilityRange[];
  coordinates: {
    lat: number;
    lng: number;
  };
}
