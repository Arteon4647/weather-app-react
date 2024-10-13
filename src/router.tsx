import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Weather } from "./components/pages/Weather";
import { Forecast } from "./components/pages/Forecast";
import { History } from "./components/pages/History";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search-weather", element: <Weather /> },
  { path: "/forecast", element: <Forecast /> },
  { path: "/history", element: <History /> },
  { path: "/search-weather/:city" },
]);
