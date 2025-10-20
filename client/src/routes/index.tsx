import { type RouteObject } from "react-router-dom";
import Landingpage from "../pages/Landingpage";

const Router: RouteObject[] = [
  {
    path: "/",
    element: <Landingpage />,
  },
];

export default Router;
