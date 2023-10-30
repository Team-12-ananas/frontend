import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import "./main.scss";
import { CssVarsProvider } from "@mui/joy";
import theme from "./theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
