require("dotenv").config();
import { initDB } from "./util/initDB";

import { createServer } from "http";
import app from "./app";

const PORT = process.env.PORT || 4000;

const server = createServer(app);

initDB(() => {
  server.listen(PORT, () => {
    console.log(`server is ready on port ${PORT}🚀`);
  });
}).catch((err: string) => console.error(err));
