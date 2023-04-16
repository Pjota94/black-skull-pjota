import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MainContext } from "./context/MainContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>
);
