import express from "express";
import morgan from "morgan";
import cors from "cors";

const FE_URL = process.env.FE_URL;

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(cors({ origin: FE_URL }));

export default app;
