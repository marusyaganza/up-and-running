import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { NotificationProvider } from "./context/NotificationContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

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
