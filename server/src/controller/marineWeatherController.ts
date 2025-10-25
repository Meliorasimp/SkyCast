import { type Request, type Response } from "express";
import axios from "axios";
import { weatherApiKey } from "../main.js";

export const fetchMarineWeatherDataAPI = async (
  req: Request,
  res: Response
) => {
  const { lat, lon } = req.body;

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/marine.json?key=${weatherApiKey}&q=${lat},${lon}&days=1`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching marine weather data:", error);
    res.status(500).json({ error: "Failed to fetch marine weather data" });
  }
};
