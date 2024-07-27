import { FlightsTable } from "./FlightsTable";
import { fn } from "@storybook/test";

const flights = [
  {
    date: "Thu Nov 21 2024",
    destination: "Polis Massa",
    id: "669f6ded5d4c7e6685c1bda6",
    isCancelled: false,
    origin: "Coruscant",
    starship: "J-type diplomatic barge",
  },
  {
    date: "Fri Aug 30 2024",
    destination: "Kashyyyk",
    id: "669f5c32077b1292178f4478",
    isCancelled: true,
    origin: "Utapau",
    starship: "Lucrehulk-class Droid Control Ship",
  },
];

const flightsWithAction = flights.map((flight) => ({
  ...flight,
  action: fn(),
}));

const meta = {
  component: FlightsTable,
  args: {
    onChange: fn(),
  },
};

export default meta;

export const Default = {
  args: {
    flights,
  },
};

export const WithAction = {
  args: {
    withAction: true,
    flights: flightsWithAction,
  },
};
