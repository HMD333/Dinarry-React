import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./lib/App.jsx";

const rootElement = document.getElementById("root");

rootElement.style.padding = "0";

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
