import { useQuery } from "@tanstack/react-query";
import type { Claim } from "../../mocks/data/claims.types";

export const claimsQueryKey = ["claims"] as const;

const fetchClaims = async (): Promise<Claim[]> => {
  const response = await fetch("/api/claims", {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Nepodařilo se načíst pojistné události");
  }

  return response.json();
};

export const useClaimsQuery = () => {
  return useQuery({
    queryKey: claimsQueryKey,
    queryFn: fetchClaims,
    refetchOnWindowFocus: false,
  });
};