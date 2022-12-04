import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FeedBackProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FeedBackProvider>
    <App />
  </FeedBackProvider>
);
