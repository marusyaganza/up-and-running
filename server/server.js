require("dotenv").config();
const { initDB } = require("./src/util/initDB");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 4000;

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({ schema });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`server is ready on port ${PORT}🚀`);
  });
}

initDB(() => {
  startApolloServer();
}).catch((err) => console.error(err));
