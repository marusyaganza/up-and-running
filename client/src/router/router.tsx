import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { withSuspense } from "../util/withSuspense";

const HomePage = lazy(() => import("../pages/HomePage"));
const FlightsPage = lazy(() => import("../pages/FlightsPage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage"));
const UpcomingPage = lazy(() => import("../pages/UpcomingPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(HomePage),
  },
  {
    path: ROUTES.flights,
    element: withSuspense(FlightsPage),
  },
  {
    path: ROUTES.history,
    element: withSuspense(HistoryPage),
  },
  {
    path: ROUTES.upcoming,
    element: withSuspense(UpcomingPage),
  },
]);
