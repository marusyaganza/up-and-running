import { Snackbar } from "./Snackbar";
import { fn } from "@storybook/test";

const meta = {
  component: Snackbar,
  args: {
    onClose: fn(),
    open: true,
  },
};

export default meta;

export const Default = {
  args: {
    message: "Success!",
  },
};

export const Error = {
  args: {
    message: "Something went wrong",
    variant: "error",
  },
};
