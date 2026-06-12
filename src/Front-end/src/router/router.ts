import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ContractPage } from "../pages/ContractPage";
import { ClaimsPage } from "../pages/ClaimsPage";
import { ContactPage } from "../pages/ContactPage";
import { RootLayout } from "../pages/RootLayout";

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