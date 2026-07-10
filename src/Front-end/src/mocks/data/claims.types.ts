export type ClaimStatus =
  | "Nová"
  | "V řešení"
  | "Ke schválení"
  | "Schválena"
  | "Zamítnuta"
  | "Uzavřena";

export type ClaimType =
  | "Kolize"
  | "Krádež"
  | "Skla"
  | "Přírodní událost"
  | "Vandalismus"
  | "Požár";

export type Claim = {
  id: string;
  claimNumber: string;
  policyholder: string;
  vehicle: string;
  registrationPlate: string;
  claimType: ClaimType;
  status: ClaimStatus;
  incidentDate: string;
  reportedDate: string;
  damageEstimate: number;
  approvedAmount: number;
  adjuster: string;
};

export type ClaimUpsertPayload = Omit<Claim, "id"> & {
  id?: string;
};