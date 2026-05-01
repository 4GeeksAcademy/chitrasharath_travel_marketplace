export const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export const stayMeta = (
  guestCount: number,
  bedroomCount: number,
  bedCount: number,
  bathCount: number
) => `${guestCount} guests · ${bedroomCount} bedrooms · ${bedCount} beds · ${bathCount} baths`;
