import { Outlet } from "@tanstack/react-router";
import { useContractQuery } from "../api/contract/contract.query";
import { Header } from "../components/Header/Header";
import { ContractProvider } from "../context/ContractContextProvider";

export const RootLayout = () => {
  const { data, isLoading, isError, error } = useContractQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <ContractProvider value={{ data, isLoading, isError, error }}>
      <Header user={data.contractOwner} />
      <Outlet />
    </ContractProvider>
  );
};