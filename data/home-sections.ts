import type { FooterLinkGroup, FooterMeta, HomeSection, InspirationGroup } from "@/types/search";

export const homeSections: HomeSection[] = [
  {
    id: "popular-homes-miami",
    title: "Popular homes in Miami",
    destinationSlug: "miami",
    listingIds: [
      "listing-miami-1",
      "listing-miami-2"
    ],
  },
  {
    id: "featured-hotels-miami",
    title: "Featured hotels in Miami",
    subtitle: "A collection of independent and handpicked hotels",
    destinationSlug: "miami",
    listingIds: [
      "listing-miami-2",
      "listing-miami-1"
    ],
  },
  {
    id: "stay-in-philadelphia",
    title: "Stay in Philadelphia",
    destinationSlug: "philadelphia",
    listingIds: [
      "listing-philadelphia-1",
      "listing-philadelphia-2"
    ],
  },
  {
    id: "stays-in-pittsburgh",
    title: "Stays in Pittsburgh",
    destinationSlug: "pittsburgh",
    listingIds: [
      "listing-pittsburgh-1",
      "listing-pittsburgh-2",
      "listing-pittsburgh-3"
    ],
  },
];

export const inspirationGroups: InspirationGroup[] = [
  {
    id: "popular",
    label: "Popular",
    links: [
      { name: "Miami", subLabel: "Beach escapes" },
      { name: "Philadelphia", subLabel: "City weekends" },
      { name: "Pittsburgh", subLabel: "Lofts and studios" },
    ],
  },
  {
    id: "seasonal",
    label: "Seasonal",
    links: [
      { name: "Lake stays", subLabel: "Quiet mornings" },
      { name: "Countryside", subLabel: "Relaxed retreats" },
      { name: "City breaks", subLabel: "Walkable food scenes" },
    ],
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  { title: "Support", links: ["Help Center", "AirCover", "Safety"] },
  { title: "Hosting", links: ["Host your home", "Host resources", "Community"] },
  { title: "Travel", links: ["Newsroom", "Careers", "Investors"] },
];

export const footerMeta: FooterMeta = {
  locale: "English (US)",
  currency: "USD",
  socialLinks: ["Instagram", "X", "YouTube"],
  legalLinks: ["Privacy", "Terms", "Sitemap"],
};
