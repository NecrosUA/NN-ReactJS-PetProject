import { http, HttpResponse, delay } from "msw";
import { contractApiMock } from "./data/contract";

export const handlers = [
  http.get("/api/contract", async () => {
    const ms = Math.floor(Math.random() * 4000) + 1000; // Simulate a delay between 1 and 5 seconds
    await delay(ms); 
    return HttpResponse.json(contractApiMock, { status: 200 });
  }),
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