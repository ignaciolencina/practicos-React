import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

import { RouterProvider } from "react-router-dom";

import { router } from "./constants/routes.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
