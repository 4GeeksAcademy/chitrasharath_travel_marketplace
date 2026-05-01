import type { Host } from "@/types/host";

export const hosts: Host[] = [
  {
    id: "host-maya",
    name: "Maya",
    avatarUrl: "/images/listings/miami-apartment-1.jpg",
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
    avatarUrl: "/images/listings/philadelphia-apartment-2.jpg",
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
  },
  {
    id: "host-scott",
    name: "Scott",
    avatarUrl: "/images/listings/pittsburgh-studio-1.jpg",
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
  }
];
