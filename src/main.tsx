import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { WeatherContextProvider } from "./contexts/WeatherContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WeatherContextProvider>
      <RouterProvider router={router} />
    </WeatherContextProvider>
  </StrictMode>
);
