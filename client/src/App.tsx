import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { NotificationProvider } from "./context/NotificationContext";
import "./App.css";

function App() {
  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  );
}

export default App;
