import { useQuery } from "@tanstack/react-query";
import type { ContractApiResponse } from "../../mocks/data/contract.types";

const contractQueryKey = ["contract"] as const;

const fetchContract = async (): Promise<ContractApiResponse> => {
    const response = await fetch("/api/contract");

    if (!response.ok) {
        throw new Error("Failed to load contract data");
    }

    return response.json();
}

export const useContractQuery = () => {
    return useQuery({
        queryKey: contractQueryKey,
        queryFn: fetchContract,
    });
}