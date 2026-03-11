import "./App.css";
import { useEffect, useState } from "react";
import { ContractCard } from "./components/ContractCard/ContractCard";
import { ContractDetailsCard } from "./components/ContractDetailsCard/ContractDetailsCard";
import { Header } from "./components/Header/Header";
import type { ContractApiResponse } from "./mocks/data/contract";


function App() {
  const [data, setData] = useState<ContractApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/contract")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load contract data");
        }
        return response.json();
      })
      .then((response: ContractApiResponse) => setData(response))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header user={data.contractOwner} />
      <ContractCard {...data.contractCard} />
      <ContractDetailsCard {...data.contractDetails} />
    </>
  )
}

export default App
