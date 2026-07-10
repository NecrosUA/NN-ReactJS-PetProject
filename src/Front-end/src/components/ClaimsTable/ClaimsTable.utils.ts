import type { Claim } from "../../mocks/data/claims.types";

// Stores per-field validation messages for the active edit/create row.
export type ValidationErrors = Partial<Record<keyof Claim, string>>;

// Creates a default row template used when user clicks the create button.
export const createEmptyClaim = (): Claim => ({
  id: `claim-${Date.now()}`,
  claimNumber: "",
  policyholder: "",
  vehicle: "",
  registrationPlate: "",
  claimType: "Kolize",
  status: "Nová",
  incidentDate: "",
  reportedDate: "",
  damageEstimate: 0,
  approvedAmount: 0,
  adjuster: "",
});

// Handles text/number input values from MRT edit components in a safe way.
export const normalizeNumber = (value: unknown) => {
  if (typeof value === "number") {
    return value;
  }

  const parsedValue = Number(String(value ?? "").replace(",", "."));
  return Number.isNaN(parsedValue) ? 0 : parsedValue;
};

// Converts raw table form values into the API shape expected by MSW handlers.
export const normalizeClaim = (
  values: Record<string, unknown>,
  id: string,
): Claim => ({
  id,
  claimNumber: String(values.claimNumber ?? "").trim(),
  policyholder: String(values.policyholder ?? "").trim(),
  vehicle: String(values.vehicle ?? "").trim(),
  registrationPlate: String(values.registrationPlate ?? "").trim(),
  claimType: String(values.claimType ?? "Kolize") as Claim["claimType"],
  status: String(values.status ?? "Nová") as Claim["status"],
  incidentDate: String(values.incidentDate ?? "").trim(),
  reportedDate: String(values.reportedDate ?? "").trim(),
  damageEstimate: normalizeNumber(values.damageEstimate),
  approvedAmount: normalizeNumber(values.approvedAmount),
  adjuster: String(values.adjuster ?? "").trim(),
});

// Returns per-field errors for required fields in create/edit flows.
export const validateClaim = (
  values: Record<string, unknown>,
): ValidationErrors => {
  const requiredText = (value: unknown) =>
    String(value ?? "").trim().length > 0 ? undefined : "Pole je povinné";

  return {
    claimNumber: requiredText(values.claimNumber),
    policyholder: requiredText(values.policyholder),
    vehicle: requiredText(values.vehicle),
    registrationPlate: requiredText(values.registrationPlate),
    incidentDate: requiredText(values.incidentDate),
    reportedDate: requiredText(values.reportedDate),
    adjuster: requiredText(values.adjuster),
  };
};

// Formats money in Czech locale for display cells.
export const formatMoney = (value: number) =>
  new Intl.NumberFormat("cs-CZ", {
    maximumFractionDigits: 0,
  }).format(value);