import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router"; // Note: Only import BrowserRouter here

// Get the root element
const rootElement = document.getElementById("root");

// Render the application, only wrapping the main App component with the Router
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
