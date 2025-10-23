import express from "express";
import { fetchMoonPhaseData } from "../controller/moonPhaseController.js";

const moonPhaseRouter = express.Router();

moonPhaseRouter.post("/moonphase", fetchMoonPhaseData);

export default moonPhaseRouter;
