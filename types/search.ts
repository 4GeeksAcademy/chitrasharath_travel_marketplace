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

export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export interface FooterMeta {
  locale: string;
  currency: string;
  socialLinks: string[];
  legalLinks: string[];
}
