const request = require("supertest");
const app = require("../../app");
const { ROUTES } = require("../../routes");
const { connectToDb, dropDb, disconnectFromDb } = require("../../test/dbUtils");
const { mockFlights } = require("../../test/mocks");

const newFlight = {
  destination: "Destination 2",
  origin: "Origin 2",
  starship: "Starship 2",
  date: "2024-05-04T18:51:48.285Z",
  isCancelled: false,
};

const errors = [
  "destination is required",
  "origin is required",
  "starship is required",
  "data is required",
];

const flightsUrl = ROUTES.flights.url;

describe("GET /flights", () => {
  beforeEach(async () => {
    await connectToDb();
  });
  afterEach(async () => {
    await dropDb();
    await disconnectFromDb();
  });
  test("It should respond with 200 and send json data", async () => {
    const response = await request(app)
      .get(flightsUrl)
      .expect(200)
      .expect("Content-type", /json/);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(mockFlights);
  });
});

describe("POST /flights", () => {
  beforeEach(async () => {
    await connectToDb();
  });
  afterEach(async () => {
    await dropDb();
    await disconnectFromDb();
  });

  test("It should respond with 201 and send created json data", async () => {
    const response = await request(app)
      .post(flightsUrl)
      .send(newFlight)
      .expect(201);

    expect(response.body).toMatchObject(newFlight);
  });

  test("It should respond with 400 and send error json message if data is not complete", async () => {
    const response = await request(app).post(flightsUrl).send({}).expect(400);
    expect(response.body).toEqual({ errors });
  });
});
