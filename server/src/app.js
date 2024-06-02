const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const path = require("path");

const morgan = require("morgan");
const cors = require("cors");

const FE_URL = process.env.FE_URL;

const staticPath = path.join(__dirname, "..", "..", "client", "dist");

const app = express();

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

app.use(morgan("common"));
app.use(cors({ origin: FE_URL }));

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

// Handle FE
app.use("/", express.static(staticPath));

app.get("/*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

module.exports = app;
