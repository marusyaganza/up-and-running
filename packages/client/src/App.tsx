import { RouterProvider } from "react-router-dom";
import { Router } from "./router/router";

import { NotificationProvider } from "./context/NotificationProvider";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const router = Router();

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
