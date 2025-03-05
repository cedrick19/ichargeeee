import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";

import App from "@/App";

import ErrorScreen from "@/screens/error-screen";

export const About = lazy(() => import("@/screens/about"));
export const Services = lazy(() => import("@/screens/services"));
export const Home = lazy(() => import("@/screens/home"));
export const Faqs = lazy(() => import("@/screens/faqs"));
export const TermsAndConditions = lazy(
  () => import("@/screens/terms-and-conditions"),
);
export const Partners = lazy(() => import("@/screens/partner-with-us"));
export const UserAgreements = lazy(
  () => import("@/screens/user-agreement/UserAgreements"),
);
export const Privacies = lazy(() => import("@/screens/privacy/Privacies"));
export const Cookie = lazy(() => import("@/screens/cookies/Cookie"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // ...sectorRoutes,
      { path: "partner", element: <Partners /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "user-agreement",
        element: <UserAgreements />,
      },
      {
        path: "privacy",
        element: <Privacies />,
      },
      {
        path: "cookies",
        element: <Cookie />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(router);

export default appRouter;
