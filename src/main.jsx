// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";


// import App from './App.jsx';



import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import { TasksProvider } from "./features/tasks/context/tasks-provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TasksProvider>
      <RouterProvider router={router} />
    </TasksProvider>
  </React.StrictMode>
);