import express from "express";
import { getForecast } from "../controller/forecastController.js";

const forecastRouter = express.Router();

forecastRouter.post("/forecast", getForecast);

export default forecastRouter;
