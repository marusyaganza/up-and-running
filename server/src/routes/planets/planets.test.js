const request = require("supertest");
const app = require("../../app");
const { ROUTES } = require("../../routes");
const { connectToDb, dropDb, disconnectFromDb } = require("../../test/dbUtils");

const planetsUrl = ROUTES.planets.url;

const planetsRes = ["Planet 1", "Planet 2"];

describe("GET /planets", () => {
  beforeEach(async () => {
    await connectToDb();
  });
  afterEach(async () => {
    await dropDb();
    await disconnectFromDb();
  });

  test("It should respond with 200 and send json data", async () => {
    const response = await request(app)
      .get(planetsUrl)
      .expect(200)
      .expect("Content-type", /json/);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(planetsRes);
  });
});
