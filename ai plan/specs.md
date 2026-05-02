# Airbnb-Style App Spec

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- App Router

## Project Setup

1. Create the project with `npx create-next-app@latest airbnb-clone --ts --tailwind --app --eslint --use-npm`.
2. When prompted about a `src/` directory, choose `No` so the project uses top-level `/app`, `/components`, `/types`, and `/data`.
3. Use the App Router for all routes.
4. Keep reusable UI in `/components`.
5. Keep route files in `/app`.
6. Keep shared TypeScript interfaces and type aliases in `/types`.
7. Keep all hardcoded placeholder datasets in `/data`.

## Folder Structure

```text
/app
  /page.tsx
  /catalog/page.tsx
  /rooms/[id]/page.tsx
  /layout.tsx
  /globals.css
/components
  /search
  /navigation
  /listing
  /detail
  /shared
/data
  /destinations.ts
  /hosts.ts
  /amenities.ts
  /listings.ts
  /home-sections.ts
/types
  /destination.ts
  /listing.ts
  /search.ts
  /host.ts
  /amenity.ts
```

## Constraints

1. Use only Tailwind CSS for styling.
2. All UI components must be custom-built.
3. Do not use any pre-built UI component library such as shadcn, MUI, Ant Design, or Chakra UI.
4. There is no backend.
5. All placeholder content must be hardcoded in TypeScript.
6. Do not fetch data from external APIs or a database.
7. All components must be implemented as `const` functional components. Do not use class components.
8. No component should exceed `80` lines of combined JSX and logic. If it does, split it into smaller components.

## Objective

Build an Airbnb-style application that feels like a single-page app while using Next.js App Router routes and client-side navigation between screens.

The primary user is a travel-focused guest who wants to quickly discover places to stay, compare options in a destination, and decide whether a specific property fits their trip. They are using the platform to move from broad exploration to confident booking intent: first scanning destination-led recommendations, then reviewing a catalog of available stays, and finally evaluating one room in detail through photos, amenities, pricing, host credibility, and stay information.

The app should include 3 pages:

1. `Home / Landing Page`
   - This is the first screen.
   - It should surface listings and discovery content at a quick glance.
   - The top control should be a search input, not a button.
   - The search input must use the placeholder `Enter destination`.

2. `Catalog Page`
   - This page loads after the user enters a destination on the home page.
   - It should display listings related to the destination entered.
   - It should prioritize fast scanning of multiple properties.

3. `Room Detail Page`
   - This page opens when a user selects a property from the catalog or home page.
   - It should show deeper information for one property, including amenities, host details, pricing, and stay details.

## Responsive Design

- Design mobile-first for a `375px` viewport.
- Add desktop adjustments starting at `768px`.
- Mobile is the primary layout target and should be considered the default.
- Desktop should expand and reorganize the same content rather than introducing different flows.

### Mobile Rules at 375px

- Use a single-column layout.
- Use full-width stacked sections with consistent horizontal padding.
- Keep primary actions within thumb reach.
- Use horizontal rails for discovery sections on the home page.
- Use a single-column listing feed on the catalog page.
- Use a stacked long-form detail layout on the room detail page.

### Desktop Rules at 768px and Up

- Increase content width and spacing.
- Allow listing sections to show more cards per row or viewport.
- Allow the catalog page to expand into a wider browsing layout.
- Allow the room detail page to separate primary content and booking content into distinct columns where useful.
- Preserve the same component hierarchy and page order established in mobile.

## Visual Design Direction

The design should feel like premium hospitality software: clean, calm, warm, and highly legible. The screenshots suggest a restrained layout with rounded surfaces, soft shadows, light neutral backgrounds, and a coral accent reserved for primary actions and active navigation states.

### Design Principles

- Keep the overall interface bright and minimal with generous white space.
- Use warmth through neutral tones rather than heavy decoration.
- Let photography carry most of the emotional tone.
- Keep all controls large, rounded, and touch-friendly on mobile.
- Reserve strong accent color for one primary action at a time.

### Color System

- `canvas`: `#FAF7F2`
- `surface`: `#FFFFFF`
- `surfaceMuted`: `#F3F1ED`
- `borderSoft`: `#E8E4DE`
- `textPrimary`: `#1F1F1B`
- `textSecondary`: `#6B6A66`
- `textMuted`: `#908D87`
- `accentPrimary`: `#FF385C`
- `accentHover`: `#E31C5F`
- `accentSoft`: `#FFF1F4`
- `mapWater`: `#BFE5F2`
- `successSoft`: `#EAF7EE`

### Color Usage Rules

- Use `canvas` as the default page background.
- Use `surface` for cards, search input, pills, and sticky navigation.
- Use `borderSoft` for dividers, card outlines, and subtle control boundaries.
- Use `textPrimary` for headings, prices, and key metadata.
- Use `textSecondary` for supporting labels and footer navigation.
- Use `accentPrimary` for the reserve button, active bottom tab state, focus rings, and small highlight moments.
- Avoid filling large areas with the accent color.

### Typography

- Primary font family: `Plus Jakarta Sans`
- Fallback stack: `ui-sans-serif, system-ui, sans-serif`
- Weight usage:
  - `500` for navigation labels and secondary actions
  - `600` for section headers, card titles, and input text
  - `700` for pricing emphasis and major page headings

### Type Scale

- `Display`: `32px / 38px / 700` for desktop hero-style headings only
- `Heading 1`: `26px / 32px / 700` for room detail titles
- `Heading 2`: `22px / 28px / 700` for major section titles
- `Heading 3`: `18px / 24px / 700` for section headers such as `Popular homes in Miami`
- `Body`: `15px / 22px / 500` for default descriptive text
- `Body Strong`: `15px / 22px / 600` for pricing and important metadata
- `Meta`: `13px / 18px / 500` for subtitles, dates, and footer items
- `Label`: `12px / 16px / 600` for chips, badges, and compact navigation

### Spacing and Surface Tokens

- Mobile page padding: `16px`
- Desktop page padding starting at `768px`: `24px`
- Section gap on mobile: `28px`
- Section gap on desktop: `36px`
- Card gap inside rails: `12px`
- Search input height: `56px`
- Bottom tab bar height: `72px`
- Pill radius: `9999px`
- Card image radius: `22px`
- Surface radius for banners and floating panels: `18px`
- Hairline border: `1px solid #E8E4DE`
- Primary shadow: `0 10px 30px rgba(31, 31, 27, 0.08)`
- Floating chip shadow: `0 6px 18px rgba(31, 31, 27, 0.10)`

### Iconography and Imagery

- Icons should be simple custom outline SVG icons with consistent stroke weight.
- Use circular icon buttons for `back`, `share`, `favorite`, and compact trailing actions.
- Listing photography should be bright, daylight-driven, and slightly airy rather than heavily saturated.
- Card images should maintain a consistent rounded rectangle treatment.
- Wishlist controls should use a translucent white circular backing over imagery for contrast.

### Motion and Interaction

- Use short, understated transitions in the `180ms` to `220ms` range.
- Apply subtle hover lift on desktop cards and buttons only.
- Preserve immediate touch feedback on mobile with opacity or shadow changes.
- Horizontal listing rails should scroll naturally with soft snap behavior.
- Focus states should use a visible coral ring and not rely on color alone.

## Page-by-Page Design

### Home / Landing Page Visual Design

- Use a bright `canvas` background with a slightly elevated white search bar at the top.
- The `DestinationSearchInput` should feel like the main entry point and visually float above the page through shadow and full pill radius.
- The category row should sit directly below the search input with evenly spaced items, small icon-led labels, and a clean active state.
- Section headers should be bold and compact, with a circular trailing action button aligned to the right.
- Horizontal property cards should feel tactile and image-led with minimal text clutter.
- The `Prices include all fees` banner should appear as a floating white pill layered over content rather than as a full-width strip.
- The bottom navigation should sit on a white surface with a thin top border and coral active state.
- Footer groups should remain light and text-driven, with generous vertical spacing and soft dividers.

### Catalog Page Visual Design

- Keep the top of the page anchored by a shallow map area or map preview strip.
- Add a compact results header row below the map that shows filtered property count and pricing notice.
- On mobile, center both the results count and fee banner.
- On desktop, left-align the results count and right-align the fee banner.
- Property cards should run full width in a single-column stack on mobile, with large imagery and compact metadata blocks.
- Use consistent vertical rhythm between cards to make long scrolling feel calm rather than dense.
- Keep the white surface and neutral text palette dominant so the listing photography remains the focal point.

### Room Detail Page Visual Design

- The hero image should span the top width of the mobile layout with floating circular utility actions.
- The listing title block should feel more editorial than the discovery pages, with larger title text and tighter supporting metadata.
- The reservation area should be clearly separated through spacing, stronger price emphasis, and a solid coral `Reserve` button.
- Content sections such as amenities, description, location, and policies should use clean stacked dividers rather than boxed cards unless a section needs stronger emphasis.
- The host summary can use a soft inset panel to break up the long-form content.
- Nearby listings should return to the discovery card pattern used elsewhere in the app for consistency.

## Desktop Adaptation

### Home / Landing Page at 768px and Up

- Constrain the main content to a centered layout with wider gutters.
- Allow the search input to stay prominent but cap its width so it does not feel stretched.
- Expand listing rails so more cards are visible without losing the horizontal-scroll behavior.
- Convert footer link groups into multiple columns.

### Catalog Page at 768px and Up

- Increase outer padding and card widths.
- Keep a comfortable reading measure for listing metadata.
- Keep the map as a top section while maintaining a single-column results flow.
- Render footer links at the bottom of the page in desktop viewport.

### Room Detail Page at 768px and Up

- Increase hero media height and overall spacing.
- Split the main content and booking summary into two columns when space allows.
- Keep the booking summary sticky within the right column on larger desktop widths.
- Preserve the same section order as mobile so the information architecture stays consistent.

## Core Page Requirements

### Home / Landing Page

- Top search input with placeholder `Enter destination`.
- Use `useState` to track the typed value in the search input.
- Filter the visible listing cards in real time as the user types.
- Use `useEffect` with `setTimeout` to simulate loading listing data and show a loading indicator while the data is not yet available.
- Category navigation row for discovery modes such as homes, experiences, and services.
- Repeated listing discovery sections with headings and horizontally scrollable cards.
- The home page should support a filtered listing results area driven by the destination search input.
- The filtered listing results area must render as a single-column card grid on mobile and expand to multiple columns on desktop.
- Discovery sections may remain horizontally scrollable when no active search filter is being applied.
- Support for fee-related promotional messaging such as `Prices include all fees`.
- Bottom mobile navigation.
- Footer link groups at the bottom of the page.

### Catalog Page

- Destination-driven listing results.
- A top visual header area that can support map context.
- Fee banner or promotional notice near the top of results.
- A filtered-results count label near the top of results.
- A vertical feed of property cards.
- Reuse the shared listing-card foundation for catalog cards.
- Favorite or wishlist control on listing cards.
- Include a back button at the top of the page.
- Show footer link groups at the bottom in desktop viewport only.
- Bottom mobile navigation.

### Room Detail Page

- Hero media area at the top.
- Use `useEffect` with `setTimeout` to simulate loading the selected property or listing data from the URL `id` parameter.
- Show a loading state while the property or listing data is not yet available.
- Use `useState` to track the currently displayed property photos.
- Provide previous and next photo navigation on mobile for thumb-based browsing and clickable previous and next controls on desktop.
- Listing title and core property metadata.
- Pricing and reservation summary.
- Host summary.
- Description section with expandable content.
- Amenities section.
- Location section with map support.
- Stay date or availability section.
- Policies and additional supporting information.
- Nearby or related listings section.
- Footer link groups.

## Page Composition

### Home / Landing Page Composition

1. `DestinationSearchInput`
2. `PrimaryCategoryTabs`
3. `ListingRailSection` for popular homes
4. Additional `ListingRailSection` blocks for other destinations or themes
5. `DestinationLinksSection`
6. `FooterLinkGroups`
7. `BottomTabBar`

### Catalog Page Composition

1. `MapHeader`
2. Results summary row (filtered property count + `FeeBanner`)
3. `ListingFeed`
4. `FooterLinkGroups` (desktop only)
5. `BottomTabBar`

### Room Detail Page Composition

1. `HeroMediaHeader`
2. `ListingIdentityBlock`
3. `TrustHighlights`
4. `DescriptionSection`
5. `AmenitiesSection`
6. `LocationSection`
7. `DateSelectionSection`
8. `ReviewPlaceholderSection` or review summary
9. `HostSection`
10. `PolicySection`
11. `NearbyListingsRail`
12. `BookingSummary` (desktop side column, mobile follows detail sections)
13. `DestinationLinksSection` or supporting area links
14. `FooterLinkGroups`

## Component Definitions

### `DestinationSearchInput`

- Purpose: primary destination entry point on the home page
- Required properties:
  - `placeholder`
  - `value`
  - `isFocused`
  - `onChange`
  - `onFocus`
  - `onBlur`
  - `onEnter` (optional)
  - `leftSlot` (optional)
- Rules:
  - Must render as a full-width pill input at the top of the home page
  - Must use the placeholder `Enter destination`
  - Must behave like a form input, not like a button
  - Must be implemented as a controlled input using `useState`

### `PrimaryCategoryTabs`

- Purpose: discovery mode navigation directly below the search input
- Required properties:
  - `items`
  - `label`
  - `icon`
  - `isActive`
  - `badgeLabel`
- Rules:
  - Should support tabs like `Homes`, `Experiences`, and `Services`
  - Each tab should pair an icon with a label
  - Optional `NEW` badges should be supported

### `ListingRailSection`

- Purpose: reusable home page content section for horizontally scrollable listings
- Required properties:
  - `title`
  - `subtitle`
  - `items`
  - `source`
- Rules:
  - Header should align title on the left
  - On desktop, include inline left and right chevron buttons that scroll the rail smoothly
  - Each chevron should only be visible when scrolling in that direction is possible
  - Content should scroll horizontally on mobile
  - This pattern should be reused for destination and theme-based discovery groups

### `ListingCardCompact`

- Purpose: compact property card used inside horizontal rails
- Required properties:
  - `listing`
  - `source` (optional)
- Rules:
  - Should reuse the shared `ListingCard` in compact mode

### `FeeBanner`

- Purpose: promotional or informational pricing notice
- Required properties:
  - `text`
- Rules:
  - Must support the message `Prices include all fees`
  - Should render as a pill-style surface that stands out from listing content

### `MapHeader`

- Purpose: top visual area of the catalog page
- Required properties:
  - `locationLabel`
  - `points`
  - `fullWidth` (optional)
- Rules:
  - Should support a shallow map region rather than a full-screen map
  - Must visually anchor the catalog page before the listing feed begins

### `ListingFeed`

- Purpose: primary catalog results container
- Required properties:
  - `items`
- Rules:
  - Must render as a single-column vertical feed on mobile
  - Should stack full-width listing cards with consistent spacing
  - Should reuse the same base property card component used on the home page

### `ListingCardFeed`

- Purpose: full-width listing card used in the catalog page
- Required properties:
  - `listing`
- Rules:
  - Should reuse the shared `ListingCard` with catalog source context

### `BottomTabBar`

- Purpose: primary mobile navigation
- Required properties:
  - None (uses internal static nav items)
- Rules:
  - Must support at least `Explore`, `Wishlists`, and `Log in`
  - Should remain fixed at the bottom on mobile discovery screens

### `HeroMediaHeader`

- Purpose: lead media section on the room detail page
- Required properties:
  - `photos`
  - `currentPhotoIndex`
  - `onPrevious`
  - `onNext`
  - `onSelectPhoto`
  - `backHref` (optional)
- Rules:
  - Must support floating circular actions for `back`, `share`, and `favorite`
  - Must appear before all room detail content
  - Must support stepping through a listing photo array
  - Must support over-image chevron controls for previous and next photo navigation
  - Should support a thumbnail strip for direct photo selection

### `ListingIdentityBlock`

- Purpose: top metadata block for a single property
- Required properties:
  - `listing`
  - `hostName`

### `BookingSummary`

- Purpose: pricing and reservation call-to-action block
- Required properties:
  - `listing`
  - `selectedNights` (optional)
- Rules:
  - Must include a primary reservation action
  - Must clearly separate pricing information from long-form descriptive content
  - Must recalculate total when selected nights change
  - Must show total available nights from listing availability ranges
  - Must label selected nights explicitly as `selected`

### `TrustHighlights`

- Purpose: concise host or property confidence signals
- Required properties:
  - `items`

### `DescriptionSection`

- Purpose: long-form listing description
- Required properties:
  - `body`
- Rules:
  - Must support collapsed and expanded content states
  - `Show more`/`Show less` controls should appear only when body text exceeds preview length

### `AmenitiesSection`

- Purpose: amenity overview
- Required properties:
  - `items`
- Rules:
  - Must support a short visible list and a secondary action to reveal more amenities
  - `Show all amenities` control should appear only when amenities exceed the collapsed count

### `LocationSection`

- Purpose: location context for a listing
- Required properties:
  - `placeLabel`
  - `points`
- Rules:
  - Must support a map preview
  - Must support exact-location disclosure text
  - On room detail, map should render a single marker for the currently viewed property

### `DateSelectionSection`

- Purpose: stay date and availability display
- Required properties:
  - `range`
  - `ranges` (optional)
  - `onNightsChange`
- Rules:
  - Must support one or more availability windows
  - If multiple windows exist, must provide a window selector before date inputs
  - Must provide interactive start and end date inputs
  - Start and end date limits must stay within the active availability window
  - End date must be at least one day after start date
  - Must emit selected night count to pricing components
  - Must display total available nights derived from listing availability ranges

### `ReviewPlaceholderSection`

- Purpose: no-review or review-summary state
- Required properties:
  - None

### `HostSection`

- Purpose: host profile and contact summary
- Required properties:
  - `host`

### `PolicySection`

- Purpose: operational rules and booking policies
- Required properties:
  - None

### `NearbyListingsRail`

- Purpose: related properties at the end of the room detail page
- Required properties:
  - `items`

### `DestinationLinksSection`

- Purpose: supporting discovery links for destinations or themes
- Required properties:
  - `title`
  - `groups`

### `FooterLinkGroups`

- Purpose: shared footer navigation and legal information
- Required properties:
  - `groups`
  - `meta`

## Reusable UI Components

- `DestinationSearchInput`
- `PrimaryCategoryTabs`
- `ListingCardCompact`
- `ListingCardFeed`
- `ListingRailSection`
- `FeeBanner`
- `BottomTabBar`
- `HeroMediaHeader`
- `BookingSummary`
- `AmenitiesSection`
- `LocationSection`
- `HostSection`
- `FooterLinkGroups`

## Layout Relationships

- The app should be modeled as a single-column mobile flow first.
- The home page should use stacked sections with horizontal listing rails.
- The catalog page should switch to a continuous vertical listing feed.
- The room detail page should switch to a long-form stacked detail layout.
- Listing media should always appear before listing metadata.
- Wishlist or favorite controls should be overlaid on listing imagery rather than placed in the text area.
- Section headers should consistently use left-aligned titles with right-aligned compact actions where applicable.
- The bottom tab bar should be treated as fixed mobile navigation rather than standard page content.
- Footer link groups should be treated as a terminal section where rendered (home and room detail on all viewports, catalog on desktop).
- Desktop layouts at `768px` and above should preserve the same content order while increasing width, spacing, and column opportunities.
- Any searchable listing result grids should be single-column on mobile and expand into multiple columns on desktop.

## Data Requirements

- All listings, hosts, destinations, amenities, prices, ratings, and booking details must be hardcoded.
- All hardcoded data must be typed with interfaces from `/types`.
- All hardcoded datasets should live in `/data`.
- The app should be implemented with placeholder data that is easy to swap later if a backend is added.

## Data Schema

```ts
export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  country: string;
  shortDescription: string;
  searchLabel: string;
  searchKeywords: string[];
  heroTitle: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface HostMetric {
  label: string;
  value: string;
}

export interface Host {
  id: string;
  name: string;
  avatarUrl: string;
  isSuperhost: boolean;
  rating: number;
  yearsHosting: number;
  responseRate: string;
  responseTime: string;
  bio: string;
  traits: string[];
  stats: HostMetric[];
}

export interface Amenity {
  id: string;
  label: string;
  iconKey: string;
  category: "essentials" | "workspace" | "kitchen" | "safety" | "outdoor";
}

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

export interface HomeSection {
  id: string;
  title: string;
  subtitle?: string;
  destinationSlug?: string;
  listingIds: string[];
}

export interface InspirationLink {
  name: string;
  subLabel: string;
}

export interface InspirationGroup {
  id: string;
  label: string;
  links: InspirationLink[];
}
```

## Hardcoded Sample Data

These datasets should be implemented as TypeScript exports and used by the home page, catalog page, and room detail page until a backend exists.

### `destinations.ts`

```ts
import type { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    id: "dest-miami",
    slug: "miami",
    name: "Miami",
    region: "Florida",
    country: "United States",
    shortDescription: "Popular homes and resort-style stays near the water.",
    searchLabel: "Miami, Florida",
    searchKeywords: ["miami", "florida", "beach", "pool", "resort"],
    heroTitle: "Popular homes in Miami",
    coordinates: { lat: 25.7617, lng: -80.1918 }
  },
  {
    id: "dest-philadelphia",
    slug: "philadelphia",
    name: "Philadelphia",
    region: "Pennsylvania",
    country: "United States",
    shortDescription: "Historic neighborhoods, guest suites, and apartment rentals.",
    searchLabel: "Philadelphia, Pennsylvania",
    searchKeywords: ["philadelphia", "pennsylvania", "historic", "city", "apartment"],
    heroTitle: "Stay in Philadelphia",
    coordinates: { lat: 39.9526, lng: -75.1652 }
  },
  {
    id: "dest-pittsburgh",
    slug: "pittsburgh",
    name: "Pittsburgh",
    region: "Pennsylvania",
    country: "United States",
    shortDescription: "Studios, guest rooms, and city stays near downtown.",
    searchLabel: "Pittsburgh, Pennsylvania",
    searchKeywords: ["pittsburgh", "pennsylvania", "studio", "downtown", "city"],
    heroTitle: "Stays in Pittsburgh",
    coordinates: { lat: 40.4406, lng: -79.9959 }
  }
];
```

### `hosts.ts`

```ts
import type { Host } from "@/types/host";

export const hosts: Host[] = [
  {
    id: "host-scott",
    name: "Scott",
    avatarUrl: "/images/hosts/scott.jpg",
    isSuperhost: false,
    rating: 4.72,
    yearsHosting: 2,
    responseRate: "100%",
    responseTime: "within an hour",
    bio: "Lives in Mount Oliver, Pennsylvania. Calm and collective host style.",
    traits: ["Lives in Mount Oliver, Pennsylvania", "Calm and collective"],
    stats: [
      { label: "Reviews", value: "197" },
      { label: "Rating", value: "4.72" },
      { label: "Years hosting", value: "2" }
    ]
  },
  {
    id: "host-maya",
    name: "Maya",
    avatarUrl: "/images/hosts/maya.jpg",
    isSuperhost: true,
    rating: 4.96,
    yearsHosting: 4,
    responseRate: "99%",
    responseTime: "within an hour",
    bio: "Miami-based host focused on bright spaces and easy check-in.",
    traits: ["Superhost", "Self check-in"],
    stats: [
      { label: "Reviews", value: "241" },
      { label: "Rating", value: "4.96" },
      { label: "Years hosting", value: "4" }
    ]
  },
  {
    id: "host-jordan",
    name: "Jordan",
    avatarUrl: "/images/hosts/jordan.jpg",
    isSuperhost: true,
    rating: 4.91,
    yearsHosting: 3,
    responseRate: "98%",
    responseTime: "within a few hours",
    bio: "Philadelphia host with a focus on central neighborhoods and design-forward stays.",
    traits: ["Superhost", "Great communication"],
    stats: [
      { label: "Reviews", value: "118" },
      { label: "Rating", value: "4.91" },
      { label: "Years hosting", value: "3" }
    ]
  }
];
```

### `amenities.ts`

```ts
import type { Amenity } from "@/types/amenity";

export const amenities: Amenity[] = [
  { id: "kitchen", label: "Kitchen", iconKey: "chef-hat", category: "kitchen" },
  { id: "wifi", label: "WiFi", iconKey: "wifi", category: "essentials" },
  { id: "workspace", label: "Dedicated workspace", iconKey: "desk", category: "workspace" },
  { id: "tv", label: "TV", iconKey: "tv", category: "essentials" },
  { id: "self-check-in", label: "Self check-in", iconKey: "door", category: "essentials" },
  { id: "pool", label: "Pool", iconKey: "waves", category: "outdoor" },
  { id: "parking", label: "Free parking", iconKey: "car", category: "essentials" },
  { id: "washer", label: "Washer", iconKey: "washer", category: "essentials" },
  { id: "air-conditioning", label: "Air conditioning", iconKey: "snowflake", category: "essentials" },
  { id: "smoke-alarm", label: "Smoke alarm", iconKey: "shield", category: "safety" }
];
```

### `listings.ts`

```ts
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
    badges: [{ label: "Guest favorite", tone: "neutral" }],
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
    badges: [],
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
    badges: [{ label: "Guest favorite", tone: "neutral" }],
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
    badges: [{ label: "Guest favorite", tone: "neutral" }],
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
  }
];
```

### `home-sections.ts`

```ts
import type { HomeSection, InspirationGroup } from "@/types/search";

export const homeSections: HomeSection[] = [
  {
    id: "popular-homes-miami",
    title: "Popular homes in Miami",
    destinationSlug: "miami",
    listingIds: [
      "listing-miami-1",
      "listing-miami-2"
    ]
  },
  {
    id: "featured-hotels-miami",
    title: "Featured hotels in Miami",
    subtitle: "A collection of independent and handpicked hotels",
    destinationSlug: "miami",
    listingIds: [
      "listing-miami-2",
      "listing-miami-1"
    ]
  },
  {
    id: "stay-in-philadelphia",
    title: "Stay in Philadelphia",
    destinationSlug: "philadelphia",
    listingIds: [
      "listing-philadelphia-1",
      "listing-philadelphia-2"
    ]
  }
];

export const inspirationGroups: InspirationGroup[] = [
  {
    id: "popular",
    label: "Popular",
    links: [
      { name: "Kauai", subLabel: "Condo rentals" },
      { name: "Charlotte", subLabel: "Monthly Rentals" },
      { name: "Gulf Shores", subLabel: "Condo rentals" },
      { name: "San Diego", subLabel: "Rentals with a beach view" },
      { name: "Raleigh", subLabel: "Apartment rentals" },
      { name: "Portland", subLabel: "Villa rentals" },
      { name: "Minneapolis", subLabel: "Monthly Rentals" }
    ]
  }
];
```

## Data Usage Rules

- The home page should render discovery sections by mapping over `homeSections` and resolving each `listingId` against `listings`.
- The home page search should filter listings in real time using destination names, destination search labels, listing titles, location labels, and `searchKeywords`.
- The catalog page should read the chosen destination and filter `listings` by `destinationSlug`.
- The room detail page should load one listing by `id`, then join related `host`, `destination`, `amenities`, and `photos` data from the other datasets.
- The room detail gallery should initialize from `listing.photos` and track the currently visible photo by index in component state.
- If the search input submits `Pittsburgh`, the app should route to `/catalog?destination=pittsburgh`.
- If no exact destination match exists, the catalog page can fall back to an empty state while preserving the search input value.

## Asset Reference Links

Use these links as the source of truth for asset selection while the project has no backend or CMS. For implementation, download and optimize the selected image assets into `/public/images` and copy SVG icon paths into custom icon components inside `/components/icons`.

### Icon Source Links

Primary UI icons should use Heroicons as the reference source:

- Heroicons library: `https://heroicons.com/`
- Heroicons GitHub repository: `https://github.com/tailwindlabs/heroicons`

#### Home / Landing Page Icons

- Search input icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/magnifying-glass.svg`
- Homes category icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/home-modern.svg`
- Experiences category icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/sparkles.svg`
- Services category icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/briefcase.svg`
- Section trailing action icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/arrow-right.svg`
- Listing favorite icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/heart.svg`
- Fee banner icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/tag.svg`
- Bottom nav `Explore` icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/home-modern.svg`
- Bottom nav `Wishlists` icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/heart.svg`
- Bottom nav `Log in` icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/user-circle.svg`

#### Catalog Page Icons

- Map header icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/map.svg`
- Listing location icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/map-pin.svg`
- Listing rating icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/star.svg`
- Listing favorite icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/heart.svg`

#### Room Detail Page Icons

- Back action icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/arrow-left.svg`
- Share action icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/share.svg`
- Favorite action icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/heart.svg`
- Date selection icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/calendar-days.svg`
- Host icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/user-circle.svg`
- Safety and trust icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/shield-check.svg`
- Amenities `WiFi` icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/wifi.svg`
- Amenities `TV` icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/tv.svg`
- Location icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/map-pin.svg`
- Expand or reveal-more icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/chevron-down.svg`
- Help or policy info icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/question-mark-circle.svg`

#### Footer and Locale Icons

- Locale icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/globe-alt.svg`
- Currency icon: `https://github.com/tailwindlabs/heroicons/blob/master/src/24/outline/currency-dollar.svg`
- Facebook icon: `https://cdn.simpleicons.org/facebook`
- X icon: `https://cdn.simpleicons.org/x`
- Instagram icon: `https://cdn.simpleicons.org/instagram`

### Image Source Links

All listing photography should be sourced from bright, hospitality-style interior or property photography. The following links are recommended source references for the hardcoded listings already defined in the sample data.

#### Home and Catalog Listing Images

- `miami-apartment-1`: `https://unsplash.com/photos/a-bedroom-with-a-bed-and-a-chair-in-it-gIA1bMAkIPM`
- `miami-apartment-2`: `https://unsplash.com/photos/apartment-buildings-with-pools-and-a-courtyard-CbJ20jBIkDA`
- `miami-gallery-alt`: `https://unsplash.com/photos/courtyard-with-pool-ornate-door-and-chairs-GtlrYb2cPp4`
- `philadelphia-suite-1`: `https://unsplash.com/photos/a-bedroom-with-a-bed-desk-and-mirror-uMhgGJYGUTQ`
- `philadelphia-apartment-2`: `https://unsplash.com/photos/a-bedroom-with-a-white-bed-and-a-chair-rHsvUWyw4CI`
- `philadelphia-gallery-alt`: `https://unsplash.com/photos/a-room-with-two-beds-p83ZKA2qltA`
- `pittsburgh-studio-1`: `https://unsplash.com/photos/a-living-room-with-a-couch-chair-and-a-plant-EHzBMgjMvd0`
- `pittsburgh-room-2`: `https://unsplash.com/photos/a-bedroom-with-a-bed-nightstand-and-lamp-W6fAJQbu2U4`
- `pittsburgh-home-3`: `https://unsplash.com/photos/an-aerial-view-of-a-living-room-and-kitchen-LPUTPUyZr68`

#### Room Detail Gallery Add-On Images

- `room-detail-gallery-1`: `https://unsplash.com/photos/a-bedroom-with-a-bed-nightstand-and-window-uOi4Rxb1KdE`
- `room-detail-gallery-2`: `https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-large-window-ajSbUwySw3A`
- `room-detail-gallery-3`: `https://unsplash.com/photos/a-living-room-with-a-large-window-GF2dIj6sZeE`
- `room-detail-gallery-4`: `https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-wooden-floor-12z7tn1mCIg`

### Map Reference Links

Use these links as the geographic reference for catalog map previews and room detail location sections. Static map screenshots can be created from these locations and saved locally.

- Miami reference map: `https://www.openstreetmap.org/?mlat=25.7617&mlon=-80.1918#map=12/25.7617/-80.1918`
- Philadelphia reference map: `https://www.openstreetmap.org/?mlat=39.9526&mlon=-75.1652#map=12/39.9526/-75.1652`
- Pittsburgh reference map: `https://www.openstreetmap.org/?mlat=40.4406&mlon=-79.9959#map=12/40.4406/-79.9959`

### Asset Implementation Notes

- Prefer local optimized assets in `/public/images` over hotlinking external photography in production.
- If remote images are used during prototyping, configure Next.js image remote patterns for `images.unsplash.com`.
- Keep icon usage consistent by wrapping all copied SVGs in custom reusable components.
- Preserve alt text for every listing image in the hardcoded data layer.

## Routing Requirements

- `/` for the home page
- `/catalog` for destination listing results
- `/rooms/[id]` for an individual room detail page

## Interaction Requirements

- Selecting or submitting a destination from the home page should navigate to `/catalog`.
- Clicking a listing card on the home page should navigate to `/rooms/[id]`.
- Clicking a listing card on the catalog page should navigate to `/rooms/[id]`.
- All navigations should use the Next.js `<Link>` component.
- Implement a back button on the catalog page using `<Link>` to return to the home page.
- Include a source query parameter when navigating to room detail (`from=home` or `from=catalog`).
- Implement source-aware room-detail back behavior:
  - If opened from home, back returns to `/`.
  - If opened from catalog, back returns to `/catalog?destination=...` when available.
- Navigation between the three pages should feel immediate and app-like.

## Implementation Addendum (May 2026)

The following behavior is implemented in code and should be treated as current expected functionality.

### Home Page

- Search input uses placeholder `Enter destination` and a compact `Search` button appears only when query has text.
- Listing rails are generated from `homeSections` and currently do not include a `Featured hotels in Miami` section.
- `PrimaryCategoryTabs` use icon-above-label layout, fit mobile `375px`, and remain mobile-sized but centered on desktop.
- Active category tab uses a red outline.
- Desktop listing rails include chevron left and chevron right controls for horizontal scrolling.

### Catalog Page

- Uses a responsive listing grid that matches home card sizing behavior.
- Listing cards include status badges (for example `Superhost`, `Guest favorite`) when present.

### Room Detail Page

- Hero section uses over-image chevron controls and a selectable thumbnail strip.
- Date section uses interactive start/end date pickers.
- Booking summary recalculates total price based on selected nights.
- Location map shows exactly one marker: the current listing.
- Listing badges are displayed in the identity block.

### Data and Assets

- Listing dataset has been expanded beyond the initial sample set to support longer horizontal rails.
- Listing and host imagery is local under `/public/images/listings`.
- Non-photographic placeholder listing images were removed in favor of real home/apartment photos.
- Listing lead images are unique and image content is not repeated across cities.

## Component Implementation Requirements

- Use `useState` for local interactive state such as search input value and current photo index.
- Use `useEffect` for simulated data loading on the home page and room detail page.
- Use `setTimeout` to simulate async loading behavior where the spec calls for loading states.
- Keep page-level orchestration in route components and move presentational logic into reusable child components.
- No component should exceed `80` lines of combined JSX and logic. Split larger components into smaller units.
- All components must be declared as `const` functional components.
