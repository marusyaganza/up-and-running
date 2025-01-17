import mongoose from "mongoose";
import { FlightInput } from "../../../src/generated/graphql";

export async function connectToDb() {
  const dbUrl = "mongodb://localhost:27017/test";
  try {
    await mongoose.connect(dbUrl);
  } catch (err) {
    console.error("mongoose err, make sure you run the DB", err);
  }
}

export async function disconnectFromDb() {
  try {
    await mongoose.connection.close();
  } catch (err) {
    console.error("mongoose close connection error", err);
  }
}

export async function dropDb() {
  try {
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    const collectionExists = collections.some((col) => col.name === "flights");

    if (collectionExists) {
      await mongoose.connection.collection("flights").drop();
    } else {
      console.log(
        "Collection 'flights' does not exist, skipping drop operation"
      );
    }
  } catch (err) {
    console.error("mongoose drop db error", err);
  }
}

export async function seedDb(input?: { flights?: Partial<FlightInput>[] }) {
  const flightsInput = input?.flights;
  try {
    if (flightsInput) {
      const flightsCollection = await mongoose.connection.db.createCollection(
        "flights"
      );
      await flightsCollection.insertMany(flightsInput);
    }
  } catch (err) {
    console.error("mongoose drop db error", err);
  }
}
