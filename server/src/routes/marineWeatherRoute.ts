import express from "express";
import { fetchMarineWeatherDataAPI } from "../controller/marineWeatherController.js";

const marineWeatherRouter = express.Router();

marineWeatherRouter.post("/marineweather", fetchMarineWeatherDataAPI);

export default marineWeatherRouter;
