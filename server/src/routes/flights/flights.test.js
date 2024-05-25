const request = require("supertest");
const app = require("../../app");
const { ROUTES } = require("../../routes");
const { connectToDb, dropDb, disconnectFromDb } = require("../../test/dbUtils");
const { mockFlights } = require("../../test/mocks");
const Flight = require("../../models/flights/flights.mongo");

const newFlight = {
  destination: "Destination 2",
  origin: "Origin 2",
  starship: "Starship 2",
  date: "2024-05-04T18:51:48.285Z",
  isCancelled: false,
};

const flightUpdate = {
  destination: "Destination 3",
  origin: "Origin 3",
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

describe("DELETE /flights", () => {
  beforeEach(async () => {
    await connectToDb();
  });
  afterEach(async () => {
    await dropDb();
    await disconnectFromDb();
  });

  test("It should respond with 200 and send updated json data", async () => {
    const flight = await Flight.findOne({}, "id");
    const response = await request(app)
      .delete(`${flightsUrl}/${flight.id}`)
      .expect(200)
      .expect("Content-type", /json/);
    expect(response.body).toMatchObject({
      ...mockFlights[0],
      isCancelled: true,
    });
  });

  test("It should respond with 400 and send json with error message", async () => {
    const mockId = "663b8c6ddcb6134dd4fa0d2c";
    const response = await request(app)
      .delete(`${flightsUrl}/${mockId}`)
      .expect(404)
      .expect("Content-type", /json/);
    expect(response.body).toMatchObject({
      error: "flight is not found",
    });
  });
});

describe("UPDATE /flights", () => {
  beforeEach(async () => {
    await connectToDb();
  });
  afterEach(async () => {
    await dropDb();
    await disconnectFromDb();
  });

  test("It should respond with 200 and send updated json data", async () => {
    const flight = await Flight.findOne({}, "id");
    const response = await request(app)
      .patch(`${flightsUrl}/${flight.id}`)
      .expect(200)
      .send(flightUpdate)
      .expect("Content-type", /json/);
    expect(response.body).toMatchObject({
      ...mockFlights[0],
      ...flightUpdate,
    });
  });

  test("It should respond with 400 and send json with error message", async () => {
    const mockId = "663b8c6ddcb6134dd4fa0d2c";
    const response = await request(app)
      .patch(`${flightsUrl}/${mockId}`)
      .send(flightUpdate)
      .expect(404)
      .expect("Content-type", /json/);
    expect(response.body).toMatchObject({
      error: "flight is not found",
    });
  });
});
