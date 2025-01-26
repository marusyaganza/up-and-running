import { defineConfig } from "cypress";
import {
  dropDb,
  disconnectFromDb,
  connectToDb,
  seedDb,
} from "./cypress/support/helpers/dbUtils";
import { FlightInput } from "./src/generated/graphql";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5000",
    viewportWidth: 1300,
    viewportHeight: 1000,
    // supportFile: false,
    setupNodeEvents(on) {
      on("task", {
        async prepareDB(input?: { flights?: Partial<FlightInput>[] }) {
          await connectToDb();
          await dropDb();
          await seedDb(input);
          return null;
        },
        async disconnectFromDb() {
          await dropDb();
          await disconnectFromDb();
          return null;
        },
      });
    },
  },
});
