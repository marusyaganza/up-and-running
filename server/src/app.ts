import * as express from "express";
import * as path from "path";
import * as morgan from "morgan";
import * as cors from "cors";
import helmet from "helmet";
import { URLS, ROUTES } from "./routes";

const FE_URL = process.env.FE_URL;

const staticPath = path.join(__dirname, "..", "..", "client", "dist");

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors({ origin: FE_URL }));
app.use("/", express.static(staticPath));

const routes = Object.values(URLS) as URLS[];
routes.forEach((route) => {
  app.use(ROUTES[route].url, ROUTES[route].router);
});

app.get("/*", (_, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
