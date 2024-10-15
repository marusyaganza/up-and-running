// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { useServer } from "graphql-ws/lib/use/ws";
import { WebSocketServer } from "ws";
import { schema } from "./gqlSchema";
import http from "http";
import { initDB } from "./util/initDB";
import { context } from "./apolloContext";
import app from "./app";

const PORT = process.env.PORT || 4000;

const httpServer = http.createServer(app);

const apolloServer = new ApolloServer({
  schema,
});

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

initDB(async () => {
  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer, { context }));

  useServer({ schema }, wsServer);

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}/graphql`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}/graphql`);
  });
}).catch((err: string) => console.error(err));
