import { ContractCard } from "../components/ContractCard/ContractCard";
import { ContractDetailsCard } from "../components/ContractDetailsCard/ContractDetailsCard";
import { useContractQuery } from "../api/contract/contract.query";

export const ContractPage = () => {
	const { data, isLoading, isError, error } = useContractQuery();

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;
	if (!data) return <div>No data</div>;

	return (
		<>
			<ContractCard {...data.contractCard} />
			<ContractDetailsCard {...data.contractDetails} />
		</>
	);
}
