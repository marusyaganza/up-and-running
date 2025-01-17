import { connectToDb, disconnectFromDb, dropDb } from "../../../test/dbUtils";
import { Flight } from "../flights.mongo";
import { getFlights } from "../flights.model"; // Adjust the path to your service file

describe("getFlights", () => {
  beforeAll(async () => {
    await connectToDb();
  });

  afterAll(async () => {
    await dropDb();
    await disconnectFromDb();
  });

  it("should return flights sorted by date in descending order with formatted dates", async () => {
    const flights = await getFlights();

    // Check that flights are returned
    expect(flights.length).toBeGreaterThan(0);

    // Check that flights are returned in descending order by date
    for (let i = 0; i < flights.length - 1; i++) {
      expect(new Date(flights[i].date).getTime()).toBeGreaterThanOrEqual(
        new Date(flights[i + 1].date).getTime()
      );
    }

    // Check that the date is formatted as a string
    flights.forEach((flight) => {
      expect(typeof flight.date).toBe("string");
      expect(isNaN(Date.parse(flight.date))).toBe(false);
    });

    // Check that other fields are preserved
    flights.forEach((flight) => {
      expect(flight).toHaveProperty("destination");
      expect(flight).toHaveProperty("origin");
      expect(flight).toHaveProperty("starship");
      expect(flight).toHaveProperty("isCancelled");
      expect(flight).toHaveProperty("id");
    });
  });

  it("should handle empty database", async () => {
    await Flight.deleteMany({});
    const flights = await getFlights();
    expect(flights).toEqual([]);
  });
});
