import axios from "axios";
import { type Request, type Response } from "express";
import { OpenWeatherApiKey } from "../main.js";
export const fetchCityData = async (req: Request, res: Response) => {
  const { city } = req.body;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OpenWeatherApiKey}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};
