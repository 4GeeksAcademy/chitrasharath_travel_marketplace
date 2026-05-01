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
  { id: "smoke-alarm", label: "Smoke alarm", iconKey: "shield", category: "safety" },
];
