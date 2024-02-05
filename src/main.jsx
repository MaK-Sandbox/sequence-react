import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { io } from "socket.io-client";
import Match from "./pages/Match";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import JoinRoom from "./pages/JoinRoom";
import CreateTable from "./pages/CreateTable";
import "./index.css";

window.API_URL = "http://localhost:5431";

window.socket = io(window.API_URL);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/matches/join/:tableId",
        element: <JoinRoom />,
      },
      {
        path: "/matches/create",
        element: <CreateTable />,
      },
      {
        path: "/matches/match/:tableId",
        element: <Match />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
