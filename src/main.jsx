import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Start from "./Pages/Start.jsx";
import Home from "./Pages/Home.jsx";
import SpaceMap from "./Pages/SpaceMap.jsx";
import Memory from "./Pages/Memory.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/map",
        element: <SpaceMap />,
      },
      {
        path: "/memory",
        element: <Memory />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
