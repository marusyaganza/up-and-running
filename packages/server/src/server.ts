// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { createServer } from "http";
import { initDB } from "./util/initDB";
import app from "./app";
import { startApolloServer } from "./apolloServer";

const PORT = process.env.PORT || 4000;

const server = createServer(app);

initDB(() => {
  startApolloServer(server);
  server.listen(PORT, () => {
    console.log(`server is ready on port ${PORT}🚀`);
  });
}).catch((err: string) => console.error(err));
