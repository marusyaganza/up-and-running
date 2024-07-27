import { Select } from "./Select";
import { fn } from "@storybook/test";

const options = ["Option 1", "Option 2"];

const meta = {
  component: Select,
  args: {
    onChange: fn(),
    options,
  },
};

export default meta;

export const Default = {};

export const Error = {
  args: {
    error: "Invalid date",
  },
};
