export interface Amenity {
  id: string;
  label: string;
  iconKey: string;
  category: "essentials" | "workspace" | "kitchen" | "safety" | "outdoor";
}
