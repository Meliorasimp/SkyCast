import express from "express";
import { fetchAirQualityData } from "../controller/airqualityController.js";

const airqualityRouter = express.Router();

airqualityRouter.post("/airquality", fetchAirQualityData);

export default airqualityRouter;
