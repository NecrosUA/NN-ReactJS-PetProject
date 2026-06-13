import { useQuery } from "@tanstack/react-query";
import type { ContractApiResponse } from "../../mocks/data/contract.types";

const contractQueryKey = ["contract"] as const;

const fetchContract = async (): Promise<ContractApiResponse> => {
    const response = await fetch("/api/contract", {
        headers: {
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to load contract data");
    }
    
    // Ensure the response is JSON before parsing
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
        throw new Error("Expected JSON, got: " + contentType);
    }

    return response.json();
}

export const useContractQuery = () => {
    return useQuery({
        queryKey: contractQueryKey,
        queryFn: fetchContract,
    });
}