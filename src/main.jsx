import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/home.css";
import "./styles/about.css";


// 🔥 GLOBAL STYLES
import "./styles/navbar.css";
import "./styles/pages.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
