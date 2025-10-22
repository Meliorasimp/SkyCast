import { type RouteObject } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Airquality from "../pages/Airquality";

const Router: RouteObject[] = [
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/airquality",
    element: <Airquality />,
  },
];

export default Router;
