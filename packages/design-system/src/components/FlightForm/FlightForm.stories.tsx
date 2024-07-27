import { FlightForm } from "./FlightForm";
import { fn } from "@storybook/test";

const planets = ["Planet 1", "Planet 2"];
const starships = ["Starship 1", "Starship 2"];

const meta = {
  component: FlightForm,
  args: { onSubmit: fn(), planets, starships },
};

export const Default = {};

export default meta;
