// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { createServer } from "http";
import { initDB } from "./util/initDB";
import app from "./app";
import { startApolloServer } from "./apolloServer";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { schema } from "./gqlSchema";

const PORT = process.env.PORT || 4000;

const server = createServer(app);

const wsServer = new WebSocketServer({
  // This is the `httpServer` we created in a previous step.
  server,
  // Pass a different path here if app.use
  // serves expressMiddleware at a different path
  path: "/subscriptions",
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
const serverCleanup = useServer({ schema }, wsServer);

initDB(() => {
  startApolloServer(server, serverCleanup);
  server.listen(PORT, () => {
    console.log(`server is ready on port ${PORT}🚀`);
  });
}).catch((err: string) => console.error(err));
