import { Header } from "./Header";
import { routerDecorator } from "../../util/storybook-decorators";
const routes = [
  { text: "Flights", url: "flights" },
  { text: "Upcoming", url: "upcoming" },
  { text: "History", url: "history" },
];

const meta = {
  component: Header,
  args: {
    routes,
  },
  decorators: [routerDecorator],
};

export default meta;

export const Default = {};
