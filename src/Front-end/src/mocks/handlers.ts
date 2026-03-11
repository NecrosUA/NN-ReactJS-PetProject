import { http, HttpResponse, delay } from "msw";
import { contractApiMock } from "./data/contract";

export const handlers = [
  http.get("/api/contract", async () => {
    const ms = Math.floor(Math.random() * 4000) + 1000; // Simulate a delay between 1 and 5 seconds
    await delay(ms); 
    return HttpResponse.json(contractApiMock, { status: 200 });
  }),
];