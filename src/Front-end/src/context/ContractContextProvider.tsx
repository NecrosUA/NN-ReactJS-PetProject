import { ContractContext, type ContractContextType } from "./ContractContext";
import type { ReactNode } from "react";

export const ContractProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: ContractContextType;
}) => {
  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
};