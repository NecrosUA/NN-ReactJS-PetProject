import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Claim, ClaimUpsertPayload } from "../../mocks/data/claims.types";
import { claimsQueryKey } from "./claims.query";

const sendCreateClaimRequest = async (
  payload: ClaimUpsertPayload,
): Promise<Claim> => {
  const response = await fetch("/api/claims", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Nepodařilo se vytvořit pojistnou událost");
  }

  return response.json();
};

const sendUpdateClaimRequest = async (payload: Claim): Promise<Claim> => {
  const response = await fetch(`/api/claims/${payload.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Nepodařilo se upravit pojistnou událost");
  }

  return response.json();
};

const sendDeleteClaimRequest = async (
  claimId: string,
): Promise<{ id: string }> => {
  const response = await fetch(`/api/claims/${claimId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Nepodařilo se smazat pojistnou událost");
  }

  return response.json();
};

export const useCreateClaimMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendCreateClaimRequest,
    onSuccess: async () => {
      // Refresh the claims list after the mock database changes.
      await queryClient.invalidateQueries({ queryKey: claimsQueryKey });
    },
  });
};

export const useUpdateClaimMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendUpdateClaimRequest,
    onSuccess: async () => {
      // Refresh the claims list after inline row editing is saved.
      await queryClient.invalidateQueries({ queryKey: claimsQueryKey });
    },
  });
};

export const useDeleteClaimMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendDeleteClaimRequest,
    onSuccess: async () => {
      // Refresh the claims list after a row is removed from the mock database.
      await queryClient.invalidateQueries({ queryKey: claimsQueryKey });
    },
  });
};