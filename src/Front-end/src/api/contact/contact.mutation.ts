import { useMutation } from "@tanstack/react-query";

//In real application should be some kind of id or email to identify the user, but for this example we will just use a message
interface ContactRequestPayload {
  message: string;
}

interface ContactRequestResponse {
  id: string;
  message: string;
}

const sendContactRequest = async (
  payload: ContactRequestPayload,
): Promise<ContactRequestResponse> => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Nepodařilo se odeslat zprávu");
  }

  return response.json();
};

export const useContactMutation = () => {
  return useMutation({
    mutationFn: sendContactRequest,
  });
};
