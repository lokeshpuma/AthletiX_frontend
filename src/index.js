import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

// Get the base name from the homepage in package.json
const getBasename = () => {
  // Default to empty string for local development
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return '';
  }
  
  // For production, use '/sport' as the basename (derived from homepage URL)
  return '/sport';
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
