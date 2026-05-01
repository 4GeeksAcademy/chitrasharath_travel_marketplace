import type { Listing } from "@/types/listing";

export const listings: Listing[] = [
  {
    id: "listing-miami-1",
    slug: "apartment-in-miami-design-stay",
    destinationSlug: "miami",
    title: "Apartment in Miami",
    propertyType: "Entire rental unit",
    locationLabel: "Miami, Florida",
    summary: "Bright apartment with soft daylight, clean lines, and easy beach access.",
    searchKeywords: ["miami", "apartment", "beach", "design", "bright"],
    guestCount: 2,
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    rating: 4.86,
    reviewCount: 152,
    isGuestFavorite: true,
    isSuperhost: true,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-miami-1-photo-1",
        url: "/images/listings/miami-apartment-1.jpg",
        alt: "Bright Miami apartment bedroom with white bedding and coral seating.",
        caption: "Primary bedroom view"
      },
      {
        id: "listing-miami-1-photo-2",
        url: "/images/listings/miami-apartment-1b.jpg",
        alt: "Secondary angle of the Miami apartment showing soft daylight and lounge seating.",
        caption: "Living area detail"
      }
    ],
    badges: [
      { label: "Guest favorite", tone: "neutral" },
      { label: "Superhost", tone: "accent" }
    ],
    hostId: "host-maya",
    amenityIds: ["wifi", "kitchen", "air-conditioning", "tv"],
    price: {
      nightlyRate: 228,
      totalNights: 2,
      cleaningFee: 0,
      serviceFee: 0,
      taxes: 0,
      total: 456
    },
    availableDateRanges: [
      { startDate: "2026-05-03", endDate: "2026-05-05" },
      { startDate: "2026-05-10", endDate: "2026-05-14" }
    ],
    coordinates: { lat: 25.7705, lng: -80.2001 }
  },
  {
    id: "listing-miami-2",
    slug: "apartment-in-miami-poolside-courtyard",
    destinationSlug: "miami",
    title: "Apartment in Miami",
    propertyType: "Entire condo",
    locationLabel: "Miami, Florida",
    summary: "Pool-facing condo with resort courtyard views and a compact modern layout.",
    searchKeywords: ["miami", "pool", "courtyard", "condo", "resort"],
    guestCount: 2,
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    rating: 4.82,
    reviewCount: 91,
    isGuestFavorite: false,
    isSuperhost: true,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-miami-2-photo-1",
        url: "/images/listings/miami-apartment-2.jpg",
        alt: "Miami condo overlooking a large blue pool and courtyard.",
        caption: "Pool courtyard view"
      },
      {
        id: "listing-miami-2-photo-2",
        url: "/images/listings/miami-apartment-2b.jpg",
        alt: "Alternate courtyard view with seating and pool access in Miami.",
        caption: "Courtyard lounge view"
      }
    ],
    badges: [{ label: "Superhost", tone: "accent" }],
    hostId: "host-maya",
    amenityIds: ["wifi", "pool", "air-conditioning", "parking"],
    price: {
      nightlyRate: 93,
      totalNights: 2,
      cleaningFee: 18,
      serviceFee: 10,
      taxes: 23,
      total: 237
    },
    availableDateRanges: [
      { startDate: "2026-05-04", endDate: "2026-05-06" },
      { startDate: "2026-05-18", endDate: "2026-05-21" }
    ],
    coordinates: { lat: 25.7639, lng: -80.1932 }
  },
  {
    id: "listing-philadelphia-1",
    slug: "guest-suite-in-northern-liberties",
    destinationSlug: "philadelphia",
    title: "Guest suite in Northern Liberties",
    propertyType: "Entire guest suite",
    locationLabel: "Philadelphia, Pennsylvania",
    summary: "Minimal guest suite in a walkable neighborhood with bright tiled interiors.",
    searchKeywords: ["philadelphia", "northern liberties", "guest suite", "minimal", "walkable"],
    guestCount: 2,
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    rating: 4.98,
    reviewCount: 88,
    isGuestFavorite: true,
    isSuperhost: true,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-philadelphia-1-photo-1",
        url: "/images/listings/philadelphia-suite-1.jpg",
        alt: "Bright guest suite bedroom in Philadelphia with desk and mirror.",
        caption: "Suite bedroom"
      },
      {
        id: "listing-philadelphia-1-photo-2",
        url: "/images/listings/philadelphia-suite-1b.jpg",
        alt: "Alternate view of the Philadelphia guest suite showing additional room details.",
        caption: "Suite secondary view"
      }
    ],
    badges: [
      { label: "Guest favorite", tone: "neutral" },
      { label: "Superhost", tone: "accent" }
    ],
    hostId: "host-jordan",
    amenityIds: ["wifi", "workspace", "tv", "self-check-in"],
    price: {
      nightlyRate: 119,
      totalNights: 2,
      cleaningFee: 24,
      serviceFee: 18,
      taxes: 9,
      total: 289
    },
    availableDateRanges: [
      { startDate: "2026-05-05", endDate: "2026-05-07" },
      { startDate: "2026-05-12", endDate: "2026-05-16" }
    ],
    coordinates: { lat: 39.9674, lng: -75.1353 }
  },
  {
    id: "listing-philadelphia-2",
    slug: "apartment-in-washington-square-west",
    destinationSlug: "philadelphia",
    title: "Apartment in Washington Square West",
    propertyType: "Entire rental unit",
    locationLabel: "Philadelphia, Pennsylvania",
    summary: "Warm-toned apartment with a polished bedroom setup near central Philadelphia.",
    searchKeywords: ["philadelphia", "washington square west", "apartment", "central", "design"],
    guestCount: 2,
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    rating: 4.97,
    reviewCount: 103,
    isGuestFavorite: true,
    isSuperhost: true,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-philadelphia-2-photo-1",
        url: "/images/listings/philadelphia-apartment-2.jpg",
        alt: "Warm bedroom in a Philadelphia apartment with layered bedding and neutral walls.",
        caption: "Bedroom view"
      },
      {
        id: "listing-philadelphia-2-photo-2",
        url: "/images/listings/philadelphia-apartment-2b.jpg",
        alt: "Alternate room view showing the polished interior of the Philadelphia apartment.",
        caption: "Interior detail"
      }
    ],
    badges: [
      { label: "Guest favorite", tone: "neutral" },
      { label: "Superhost", tone: "accent" }
    ],
    hostId: "host-jordan",
    amenityIds: ["wifi", "kitchen", "workspace", "air-conditioning"],
    price: {
      nightlyRate: 168,
      totalNights: 2,
      cleaningFee: 35,
      serviceFee: 32,
      taxes: 2,
      total: 405
    },
    availableDateRanges: [
      { startDate: "2026-05-06", endDate: "2026-05-08" },
      { startDate: "2026-05-20", endDate: "2026-05-23" }
    ],
    coordinates: { lat: 39.9448, lng: -75.1575 }
  },
  {
    id: "listing-pittsburgh-1",
    slug: "grant-chic-and-cozy-queen-studio",
    destinationSlug: "pittsburgh",
    title: "Grant Chic and Cozy Queen Studio",
    propertyType: "Entire condo",
    locationLabel: "Pittsburgh, Pennsylvania",
    summary: "Compact studio with a dedicated workspace, soft seating, and easy city access.",
    searchKeywords: ["pittsburgh", "studio", "queen", "cozy", "workspace"],
    guestCount: 2,
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    rating: 4.72,
    reviewCount: 197,
    isGuestFavorite: false,
    isSuperhost: false,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-pittsburgh-1-photo-1",
        url: "/images/listings/pittsburgh-studio-1.jpg",
        alt: "Compact Pittsburgh studio with seating, artwork, and a work area.",
        caption: "Studio overview"
      },
      {
        id: "listing-pittsburgh-1-photo-2",
        url: "/images/listings/pittsburgh-studio-1b.jpg",
        alt: "Alternate view of the Pittsburgh studio showing the sleeping area and layout.",
        caption: "Studio alternate angle"
      }
    ],
    badges: [],
    hostId: "host-scott",
    amenityIds: ["kitchen", "wifi", "workspace", "tv", "self-check-in", "smoke-alarm"],
    price: {
      nightlyRate: 77,
      totalNights: 2,
      cleaningFee: 12,
      serviceFee: 18,
      taxes: 8,
      total: 192
    },
    availableDateRanges: [
      { startDate: "2026-05-03", endDate: "2026-05-05" },
      { startDate: "2026-05-10", endDate: "2026-05-12" }
    ],
    coordinates: { lat: 40.4327, lng: -79.9838 }
  },
  {
    id: "listing-pittsburgh-2",
    slug: "room-in-pittsburgh-fineview",
    destinationSlug: "pittsburgh",
    title: "Room in Pittsburgh",
    propertyType: "Private room",
    locationLabel: "Fineview, Pittsburgh",
    summary: "Affordable room with neighborhood character and quick access to downtown.",
    searchKeywords: ["pittsburgh", "fineview", "room", "affordable", "downtown"],
    guestCount: 2,
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    rating: 4.57,
    reviewCount: 63,
    isGuestFavorite: true,
    isSuperhost: false,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-pittsburgh-2-photo-1",
        url: "/images/listings/pittsburgh-room-2.jpg",
        alt: "Private room in Pittsburgh with bed, nightstand, and warm lighting.",
        caption: "Private room"
      },
      {
        id: "listing-pittsburgh-2-photo-2",
        url: "/images/listings/pittsburgh-room-2b.jpg",
        alt: "Secondary angle of the Pittsburgh private room with more of the interior visible.",
        caption: "Room alternate view"
      }
    ],
    badges: [{ label: "Guest favorite", tone: "neutral" }],
    hostId: "host-scott",
    amenityIds: ["wifi", "workspace", "tv"],
    price: {
      nightlyRate: 44,
      totalNights: 2,
      cleaningFee: 15,
      serviceFee: 9,
      taxes: 4,
      total: 116
    },
    availableDateRanges: [
      { startDate: "2026-05-02", endDate: "2026-05-04" },
      { startDate: "2026-05-14", endDate: "2026-05-17" }
    ],
    coordinates: { lat: 40.4555, lng: -80.0046 }
  },
  {
    id: "listing-pittsburgh-3",
    slug: "home-in-pittsburgh-north-side",
    destinationSlug: "pittsburgh",
    title: "Home in Pittsburgh",
    propertyType: "Entire home",
    locationLabel: "North Side, Pittsburgh",
    summary: "Clean, bright home with a bigger footprint for longer stays.",
    searchKeywords: ["pittsburgh", "north side", "home", "bright", "long stay"],
    guestCount: 4,
    bedroomCount: 2,
    bedCount: 2,
    bathCount: 1,
    rating: 4.81,
    reviewCount: 52,
    isGuestFavorite: false,
    isSuperhost: false,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-pittsburgh-3-photo-1",
        url: "/images/listings/pittsburgh-home-3.jpg",
        alt: "Bright Pittsburgh home with open living room and kitchen layout.",
        caption: "Open-plan living area"
      },
      {
        id: "listing-pittsburgh-3-photo-2",
        url: "/images/listings/pittsburgh-home-3b.jpg",
        alt: "Second photo of the Pittsburgh home showing additional interior space.",
        caption: "Secondary interior view"
      }
    ],
    badges: [],
    hostId: "host-scott",
    amenityIds: ["wifi", "kitchen", "parking", "washer", "tv"],
    price: {
      nightlyRate: 109,
      totalNights: 2,
      cleaningFee: 28,
      serviceFee: 19,
      taxes: 10,
      total: 275
    },
    availableDateRanges: [
      { startDate: "2026-05-08", endDate: "2026-05-10" },
      { startDate: "2026-05-18", endDate: "2026-05-22" }
    ],
    coordinates: { lat: 40.4569, lng: -80.0113 }
  },
  {
    id: "listing-miami-3",
    slug: "coastal-condo-in-miami-beachfront-light",
    destinationSlug: "miami",
    title: "Coastal condo in Miami",
    propertyType: "Entire condo",
    locationLabel: "Miami Beach, Florida",
    summary: "Coastal-toned condo with bright interiors and easy access to the beach boardwalk.",
    searchKeywords: ["miami", "coastal", "condo", "beachfront", "bright"],
    guestCount: 3,
    bedroomCount: 1,
    bedCount: 2,
    bathCount: 1,
    rating: 4.92,
    reviewCount: 74,
    isGuestFavorite: true,
    isSuperhost: true,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-miami-3-photo-1",
        url: "/images/listings/miami-apartment-1b.jpg",
        alt: "Bright Miami condo with lounge seating and natural light.",
        caption: "Living area"
      },
      {
        id: "listing-miami-3-photo-2",
        url: "/images/listings/miami-apartment-2b.jpg",
        alt: "Miami courtyard and pool-facing exterior from the condo.",
        caption: "Courtyard view"
      }
    ],
    badges: [
      { label: "Guest favorite", tone: "neutral" },
      { label: "Superhost", tone: "accent" }
    ],
    hostId: "host-maya",
    amenityIds: ["wifi", "pool", "kitchen", "air-conditioning"],
    price: {
      nightlyRate: 141,
      totalNights: 2,
      cleaningFee: 25,
      serviceFee: 21,
      taxes: 11,
      total: 339
    },
    availableDateRanges: [
      { startDate: "2026-05-09", endDate: "2026-05-11" },
      { startDate: "2026-05-24", endDate: "2026-05-27" }
    ],
    coordinates: { lat: 25.7814, lng: -80.1308 }
  },
  {
    id: "listing-philadelphia-3",
    slug: "loft-in-center-city-philadelphia",
    destinationSlug: "philadelphia",
    title: "Loft in Center City",
    propertyType: "Entire loft",
    locationLabel: "Philadelphia, Pennsylvania",
    summary: "Warm loft with a focused workspace, modern finishes, and walkable dining nearby.",
    searchKeywords: ["philadelphia", "center city", "loft", "workspace", "modern"],
    guestCount: 2,
    bedroomCount: 1,
    bedCount: 1,
    bathCount: 1,
    rating: 4.89,
    reviewCount: 67,
    isGuestFavorite: true,
    isSuperhost: false,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-philadelphia-3-photo-1",
        url: "/images/listings/philadelphia-apartment-2b.jpg",
        alt: "Modern loft interior in Center City Philadelphia with warm lighting.",
        caption: "Loft interior"
      },
      {
        id: "listing-philadelphia-3-photo-2",
        url: "/images/listings/philadelphia-suite-1b.jpg",
        alt: "Secondary loft angle with desk and sleeping area.",
        caption: "Workspace and sleeping area"
      }
    ],
    badges: [{ label: "Guest favorite", tone: "neutral" }],
    hostId: "host-jordan",
    amenityIds: ["wifi", "workspace", "kitchen", "air-conditioning"],
    price: {
      nightlyRate: 132,
      totalNights: 2,
      cleaningFee: 22,
      serviceFee: 17,
      taxes: 13,
      total: 316
    },
    availableDateRanges: [
      { startDate: "2026-05-07", endDate: "2026-05-09" },
      { startDate: "2026-05-21", endDate: "2026-05-24" }
    ],
    coordinates: { lat: 39.9507, lng: -75.1641 }
  },
  {
    id: "listing-pittsburgh-4",
    slug: "townhome-in-pittsburgh-river-view",
    destinationSlug: "pittsburgh",
    title: "Townhome in Pittsburgh",
    propertyType: "Entire townhouse",
    locationLabel: "Pittsburgh, Pennsylvania",
    summary: "Spacious townhome with bright interiors and riverfront access for longer stays.",
    searchKeywords: ["pittsburgh", "townhome", "river view", "spacious", "family"],
    guestCount: 5,
    bedroomCount: 2,
    bedCount: 3,
    bathCount: 2,
    rating: 4.84,
    reviewCount: 41,
    isGuestFavorite: false,
    isSuperhost: true,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-pittsburgh-4-photo-1",
        url: "/images/listings/pittsburgh-home-3b.jpg",
        alt: "Pittsburgh townhome exterior on a hillside with a pitched roof.",
        caption: "Townhome exterior"
      },
      {
        id: "listing-pittsburgh-4-photo-2",
        url: "/images/listings/pittsburgh-home-3b.jpg",
        alt: "Secondary view of a Pittsburgh townhome interior.",
        caption: "Secondary interior"
      }
    ],
    badges: [{ label: "Superhost", tone: "accent" }],
    hostId: "host-scott",
    amenityIds: ["wifi", "kitchen", "washer", "parking", "tv"],
    price: {
      nightlyRate: 152,
      totalNights: 2,
      cleaningFee: 30,
      serviceFee: 24,
      taxes: 14,
      total: 372
    },
    availableDateRanges: [
      { startDate: "2026-05-11", endDate: "2026-05-13" },
      { startDate: "2026-05-25", endDate: "2026-05-28" }
    ],
    coordinates: { lat: 40.4463, lng: -79.9861 }
  },
  {
    id: "listing-miami-4",
    slug: "villa-in-miami-biscayne-breeze",
    destinationSlug: "miami",
    title: "Villa in Miami",
    propertyType: "Entire villa",
    locationLabel: "Miami, Florida",
    summary: "Waterfront-style villa with breezy interiors and a large social living area.",
    searchKeywords: ["miami", "villa", "waterfront", "biscayne", "breeze"],
    guestCount: 4,
    bedroomCount: 2,
    bedCount: 2,
    bathCount: 2,
    rating: 4.9,
    reviewCount: 58,
    isGuestFavorite: true,
    isSuperhost: false,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-miami-4-photo-1",
        url: "/images/listings/miami-apartment-2b.jpg",
        alt: "Modern Miami home exterior with bright sky and landscaped yard.",
        caption: "Exterior view"
      },
      {
        id: "listing-miami-4-photo-2",
        url: "/images/listings/miami-apartment-2.jpg",
        alt: "Miami villa facade near calm blue waterfront.",
        caption: "Waterfront facade"
      }
    ],
    badges: [{ label: "Guest favorite", tone: "neutral" }],
    hostId: "host-maya",
    amenityIds: ["wifi", "kitchen", "pool", "air-conditioning", "parking"],
    price: {
      nightlyRate: 184,
      totalNights: 2,
      cleaningFee: 32,
      serviceFee: 26,
      taxes: 19,
      total: 445
    },
    availableDateRanges: [
      { startDate: "2026-05-15", endDate: "2026-05-17" },
      { startDate: "2026-05-29", endDate: "2026-06-01" }
    ],
    coordinates: { lat: 25.7892, lng: -80.1581 }
  },
  {
    id: "listing-philadelphia-4",
    slug: "townhouse-in-philadelphia-old-city",
    destinationSlug: "philadelphia",
    title: "Townhouse in Philadelphia",
    propertyType: "Entire townhouse",
    locationLabel: "Old City, Philadelphia",
    summary: "Classic rowhome-style stay with updated finishes and a central neighborhood feel.",
    searchKeywords: ["philadelphia", "old city", "townhouse", "rowhome", "classic"],
    guestCount: 4,
    bedroomCount: 2,
    bedCount: 2,
    bathCount: 2,
    rating: 4.87,
    reviewCount: 49,
    isGuestFavorite: false,
    isSuperhost: true,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-philadelphia-4-photo-1",
        url: "/images/listings/philadelphia-suite-1b.jpg",
        alt: "Philadelphia townhouse block with warm neutral facades.",
        caption: "Townhouse exterior"
      },
      {
        id: "listing-philadelphia-4-photo-2",
        url: "/images/listings/philadelphia-suite-1.jpg",
        alt: "Historic Philadelphia row home facades at golden hour.",
        caption: "Historic street view"
      }
    ],
    badges: [{ label: "Superhost", tone: "accent" }],
    hostId: "host-jordan",
    amenityIds: ["wifi", "kitchen", "workspace", "self-check-in"],
    price: {
      nightlyRate: 146,
      totalNights: 2,
      cleaningFee: 24,
      serviceFee: 22,
      taxes: 12,
      total: 350
    },
    availableDateRanges: [
      { startDate: "2026-05-13", endDate: "2026-05-15" },
      { startDate: "2026-05-27", endDate: "2026-05-30" }
    ],
    coordinates: { lat: 39.9527, lng: -75.1456 }
  },
  {
    id: "listing-pittsburgh-5",
    slug: "loft-home-in-pittsburgh-strip-district",
    destinationSlug: "pittsburgh",
    title: "Loft home in Pittsburgh",
    propertyType: "Entire loft",
    locationLabel: "Strip District, Pittsburgh",
    summary: "Open loft layout with modern finishes and quick access to local markets.",
    searchKeywords: ["pittsburgh", "loft", "strip district", "modern", "open"],
    guestCount: 3,
    bedroomCount: 1,
    bedCount: 2,
    bathCount: 1,
    rating: 4.79,
    reviewCount: 37,
    isGuestFavorite: true,
    isSuperhost: false,
    isWishlistedDefault: false,
    photos: [
      {
        id: "listing-pittsburgh-5-photo-1",
        url: "/images/listings/pittsburgh-room-2b.jpg",
        alt: "Pittsburgh loft-style home exterior with a sloped roofline.",
        caption: "Contemporary exterior"
      },
      {
        id: "listing-pittsburgh-5-photo-2",
        url: "/images/listings/pittsburgh-room-2.jpg",
        alt: "Pittsburgh residential street with warm-toned home facades.",
        caption: "Neighborhood homes"
      }
    ],
    badges: [{ label: "Guest favorite", tone: "neutral" }],
    hostId: "host-scott",
    amenityIds: ["wifi", "kitchen", "tv", "air-conditioning"],
    price: {
      nightlyRate: 124,
      totalNights: 2,
      cleaningFee: 20,
      serviceFee: 15,
      taxes: 9,
      total: 292
    },
    availableDateRanges: [
      { startDate: "2026-05-16", endDate: "2026-05-18" },
      { startDate: "2026-05-30", endDate: "2026-06-02" }
    ],
    coordinates: { lat: 40.4543, lng: -79.9856 }
  }
];
