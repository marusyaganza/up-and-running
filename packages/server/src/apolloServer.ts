import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { IContext } from "./types/types";
import { Server } from "http";
import app from "./app";
import { context } from "./apolloContext";
import { schema } from "./gqlSchema";

export async function startApolloServer(
  httpServer: Server,
  serverCleanup: any
) {
  const apolloServer = new ApolloServer<IContext>({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await apolloServer.start();
  app.use("/graphql", expressMiddleware(apolloServer, { context }));
}
