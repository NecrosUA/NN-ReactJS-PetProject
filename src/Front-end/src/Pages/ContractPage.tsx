import { ContractCard } from "../components/ContractCard/ContractCard";
import { ContractDetailsCard } from "../components/ContractDetailsCard/ContractDetailsCard";
import { useContractContext } from "../hooks/useContractContext";

export const ContractPage = () => {
	const { data } = useContractContext();

	return (
		<>
			<ContractCard {...data.contractCard} />
			<ContractDetailsCard {...data.contractDetails} />
		</>
	);
}
