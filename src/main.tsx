import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MainContext } from "./context/MainContext";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContext>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontFamily: "Barlow",
              fontWeight: "500",
              padding: "16px",
              color: "var(--black1",
            },
          }}
          position="top-center"
          reverseOrder={true}
        />
        <App />
      </MainContext>
    </Provider>
  </React.StrictMode>
);
