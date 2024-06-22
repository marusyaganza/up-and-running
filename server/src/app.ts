import express from "express";
import path from "path";
import { URLS, ROUTES } from "./routes";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

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
