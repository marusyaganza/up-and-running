import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { loadFilesSync } from "@graphql-tools/load-files";
import { resolvers } from "./resolvers";
import { model } from "./models";
import { IContext } from "./types/types";
import { Server } from "http";
import app from "./app";
import path from "path";

async function context() {
  return { model };
}

const typeDefs = loadFilesSync(
  path.join(__dirname, "../../shared/schema/*.graphql")
);

export async function startApolloServer(httpServer: Server) {
  const apolloServer = new ApolloServer<IContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apolloServer.start();
  app.use("/graphql", expressMiddleware(apolloServer, { context }));
}
