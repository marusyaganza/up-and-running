import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { NotificationProvider } from "./context/NotificationContext";
import { ApolloProvider } from "@apollo/client";
import "./App.css";
import { client } from "./apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </ApolloProvider>
  );
}

export default App;
