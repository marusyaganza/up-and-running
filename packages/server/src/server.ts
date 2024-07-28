/**
 * @packageDocumentation
 *
 * <img src="https://picsum.photos/id/20/200/300" align="right" />
 *
 * <h3>Why does this project exist?</h3>
 *
 * `@up/server` is a an example of apollo graphql server
 * It uses Star wars API to fetch planets and starships
 * <b>SWAPI.INFO</b> which you can learn more about by visiting
 * <a href="https://swapi.info/" target="_blank">
 *  the official docs
 * </a>
 *
 * The API that is provided by the `@up/server` is used in `@up/client` package
 * - a sample React App, powered by <a href="https://vitejs.dev/" target="_blank">Vite</a>
 *
 * @remarks
 * All interfaces are prefixed with `I`
 *
 * @packageDocumentation
 */

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
