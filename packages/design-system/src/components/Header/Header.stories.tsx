import { Header } from "./Header";
import { routerDecorator } from "../../util/storybook-decorators";
const routes = [
  { text: "Flights", url: "flights" },
  { text: "Upcoming", url: "upcoming" },
  { text: "History", url: "history" },
];

const userMenu = [
  { text: "Profile", url: "profile" },
  {
    text: "Logout",
    onClick: () => {
      console.log("Logged out");
    },
  },
];

const meta = {
  component: Header,
  args: {
    routes,
    userMenu,
  },
  decorators: [routerDecorator],
};

export default meta;

export const Default = {};
