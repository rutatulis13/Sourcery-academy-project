import { AuthContextProvider } from "components/AuthContext/AuthContext";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/index.scss";

ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById("root")
);
