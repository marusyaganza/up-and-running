import { createBrowserRouter } from "react-router-dom";
import { routerConfig } from "./routerConfig";

export function Router() {
  return createBrowserRouter(routerConfig);
}
