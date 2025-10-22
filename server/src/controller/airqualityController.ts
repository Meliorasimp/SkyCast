import type { Request, Response } from "express";
import axios from "axios";
import { OpenWeatherApiKey } from "../main.js";

export const fetchAirQualityData = async (req: Request, res: Response) => {
  const { lat, lon } = req.body;

  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${OpenWeatherApiKey}`
    );
    res.json(result.data);
  } catch (error) {
    console.error("Error fetching air quality data:", error);
    res.status(500).json({ error: "Failed to fetch air quality data" });
  }
};
