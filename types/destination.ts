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
