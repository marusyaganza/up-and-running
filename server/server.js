require("dotenv").config();
const { initDB } = require("./src/util/initDB");

const { createServer } = require("http");
const app = require("./src/app");

const PORT = process.env.PORT || 4000;

const server = createServer(app);

initDB(() => {
  server.listen(PORT, () => {
    console.log(`server is ready on port ${PORT}🚀`);
  });
}).catch((err) => console.error(err));
