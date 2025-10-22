import express from "express";
import {
  getForecast,
  getFiveDayForecast,
} from "../controller/forecastController.js";

const forecastRouter = express.Router();

forecastRouter.post("/forecast", getForecast);
forecastRouter.post("/fivedayforecast", getFiveDayForecast);

export default forecastRouter;
