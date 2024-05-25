const request = require("supertest");
const app = require("../../app");
const { ROUTES } = require("../../routes");
const { connectToDb, dropDb, disconnectFromDb } = require("../../test/dbUtils");

const starshipsUrl = ROUTES.starships.url;

const starshipsRes = ["Starship Model"];

describe("GET /starships", () => {
  beforeEach(async () => {
    await connectToDb();
  });
  afterEach(async () => {
    await dropDb();
    await disconnectFromDb();
  });

  test("It should respond with 200 and send json data", async () => {
    const response = await request(app)
      .get(starshipsUrl)
      .expect(200)
      .expect("Content-type", /json/);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(starshipsRes);
  });
});
