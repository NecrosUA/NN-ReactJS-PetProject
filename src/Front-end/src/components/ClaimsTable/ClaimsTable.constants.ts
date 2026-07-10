import type { Claim } from "../../mocks/data/claims.types";

// Shared select options for claim create/edit flows.
export const claimTypeOptions: Claim["claimType"][] = [
  "Kolize",
  "Krádež",
  "Skla",
  "Přírodní událost",
  "Vandalismus",
  "Požár",
];

// Shared select options for claim status create/edit flows.
export const claimStatusOptions: Claim["status"][] = [
  "Nová",
  "V řešení",
  "Ke schválení",
  "Schválena",
  "Zamítnuta",
  "Uzavřena",
];

// Maps claim statuses to visual badge colors.
export const statusColorMap: Record<Claim["status"], string> = {
  "Nová": "blue",
  "V řešení": "yellow",
  "Ke schválení": "grape",
  "Schválena": "green",
  "Zamítnuta": "red",
  "Uzavřena": "gray",
};