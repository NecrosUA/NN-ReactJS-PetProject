import { http, HttpResponse, delay } from "msw";
import { contractApiMock } from "./data/contract";
import { claimsApiMock } from "./data/claims";
import type { Claim, ClaimUpsertPayload } from "./data/claims.types";

// This in-memory array acts as a fake database for CRUD operations in the Claims table.
let claimsDb: Claim[] = claimsApiMock.map((claim) => ({ ...claim }));

// Normalizes raw request payloads into the Claim shape used by the mock API.
const normalizeClaimPayload = (
  payload: Partial<ClaimUpsertPayload>,
  fallbackId: string,
): Claim => ({
  id: payload.id?.trim() || fallbackId,
  claimNumber: String(payload.claimNumber ?? "").trim(),
  policyholder: String(payload.policyholder ?? "").trim(),
  vehicle: String(payload.vehicle ?? "").trim(),
  registrationPlate: String(payload.registrationPlate ?? "").trim(),
  claimType: String(payload.claimType ?? "Kolize") as Claim["claimType"],
  status: String(payload.status ?? "Nová") as Claim["status"],
  incidentDate: String(payload.incidentDate ?? "").trim(),
  reportedDate: String(payload.reportedDate ?? "").trim(),
  damageEstimate: Number(payload.damageEstimate ?? 0),
  approvedAmount: Number(payload.approvedAmount ?? 0),
  adjuster: String(payload.adjuster ?? "").trim(),
});

export const handlers = [
  // Contract data is read-only, so a static mock response is enough here.
  http.get("/api/contract", async () => {
    const ms = Math.floor(Math.random() * 4000) + 1000; // Simulate a delay between 1 and 5 seconds
    await delay(ms); 
    return HttpResponse.json(contractApiMock, { status: 200 });
  }),
  // Return the current claims list from the in-memory database.
  http.get("/api/claims", () => {
    return HttpResponse.json(claimsDb, { status: 200 });
  }),
  // Create a new claim and prepend it to the in-memory database.
  http.post("/api/claims", async ({ request }) => {
    const payload = (await request.json()) as Partial<ClaimUpsertPayload>;
    const createdClaim = normalizeClaimPayload(payload, `claim-${Date.now()}`);

    claimsDb = [createdClaim, ...claimsDb];

    return HttpResponse.json(createdClaim, { status: 201 });
  }),
  // Update an existing claim by id.
  http.put("/api/claims/:id", async ({ params, request }) => {
    const payload = (await request.json()) as Partial<ClaimUpsertPayload>;
    const claimId = String(params.id);
    const existingClaimIndex = claimsDb.findIndex((claim) => claim.id === claimId);

    if (existingClaimIndex === -1) {
      return HttpResponse.json({ message: "Claim not found" }, { status: 404 });
    }

    const updatedClaim = normalizeClaimPayload(payload, claimId);
    claimsDb = claimsDb.map((claim) =>
      claim.id === claimId ? updatedClaim : claim,
    );

    return HttpResponse.json(updatedClaim, { status: 200 });
  }),
  // Delete a claim by id.
  http.delete("/api/claims/:id", ({ params }) => {
    const claimId = String(params.id);
    const existingClaim = claimsDb.find((claim) => claim.id === claimId);

    if (!existingClaim) {
      return HttpResponse.json({ message: "Claim not found" }, { status: 404 });
    }

    claimsDb = claimsDb.filter((claim) => claim.id !== claimId);

    return HttpResponse.json({ id: claimId }, { status: 200 });
  }),
  // Contact form keeps its own fake request flow with validation and simulated delay.
  http.post("/api/contact", async ({ request }) => {
    const ms = Math.floor(Math.random() * 1200) + 300;
    await delay(ms);

    const payload = (await request.json()) as { message?: string };
    const message = payload.message?.trim() ?? "";

    if (!message) {
      return HttpResponse.json(
        { message: "Musíte vyplnit tělo zprávy" },
        { status: 400 },
      );
    }

    return HttpResponse.json(
      {
        id: `contact-${Date.now()}`,
        message: "Zpráva byla přijata",
      },
      { status: 200 },
    );
  }),
];