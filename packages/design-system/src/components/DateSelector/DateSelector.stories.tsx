import { DateSelector } from "./DateSelector";
import { fn } from "@storybook/test";

const meta = {
  component: DateSelector,
  args: {
    onChange: fn(),
  },
};

export default meta;

export const Default = {
  args: {
    label: "Date Selector",
  },
};

export const Error = {
  args: {
    error: "Invalid date",
  },
};
