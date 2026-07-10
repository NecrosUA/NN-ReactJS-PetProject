import type { Claim } from "./claims.types";

const baseClaims: Claim[] = [
  {
    id: "claim-1001",
    claimNumber: "CLM-2026-1001",
    policyholder: "Rostyslav Kokhanchuk",
    vehicle: "Toyota Yaris Cross",
    registrationPlate: "1ABC123",
    claimType: "Kolize",
    status: "V řešení",
    incidentDate: "18.06.2026",
    reportedDate: "19.06.2026",
    damageEstimate: 128000,
    approvedAmount: 0,
    adjuster: "Jana Novotná",
  },
  {
    id: "claim-1002",
    claimNumber: "CLM-2026-1002",
    policyholder: "Petra Dvořáková",
    vehicle: "Škoda Octavia",
    registrationPlate: "5XK8821",
    claimType: "Skla",
    status: "Schválena",
    incidentDate: "02.05.2026",
    reportedDate: "03.05.2026",
    damageEstimate: 14500,
    approvedAmount: 12000,
    adjuster: "Tomáš Král",
  },
  {
    id: "claim-1003",
    claimNumber: "CLM-2026-1003",
    policyholder: "Lukáš Beneš",
    vehicle: "Volkswagen Golf",
    registrationPlate: "2ABM441",
    claimType: "Krádež",
    status: "Ke schválení",
    incidentDate: "27.04.2026",
    reportedDate: "28.04.2026",
    damageEstimate: 396000,
    approvedAmount: 0,
    adjuster: "Eva Malá",
  },
  {
    id: "claim-1004",
    claimNumber: "CLM-2026-1004",
    policyholder: "Michaela Svobodová",
    vehicle: "Hyundai Tucson",
    registrationPlate: "8ZT4479",
    claimType: "Přírodní událost",
    status: "Uzavřena",
    incidentDate: "14.03.2026",
    reportedDate: "15.03.2026",
    damageEstimate: 62000,
    approvedAmount: 62000,
    adjuster: "Martin Pospíšil",
  },
  {
    id: "claim-1005",
    claimNumber: "CLM-2026-1005",
    policyholder: "Ondřej Vacek",
    vehicle: "Kia Sportage",
    registrationPlate: "4MP9987",
    claimType: "Vandalismus",
    status: "Nová",
    incidentDate: "07.07.2026",
    reportedDate: "08.07.2026",
    damageEstimate: 25000,
    approvedAmount: 0,
    adjuster: "Lucie Horáková",
  },
  {
    id: "claim-1006",
    claimNumber: "CLM-2026-1006",
    policyholder: "Tereza Konečná",
    vehicle: "Ford Focus",
    registrationPlate: "3KQ6612",
    claimType: "Požár",
    status: "Zamítnuta",
    incidentDate: "22.02.2026",
    reportedDate: "23.02.2026",
    damageEstimate: 540000,
    approvedAmount: 0,
    adjuster: "Jana Novotná",
  },
];

const policyholders = [
  "Rostyslav Kokhanchuk",
  "Petra Dvořáková",
  "Lukáš Beneš",
  "Michaela Svobodová",
  "Ondřej Vacek",
  "Tereza Konečná",
  "Pavel Urban",
  "Veronika Šimečková",
  "David Marek",
  "Anna Horáková",
];

const vehicles = [
  "Toyota Yaris Cross",
  "Škoda Octavia",
  "Volkswagen Golf",
  "Hyundai Tucson",
  "Kia Sportage",
  "Ford Focus",
  "Mazda CX-5",
  "Renault Captur",
  "Peugeot 3008",
  "BMW X1",
];

const adjusters = [
  "Jana Novotná",
  "Tomáš Král",
  "Eva Malá",
  "Martin Pospíšil",
  "Lucie Horáková",
  "Jiří Němec",
];

const statuses: Claim["status"][] = [
  "Nová",
  "V řešení",
  "Ke schválení",
  "Schválena",
  "Zamítnuta",
  "Uzavřena",
];

const claimTypes: Claim["claimType"][] = [
  "Kolize",
  "Krádež",
  "Skla",
  "Přírodní událost",
  "Vandalismus",
  "Požár",
];

const pad = (value: number) => value.toString().padStart(2, "0");

const createDate = (index: number) => {
  const day = (index % 27) + 1;
  const month = ((index * 3) % 12) + 1;
  return `${pad(day)}.${pad(month)}.2026`;
};

const createRegistrationPlate = (index: number) => {
  const region = ((index % 9) + 1).toString();
  const letters = String.fromCharCode(65 + (index % 26)) + String.fromCharCode(65 + ((index + 7) % 26));
  const digits = (1000 + (index * 73) % 9000).toString();
  return `${region}${letters}${digits}`;
};

const generatedClaims: Claim[] = Array.from({ length: 44 }, (_, idx) => {
  const index = idx + 7;
  const damageEstimate = 10000 + (index * 12450) % 550000;
  const isApproved = index % 4 === 0;

  return {
    id: `claim-${1000 + index}`,
    claimNumber: `CLM-2026-${1000 + index}`,
    policyholder: policyholders[index % policyholders.length],
    vehicle: vehicles[index % vehicles.length],
    registrationPlate: createRegistrationPlate(index),
    claimType: claimTypes[index % claimTypes.length],
    status: statuses[index % statuses.length],
    incidentDate: createDate(index),
    reportedDate: createDate(index + 1),
    damageEstimate,
    approvedAmount: isApproved ? Math.floor(damageEstimate * 0.82) : 0,
    adjuster: adjusters[index % adjusters.length],
  };
});

export const claimsApiMock: Claim[] = [...baseClaims, ...generatedClaims];