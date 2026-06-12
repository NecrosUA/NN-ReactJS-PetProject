import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useContractQuery } from "./api/contract/contract.query";
import { Header } from "./components/Header/Header";
import { ContractPage } from "./Pages/ContractPage";
import { ClaimsPage } from "./Pages/ClaimsPage";
import { ContactPage } from "./Pages/ContactPage";

function RootLayout() {
  const { data, isLoading, isError, error } = useContractQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      <Header user={data.contractOwner} />
      <Outlet />
    </>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const contractsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: ContractPage,
});

const claimsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/claims",
  component: ClaimsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contacts",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([contractsRoute, claimsRoute, contactRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}