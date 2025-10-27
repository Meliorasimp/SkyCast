import express from "express";
import { fetchCityData } from "../controller/exploreController.js";

const exploreRouter = express.Router();

exploreRouter.post("/explorecity", fetchCityData);

export default exploreRouter;
