import type { ContractCardProps } from "../../components/ContractCard/ContractCard";
import type { ContractDetailsProps } from "../../components/ContractDetailsCard/ContractDetailsCard";

export type ContractApiResponse = {
    contractOwner: string;
    contractCard: ContractCardProps;
    contractDetails: ContractDetailsProps;
};