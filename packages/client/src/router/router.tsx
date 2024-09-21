import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { withSuspense } from "../util/withSuspense";
import { withAuth } from "../util/withAuth";
import { Role } from "../generated/graphql";

const HomePage = lazy(() => import("../pages/HomePage"));
const ScheduleFlightPage = lazy(() => import("../pages/ScheduleFlightPage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage"));
const UpcomingPage = lazy(() => import("../pages/UpcomingPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(HomePage),
  },
  {
    path: ROUTES.scheduleFlight,
    element: withAuth(ScheduleFlightPage, [Role.Admin]),
  },
  {
    path: ROUTES.history,
    element: withSuspense(HistoryPage),
  },
  {
    path: ROUTES.upcoming,
    element: withSuspense(UpcomingPage),
  },
  {
    path: ROUTES.profile,
    element: withAuth(ProfilePage, [Role.User, Role.Admin]),
  },
]);
