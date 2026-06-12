import "./App.css";
import { ContractCard } from "./components/ContractCard/ContractCard";
import { ContractDetailsCard } from "./components/ContractDetailsCard/ContractDetailsCard";
import { Header } from "./components/Header/Header";
import { useContractQuery } from "./api/contract/contract.query";


function App() {
  const { data, isLoading, isError, error } = useContractQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      <Header user={data.contractOwner} />
      <ContractCard {...data.contractCard} />
      <ContractDetailsCard {...data.contractDetails} />
    </>
  )
}

export default App
