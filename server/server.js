require("dotenv").config();
const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";

const { createServer } = require("http");
const app = require("./src/app");

const PORT = process.env.PORT || 4000;

const server = createServer(app);

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
    server.listen(PORT, () => {
      console.log(`server is ready on port ${PORT}🚀`);
    });
  } catch (err) {
    console.error("mongoose error", err);
  }
}
