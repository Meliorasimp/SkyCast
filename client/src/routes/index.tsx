import { type RouteObject } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Airquality from "../pages/Airquality";
import Astronomy from "../pages/Astronomy";
import Marine from "../pages/Marine";
import Explore from "../pages/Explore";

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
  {
    path: "/astronomy",
    element: <Astronomy />,
  },
  {
    path: "/marineweather",
    element: <Marine />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
];

export default Router;
