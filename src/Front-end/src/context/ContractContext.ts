import { createContext } from "react";
import type { ContractApiResponse } from "../mocks/data/contract.types";

export interface ContractContextType {
  data: ContractApiResponse;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export const ContractContext = createContext<ContractContextType | undefined>(
  undefined,
);
